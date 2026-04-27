"use client";
import { useState, useEffect } from "react";

export default function Form({ isOpen, onClose }) {
  const [form, setForm] = useState({
    hotel: "",
    city: "",
    room: "",
    entry: "",
    exit: "",
  });

  const [status, setStatus] = useState("");
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  // today date
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setVisible(true), 10);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // auto reset exit if invalid
    if (name === "entry") {
      setForm((prev) => ({
        ...prev,
        entry: value,
        exit: prev.exit && prev.exit <= value ? "" : prev.exit,
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
      setStatus("");
    }, 400);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ THIS IS WORKING

    console.log("Form submitted"); // debug

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");

        setTimeout(() => {
          handleClose();
        }, 800);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className={`relative w-full max-w-md rounded-xl p-6 shadow-xl bg-[#FFF8EF] transform transition-all duration-500
        ${
          closing
            ? "translate-y-10 opacity-0"
            : visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0"
        }`}
      >
        {/* Close */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center text-[#212121]">
          Book Your Stay
        </h2>

        {/* Status */}
        {status === "success" && (
          <p className="text-green-600 text-center mb-2">
            Submitted successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-center mb-2">
            Something went wrong
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Hotel */}
          <input
            type="text"
            name="hotel"
            placeholder="Hotel Name"
            value={form.hotel}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md"
          />

          {/* City */}
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md"
          />

          {/* Room */}
          <select
            name="room"
            value={form.room}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md"
          >
            <option value="">Room Size</option>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} Room
              </option>
            ))}
          </select>

          {/* Check-in */}
          <input
            type="date"
            name="entry"
            value={form.entry}
            onChange={handleChange}
            min={today}
            required
            className="w-full border p-2 rounded-md"
          />

          {/* Check-out */}
          <input
            type="date"
            name="exit"
            value={form.exit}
            onChange={handleChange}
            min={form.entry || today}
            required
            className="w-full border p-2 rounded-md"
          />

          <button
            type="submit"
            className="w-full bg-[#C6902B] text-white py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}