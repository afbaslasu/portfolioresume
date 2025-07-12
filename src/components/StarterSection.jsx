// src/components/StarterSection.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function StarterSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="starter" className="bg-gray-100 py-16" data-aos="fade-up">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Get Started Today</h2>
        <p className="text-lg mb-8">
          Join us to take your project to the next level with our expert
          solutions.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
