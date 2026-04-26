"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setTimeout(() => setStatus(""), 2000);

        setForm({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        setStatus(data.message);
        setTimeout(() => setStatus(""), 2000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus(""), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#FFF8EF] flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-24"
    >
      <div className="max-w-6xl w-full flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Left Content */}
        <div className="w-full text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2d2d2d] leading-tight">
            Let’s Build Your <br />
            Dream Space <br />
            Together!
          </h1>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col space-y-4 sm:space-y-5"
        >

          {/* Status Message */}
          {status && (
            <p
              className={`text-sm ${
                status === "success" ? "text-green-600" : "text-red-500"
              }`}
            >
              {status === "success"
                ? "Message sent successfully!"
                : status}
            </p>
          )}

          {/* Inputs */}
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            className="w-full py-[12px] px-[20px] sm:px-[32px] bg-[#F9F9F9] border border-[#d4c4a8] outline-none text-sm font-[500]"
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail address"
            value={form.email}
            onChange={handleChange}
            className="w-full py-[12px] px-[20px] sm:px-[32px] bg-[#F9F9F9] border border-[#d4c4a8] outline-none text-sm font-[500]"
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile number"
            value={form.mobile}
            onChange={handleChange}
            className="w-full py-[12px] px-[20px] sm:px-[32px] bg-[#F9F9F9] border border-[#d4c4a8] outline-none text-sm font-[500]"
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full py-[16px] sm:py-[23px] px-[20px] sm:px-[29px] bg-[#F9F9F9] border border-[#d4c4a8] outline-none text-sm font-[500] resize-none"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#C78800] text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}