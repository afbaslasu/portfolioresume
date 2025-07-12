// src/components/PortfolioSection.jsx
import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import AOS from "aos";
import "aos/dist/aos.css";
const filters = [
  { label: "All", value: "*" },
  { label: "App", value: ".filter-app" },
  { label: "Product", value: ".filter-product" },
  { label: "Branding", value: ".filter-branding" },
  { label: "Books", value: ".filter-books" },
];
const items = [
  /* array of 12 items as earlier */
];
export function PortfolioSection() {
  const [active, setActive] = useState("*");
  const grid = useRef(null);
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  useEffect(() => {
    let iso;
    if (grid.current)
      iso = new Isotope(grid.current, {
        itemSelector: ".portfolio-item",
        layoutMode: "masonry",
      });
    iso && iso.arrange({ filter: active });
    return () => iso && iso.destroy();
  }, [active]);
  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
        <p className="mb-8 text-gray-700">Magnam dolores commodi suscipit...</p>
        <div className="flex space-x-4 mb-8">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-2 rounded ${
                active === f.value ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div ref={grid} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div
              key={idx}
              className={`portfolio-item ${it.filter}`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={`/assets/img/portfolio/${it.img}`}
                  alt={it.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{it.title}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
