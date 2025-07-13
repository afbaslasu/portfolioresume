// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiDownload } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const BACKGROUNDS = [
  "/assets/images/student-849819_1280.jpg",
  "/assets/images/education-bg1.jpg",
  "/assets/images/tech-bg2.jpg",
];

export default function Hero() {
  const typedRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-quart",
    });

    const typed = new Typed(typedRef.current, {
      strings: [
        "Website Developer/Designer",
        "Mathematics/Physics Teacher",
        "Writer/Author",
        "Graphics Designer",
        "Video Editor/Content Creator",
        "Microsoft Office Specialist",
        "Google WorkSpace Administrator",
        "Freelancer",
      ],
      typeSpeed: 40,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });

    BACKGROUNDS.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    return () => {
      if (typed) typed.destroy();
      if (swiperRef.current?.swiper) {
        swiperRef.current.swiper.destroy(true, true);
      }
    };
  }, []);

  return (
    <>
      <section id="hero" className="relative h-screen overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, EffectFade]}
            effect="fade"
            speed={1500}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
            className="h-full w-full"
          >
            {BACKGROUNDS.map((bg, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${bg})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center">
          <div
            className="max-w-6xl w-full"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-extrabold text-white uppercase tracking-tight mb-6 mt-16 drop-shadow-md">
              Ismail <span className="text-cyan-400">Ibadehin</span>
            </h1>

            <div className="mt-6 mb-4">
              <div className="min-h-[60px]">
                <span className="text-3xl md:text-4xl font-semibold text-cyan-500 drop-shadow mr-2.5">
                  I am a
                </span>
                <span
                  ref={typedRef}
                  className="text-3xl md:text-4xl font-semibold text-cyan-300 drop-shadow"
                />
              </div>
            </div>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-100 font-light leading-relaxed drop-shadow-sm">
              I have successfully prepared over a thousand students with
              excellent results in WAEC, JAMB, IGSCE & WEB DEVT.
            </p>

            <div className="mt-12" data-aos="zoom-in" data-aos-delay="600">
              <a
                href="/assets/documents/resume.pdf"
                download="Ismail_Ibadehin_Resume.pdf"
                className="group inline-flex items-center text-xl bg-gradient-to-r from-emerald-500 to-cyan-700 hover:from-cyan-500 hover:to-emerald-500 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
              >
                <BiDownload className="mr-3 text-xl transition-transform group-hover:scale-125" />
                <span>
                  i<sup>2</sup>Resume
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Custom style for white typed cursor */}
      <style>{`
        .typed-cursor {
          color: gold;
        }
      `}</style>
    </>
  );
  <style>{`
  .typed-cursor {
    color: white !important;
  }
`}</style>;

}
