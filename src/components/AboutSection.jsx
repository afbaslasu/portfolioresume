// src/components/AboutSection.jsx
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BiChevronRight,
  BiDownload,
  BiCodeCurly,
  BiCalendar,
  BiGlobe,
  BiPhone,
  BiMap,
  BiUser,
  BiEnvelope,
  BiCheckCircle,
} from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const aboutData = {
  heading: "Instructor/Author & Web Developer",
  tagline:
    "Integrating digital technology seemlessly into classroom learning pedagogy",
  intro:
    "I transform complex problems into simpler composable chunks using both deductive and inductive teaching method for easier comprehension by students. And with a passion for creating pixel-perfect, accessible applications, I design web application that bridge the gap between classroom and off school learning.",
  profileImage: "/public/assets/images/typing-849806_1920.jpg",
  stats: [
    { value: "100+", label: "Projects" },
    { value: "10K+", label: "Users" },
    { value: "98%", label: "Satisfaction" },
    { value: "15+", label: "Awards" },
  ],
  infoLeft: [
    { label: "Specialization", value: "Teaching/Web Development" },
    { label: "Education", value: "UNILORIN, B.Eng Biosystem Engr." },
    { label: "Technologies", value: "React, Ms. Office, Adobe Illustrator" },
  ],
  infoRight: [
    { label: "Experience", value: "17+ Years" },
    { label: "Methodology", value: "Agile & Lean UX" },
    { label: "Current", value: "Lead Developer @ smileLink" },
  ],
  infoLeft2: [
    { label: "Birthday", value: "XX May 1984", icon: <BiCalendar /> },
    {
      label: "Website",
      value: "https://afbaslasu.github.io/",
      icon: <BiGlobe />,
    },
    { label: "Phone", value: "081-6017-5628", icon: <BiPhone /> },
    { label: "City", value: "Kubwa, Abuja", icon: <BiMap /> },
  ],
  infoRight2: [
    { label: "Age", value: "41", icon: <BiUser /> },
    { label: "Degree", value: "B.Engineering", icon: <FaGraduationCap /> },
    { label: "Email", value: "smile@c2harvard.com/afbaslasu@gmail.com", icon: <BiEnvelope /> },
    { label: "Freelance", value: "Available", icon: <BiCheckCircle /> },
  ],
  signature: "/assets/img/signature.png",
  ctaText: "Download CV",
  cvPath: "/assets/images/ibasResume3.pdf",
  badges: [
    { icon: <BiCodeCurly />, text: "AMZ KDP Certified" },
    { icon: <BiCodeCurly />, text: "Google UX Certified" },
    { icon: <BiCodeCurly />, text: "React Specialist" },
  ],
};

export default function AboutSection() {
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleDownloadCV = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = aboutData.cvPath;
    link.download = "Ismail_Ibadehin_Resume.pdf"; // Set the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-br from-[#f9fcff] to-[#e6f0ff] dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--accent-color)] opacity-10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-1/4 left-5 w-48 h-48 bg-purple-500 opacity-5 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-[var(--accent-color)] font-mono text-sm tracking-wider mb-3">
            PROFESSIONAL PROFILE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 bg-clip-text">
            About Me
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-25 h-1 bg-blue-600 "></div>
          </h2>
          <div className="w-20 h-1 bg-[var(--accent-color)] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Profile Image with Swiper Effect */}
          <div
            className="lg:col-span-1 flex justify-center"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent-color)] to-cyan-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <Swiper
                ref={swiperRef}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                autoplay={{ delay: 5000 }}
                className="w-80 h-96 shadow-2xl rounded-2xl"
              >
                <SwiperSlide className="bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src={aboutData.profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide className="bg-gradient-to-br from-[var(--accent-color)] to-cyan-500 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-6 text-white">
                    <BiCodeCurly className="text-6xl mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">
                      Full-Stack Developer
                    </h3>
                    <p className="opacity-90">
                      Specializing in React ecosystem & modern web architecture
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* Content Area */}
          <div
            className="lg:col-span-2 space-y-8"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {aboutData.heading}
              </h3>
              <p className="text-lg text-[var(--accent-color)] font-medium mb-6">
                {aboutData.tagline}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg max-w-3xl">
                {aboutData.intro}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {aboutData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 text-center transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Professional Details Section */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Information Columns */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                    Professional Details
                  </h4>
                  <ul className="space-y-4">
                    {aboutData.infoLeft.map((item, idx) => (
                      <li key={idx} className="flex">
                        <BiChevronRight className="text-[var(--accent-color)] mt-1 mr-2 text-xl flex-shrink-0" />
                        <div>
                          <strong className="text-gray-900 dark:text-white mr-1">
                            {item.label}:
                          </strong>
                          <span className="text-gray-700 dark:text-gray-300">
                            {item.value}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                    Career Highlights
                  </h4>
                  <ul className="space-y-4">
                    {aboutData.infoRight.map((item, idx) => (
                      <li key={idx} className="flex">
                        <BiChevronRight className="text-[var(--accent-color)] mt-1 mr-2 text-xl flex-shrink-0" />
                        <div>
                          <strong className="text-gray-900 dark:text-white mr-1">
                            {item.label}:
                          </strong>
                          <span className="text-gray-700 dark:text-gray-300">
                            {item.value}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Personal Information Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                    Personal Information
                  </h4>
                  <ul className="space-y-4">
                    {aboutData.infoLeft2.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-[var(--accent-color)] mr-3">
                          {item.icon}
                        </span>
                        <div>
                          <strong className="text-gray-900 dark:text-white mr-1">
                            {item.label}:
                          </strong>
                          <span className="text-gray-700 dark:text-gray-300">
                            {item.value}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                    Contact Details
                  </h4>
                  <ul className="space-y-4">
                    {aboutData.infoRight2.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-[var(--accent-color)] mr-3">
                          {item.icon}
                        </span>
                        <div>
                          <strong className="text-gray-900 dark:text-white mr-1">
                            {item.label}:
                          </strong>
                          <span className="text-gray-700 dark:text-gray-300">
                            {item.value}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Badges and CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
              <div className="flex flex-wrap gap-3">
                {aboutData.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200"
                  >
                    {badge.icon}
                    {badge.text}
                  </span>
                ))}
              </div>

              <button
                onClick={handleDownloadCV}
                className="group flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-700 hover:from-cyan-500 hover:to-emerald-500 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <BiDownload className="text-xl transition-transform group-hover:translate-y-0.5" />
                {aboutData.ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
