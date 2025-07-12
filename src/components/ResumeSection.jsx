// src/components/ResumeSection.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BiBriefcase,
  BiBook,
  BiMedal,
  BiCodeCurly,
  BiLayer,
  BiUserCircle,
} from "react-icons/bi";

const resumeData = {
  title: "Professional Journey",
  description:
    "My career path reflects continuous growth and dedication to mastering the craft of digital creation. Below is a timeline of my professional and educational milestones.",
  summary: {
    name: "Alex Morgan",
    title: "Senior UI/UX Engineer & Full-Stack Developer",
    description:
      "Innovative developer with 8+ years of experience creating exceptional digital products. Specializing in building responsive, accessible applications with cutting-edge technologies.",
    contact: [
      { label: "Location", value: "San Francisco, CA" },
      { label: "Email", value: "alex.morgan@example.com" },
      { label: "LinkedIn", value: "linkedin.com/in/alexmorgan" },
    ],
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Figma",
      "UI/UX Design",
      "AWS",
      "Responsive Design",
      "Accessibility",
    ],
  },
  education: [
    {
      id: 1,
      title: "M.S. Computer Science",
      institution: "Stanford University",
      period: "2014 - 2016",
      description:
        "Specialized in Human-Computer Interaction and Machine Learning. Thesis on 'Improving Accessibility in Web Applications through AI-Driven Adaptations'.",
      achievements: ["Graduated with honors", "Research published in ACM CHI"],
    },
    {
      id: 2,
      title: "B.S. Software Engineering",
      institution: "MIT",
      period: "2010 - 2014",
      description:
        "Focus on full-stack development and software architecture. Minored in Design and Digital Media.",
      achievements: [
        "Dean's List all semesters",
        "Winner of MIT App Challenge 2013",
      ],
    },
  ],
  experience: [
    {
      id: 1,
      title: "Lead UI/UX Engineer",
      company: "TechInnovate Inc.",
      period: "2020 - Present",
      description:
        "Leading a team of 12 developers and designers to create cutting-edge SaaS products for enterprise clients.",
      achievements: [
        "Redesigned flagship product resulting in 40% increase in user engagement",
        "Implemented design system adopted company-wide",
        "Mentored junior developers and established training programs",
      ],
    },
    {
      id: 2,
      title: "Senior Frontend Developer",
      company: "Digital Solutions Co.",
      period: "2017 - 2020",
      description:
        "Developed complex web applications for financial and healthcare industries with strict compliance requirements.",
      achievements: [
        "Architected micro-frontend framework adopted across 5 products",
        "Reduced page load times by 65% through performance optimization",
        "Implemented CI/CD pipeline reducing deployment time by 80%",
      ],
    },
    {
      id: 3,
      title: "Full-Stack Developer",
      company: "Creative Web Agency",
      period: "2016 - 2017",
      description:
        "Built custom web applications and e-commerce solutions for diverse client portfolio.",
      achievements: [
        "Developed 15+ client websites with 100% satisfaction rate",
        "Created reusable component library saving 200+ development hours annually",
        "Introduced accessibility audits as standard practice",
      ],
    },
  ],
  certifications: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
    },
    {
      title: "Google UX Design Professional Certificate",
      issuer: "Google",
      date: "2021",
    },
    {
      title: "React Advanced Concepts",
      issuer: "Frontend Masters",
      date: "2020",
    },
  ],
};

export default function ResumeSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="resume"
      className="resume py-28 bg-gradient-to-br from-[#f9fcff] to-[#e6f0ff] dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--accent-color)] opacity-10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-10 left-5 w-48 h-48 bg-purple-500 opacity-5 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-[var(--accent-color)] font-mono text-sm tracking-wider mb-3">
            CAREER TIMELINE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Resume
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {resumeData.description}
          </p>
          <div className="w-20 h-1 bg-[var(--accent-color)] mx-auto mt-4"></div>
        </div>

        {/* Summary Card */}
        <div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16 border border-gray-100 dark:border-gray-700"
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex flex-col items-center text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {resumeData.summary.name}
              </h3>
              <p className="text-lg text-[var(--accent-color)] font-medium mb-4">
                {resumeData.summary.title}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {resumeData.summary.description}
              </p>

              <div className="mt-auto w-full">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <BiUserCircle className="text-[var(--accent-color)]" />
                  Contact
                </h4>
                <ul className="space-y-2">
                  {resumeData.summary.contact.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="font-medium">{item.label}:</span>
                      <span>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:w-2/3">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <BiCodeCurly className="text-[var(--accent-color)]" />
                Core Competencies
              </h4>
              <div className="flex flex-wrap gap-3 mb-8">
                {resumeData.summary.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-800 dark:text-gray-200 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <BiMedal className="text-[var(--accent-color)]" />
                Certifications
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-[var(--accent-color)] pl-4 py-2 bg-gray-50 dark:bg-gray-750 rounded-r-lg"
                  >
                    <h5 className="font-bold text-gray-900 dark:text-white">
                      {cert.title}
                    </h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      {cert.issuer} | {cert.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div data-aos="fade-right">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[var(--accent-color)] p-3 rounded-full">
                <BiBook className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="relative pl-8 ml-4 border-l-2 border-[var(--accent-color)] space-y-12">
              {resumeData.education.map((edu) => (
                <div
                  key={edu.id}
                  className="relative"
                  data-aos="fade-right"
                  data-aos-delay={edu.id * 100}
                >
                  <div className="absolute -left-11 top-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-[var(--accent-color)]"></div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {edu.title}
                        </h4>
                        <p className="text-lg text-[var(--accent-color)]">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {edu.description}
                    </p>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <BiMedal className="text-[var(--accent-color)] mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div data-aos="fade-left">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[var(--accent-color)] p-3 rounded-full">
                <BiBriefcase className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Experience
              </h3>
            </div>

            <div className="relative pl-8 ml-4 border-l-2 border-[var(--accent-color)] space-y-12">
              {resumeData.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="relative"
                  data-aos="fade-left"
                  data-aos-delay={exp.id * 100}
                >
                  <div className="absolute -left-11 top-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-[var(--accent-color)]"></div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h4>
                        <p className="text-lg text-[var(--accent-color)]">
                          {exp.company}
                        </p>
                      </div>
                      <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <BiLayer className="text-[var(--accent-color)] mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
