// src/components/ResumeSection.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export function ResumeSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <section id="resume" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <p className="mb-8 text-gray-700">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div data-aos="fade-up" data-aos-delay={100}>
            <h3 className="text-2xl font-semibold mb-2">Summary</h3>
            <p className="text-gray-700 mb-4">
              Innovative and deadline-driven Graphic Designer with 3+ years of
              experience.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Portland par 127, Orlando, FL</li>
              <li>(123) 456-7891</li>
              <li>alice.barkley@example.com</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-8 mb-2">Education</h3>
            <div className="mb-4">
              <h4 className="font-semibold">
                Master of Fine Arts & Graphic Design
              </h4>
              <p className="italic">
                2015 - 2016, Rochester Institute of Technology
              </p>
              <p className="text-gray-700">Qui deserunt veniam...</p>
            </div>
            <div>
              <h4 className="font-semibold">
                Bachelor of Fine Arts & Graphic Design
              </h4>
              <p className="italic">
                2010 - 2014, Rochester Institute of Technology
              </p>
              <p className="text-gray-700">Quia nobis sequi...</p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay={200}>
            <h3 className="text-2xl font-semibold mb-2">
              Professional Experience
            </h3>
            <div className="mb-4">
              <h4 className="font-semibold">
                Senior Graphic Design Specialist
              </h4>
              <p className="italic">2019 - Present, Experion, New York, NY</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Lead in the design, development...</li>
                <li>Delegate tasks...</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Graphic Design Specialist</h4>
              <p className="italic">2017 - 2018, Stepping Stone Advertising</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Developed numerous marketing programs...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
