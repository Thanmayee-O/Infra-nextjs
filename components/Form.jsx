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

  const [status, setStatus] = useState(""); // success | error
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

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

      // ✅ RESET FORM DATA
      setForm({
        hotel: "",
        city: "",
        room: "",
        entry: "",
        exit: "",
      });

      // ✅ RESET STATUS
      setStatus("");
      setMessage("");
    }, 400);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("");
    setMessage("");

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
        setMessage("Submitted successfully!");

        // close after success
        setTimeout(() => handleClose(), 800);
      } else {
        setStatus("error");
        setMessage(data.message || "Submission failed");
      }
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "Something went wrong");
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

        {/* Messages */}
        {status === "success" && (
          <p className="text-green-600 text-center mb-2">{message}</p>
        )}

        {status === "error" && (
          <p className="text-red-500 text-center mb-2">{message}</p>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="hotel"
            placeholder="Hotel Name"
            value={form.hotel}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md"
          />

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
                {n}
              </option>
            ))}
          </select>

          <label className="text-sm text-gray-600">Check-in Date</label>
          <input
            type="date"
            name="entry"
            value={form.entry}
            onChange={handleChange}
            min={today}
            required
            className="w-full border p-2 rounded-md"
          />

          <label className="text-sm text-gray-600">Check-out Date</label>
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
            className="w-full bg-[#C6902B] text-white py-2 rounded-md hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}