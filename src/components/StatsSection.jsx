import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePureCounter } from "../hooks/usePureCounter";
import { FaSmile, FaBriefcase, FaClock, FaBook } from "react-icons/fa";

const stats = [
  { icon: FaSmile, end: 323, label: "Happy Clients" },
  { icon: FaBriefcase, end: 120, label: "Projects" },
  { icon: FaClock, end: 6205, label: "Hours Of Support" },
  { icon: FaBook, end: 26, label: "Published Books" },
];

export function StatsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="stats" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className="text-center"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <s.icon className="text-4xl text-blue-600 mx-auto mb-2" />
            <p className="text-3xl font-bold">{usePureCounter(s.end, 1)}</p>
            <p className="mt-2 font-semibold">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
