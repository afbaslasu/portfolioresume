// src/components/SkillsSection.jsx
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BiCodeAlt,
  BiPalette,
  BiServer,
  BiData,
  BiMobileAlt,
  BiRocket,
} from "react-icons/bi";

const skillsData = {
  title: "Technical Expertise",
  description:
    "My technical proficiency spans across graphics design to web development, with specialized focus on creating responsive, accessible, and performant web applications.",
  categories: [
    {
      name: "Frontend Development",
      icon: <BiCodeAlt className="text-3xl" />,
      skills: [
        { name: "HTML5", level: 100 },
        { name: "CSS3/TailwindCSS", level: 95 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 80 },
      ],
    },
    {
      name: "UI/UX Design",
      icon: <BiPalette className="text-3xl" />,
      skills: [
        { name: "Adobe XD", level: 85 },
        { name: "Photoshop", level: 70 },
        { name: "CorelDraw", level: 85 },
        { name: "Figma", level: 60 },
      ],
    },
    {
      name: "Backend & DevOps",
      icon: <BiServer className="text-3xl" />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 70 },
      ],
    },
    {
      name: "Data & Analytics",
      icon: <BiData className="text-3xl" />,
      skills: [
        { name: "SQL", level: 65 },
        { name: "Data Visualization", level: 65 },
        { name: "Python", level: 20 },
        { name: "REST APIs", level: 60 },
      ],
    },
    {
      name: "Mobile & PWA",
      icon: <BiMobileAlt className="text-3xl" />,
      skills: [
        { name: "React Native", level: 25 },
        { name: "Responsive Design", level: 95 },
        { name: "Performance Opt", level: 90 },
        { name: "Cross-browser", level: 95 },
      ],
    },
    {
      name: "Tools & Methods",
      icon: <BiRocket className="text-3xl" />,
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Vercel/Firebase", level: 95 },
        { name: "Testing", level: 90 },
        { name: "Webpack", level: 40 },
      ],
    },
  ],
};

export default function SkillsSection() {
  const skillsRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });

    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const animateSkillBars = () => {
    const progressBars = document.querySelectorAll(".skill-progress");
    progressBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width + "%";
    });
  };

  return (
    <section
      id="skills"
      className="skills py-28 bg-gradient-to-br from-[#f9fcff] to-[#e6f0ff] dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent-color)] opacity-10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-10 right-5 w-48 h-48 bg-purple-500 opacity-5 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-[var(--accent-color)] font-mono text-sm tracking-wider mb-3">
            TECHNICAL PROFICIENCY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {skillsData.description}
          </p>
          <div className="w-20 h-1 bg-[var(--accent-color)] mx-auto mt-4"></div>
        </div>

        <div
          ref={skillsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 skills-animation"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {skillsData.categories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] dark:from-gray-850 dark:to-gray-900 flex items-center gap-4">
                <div className="text-[var(--accent-color)]">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              <div className="p-6 space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-[var(--accent-color)]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="skill-progress h-2.5 rounded-full bg-gradient-to-r from-[var(--accent-color)] to-cyan-500 transition-all duration-1000 ease-out"
                        style={{ width: "0%" }}
                        data-width={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
