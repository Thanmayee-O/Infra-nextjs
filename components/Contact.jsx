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

        // clear message after 2 seconds
        setTimeout(() => {
          setStatus("");
        }, 2000);

        // reset form
        setForm({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        setStatus(data.message);

        setTimeout(() => {
          setStatus("");
        }, 2000);
      }
    } catch (err) {
      setStatus("error");

      setTimeout(() => {
        setStatus("");
      }, 2000);
    }
  };

  return (
    <section className="w-full min-h-screen bg-[#FFF8EF] flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2d2d2d] leading-tight">
            Let’s Build Your <br />
            Dream Space <br />
            Together!
          </h1>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">

          {/* Success / Error Message */}
          {status && (
            <p className={`text-sm ${
              status === "success" ? "text-green-600" : "text-red-500"
            }`}>
              {status === "success"
                ? "Message sent successfully!"
                : status}
            </p>
          )}

          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            className="w-full pt-[10px] pr-[32px] pb-[10px] pl-[32px] bg-[#F9F9F9] border border-[#d4c4a8] outline-none text-sm font-[500]"
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail address"
            value={form.email}
            onChange={handleChange}
            className="w-full pt-[10px] pr-[32px] pb-[10px] pl-[32px] bg-[#F9F9F9] border border-[#d4c4a8] outline-none text-sm font-[500]"
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile number"
            value={form.mobile}
            onChange={handleChange}
            className="w-full py-[10px] px-[32px] bg-[#F9F9F9] border border-[#d4c4a8] outline-none text-sm font-[500]"
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full py-[23px] px-[29px] bg-[#F9F9F9] border border-[#d4c4a8] outline-none text-sm font-[500] resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-[#C78800] text-white px-6 py-2 text-sm font-medium"
          >
            SUBMIT
          </button>
        </form>

      </div>
    </section>
  );
}