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

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  // animation trigger
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setVisible(true), 10);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.hotel) newErrors.hotel = "Required";
    if (!form.city) newErrors.city = "Required";
    if (!form.room) newErrors.room = "Required";
    if (!form.entry) newErrors.entry = "Required";
    if (!form.exit) newErrors.exit = "Required";

    if (form.entry && form.exit && form.entry >= form.exit) {
      newErrors.exit = "Exit must be after entry";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
  e.preventDefault();

  if (!validate()) {
    setStatus("error");
    return;
  }

  try {
    const res = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...form,entry: new Date(form.entry),exit: new Date(form.exit),})});

    const data = await res.json();

    console.log("API RESPONSE:", data); 

    if (data.success === true) {
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
            Something went wrong. Please try again.
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
            className="w-full border p-2 rounded-md"
          />
          {errors.hotel && <p className="text-red-500 text-xs">{errors.hotel}</p>}

          {/* City */}
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
          {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}

          {/* Room */}
          <select
            name="room"
            value={form.room}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          >
            <option value="">Room Size</option>
            {[1,2,3,4,5,6].map(n => (
              <option key={n} value={n}>{n} Room</option>
            ))}
          </select>
          {errors.room && <p className="text-red-500 text-xs">{errors.room}</p>}

          {/* Dates */}
          <input
            type="date"
            name="entry"
            value={form.entry}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
          {errors.entry && <p className="text-red-500 text-xs">{errors.entry}</p>}

          <input
            type="date"
            name="exit"
            value={form.exit}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
          {errors.exit && <p className="text-red-500 text-xs">{errors.exit}</p>}

          <button className="w-full bg-[#C6902B] text-white py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}