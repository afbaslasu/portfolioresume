// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiDownload } from "react-icons/bi";

export default function Hero() {
  const typedRef = useRef(null);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const typed = new Typed(typedRef.current, {
      strings: [
        "Website Developer/Designer",
        "Teacher",
        "Writer/Author",
        "Graphics Designer",
        "Video Editor/Content Creator",
        "Microsoft Office Specialist",
        "Google WorkSpace Administrator",
        "Freelancer",
      ],
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
        <h1 className="text-8xl uppercase font-bold">Ismail Ibadehin</h1>
        <p className="mt-4 text-4xl">
          I am <span ref={typedRef}></span>
        </p>
        <p className="mt-12">
          I have successfully prepared over a thousand students with excellent
          results in WAEC, JAMB, IGSCE & WEB DEVT.
        </p>
      </div>
      <button className="group flex items-center text-2xl mt-12 gap-2 bg-gradient-to-r from-emerald-500 to-cyan-700 hover:from-cyan-500 hover:to-emerald-500 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
        <BiDownload className="text-xl transition-transform group-hover:translate-y-0.5" />i<sup>2</sup>Resume
      </button>
    </section>
  );
}
