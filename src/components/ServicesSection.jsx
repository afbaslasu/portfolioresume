// src/components/ServicesSection.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBriefcase,
  FaClipboard,
  FaChartLine,
  FaPaperPlane,
  FaLightbulb,
  FaCalendarAlt,
} from "react-icons/fa";
const services = [
  /* array of 6 services as earlier */
];
export function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4">Services</h2>
        <p className="mb-8 text-gray-700">Magnam dolores commodi suscipit...</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="flex space-x-4"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <s.icon className="text-3xl text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
