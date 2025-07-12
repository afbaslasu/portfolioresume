// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Hero() {
  const typedRef = useRef(null);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const typed = new Typed(typedRef.current, {
      strings: ["Developer", "Designer", "Freelancer", "Photographer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => typed.destroy();
  }, []);
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('../public/assets/images/student-849819_1280.jpg')",
      }}
    >
      <div className="text-center text-white" data-aos="fade-in">
        <h1 className="text-5xl font-bold">Your Name Here</h1>
        <p className="mt-4 text-2xl">
          I'm <span ref={typedRef}></span>
        </p>
      </div>
    </section>
  );
}
