// src/components/ContactSection.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="mb-8 text-gray-700">
          Ready to start your next project? Reach out!
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded"
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded"
            required
          />
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            type="text"
            placeholder="Subject"
            className="p-3 border rounded col-span-2"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            className="p-3 border rounded col-span-2 h-32"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg col-span-2 hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
