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
    "My career path reflects continuous growth and dedication to mastering 21st century teaching pedagogy, to the craft of digital creation. Below is a timeline of my professional and educational milestones.",
  summary: {
    name: "Ismail Ibadehin",
    title: "Teacher/Author & Graphics Design/Web Developer",
    description:
      "Innovative writer/designer with 17+ years of teaching experience & creating exceptional digital products. Specializing in building responsive, accessible applications with cutting-edge technologies.",
    contact: [
      { label: "Location", value: "Kubwa, Abuja" },
      { label: "Email", value: "afbaslasu@gmail.com" },
      { label: "LinkedIn", value: "https://www.linkedin.com/in/ibaslasu/" },
    ],
    skills: [
      "React",
      "Node.js",
      "Git/Github",
      "Figma",
      "UI/UX Design",
      "AWS/AMZ KDP",
      "Responsive Design",
      "Ms. Office Tools",
      "Adobe Illustrator",
      "Photoshop",
    ],
  },
  education: [
    {
      id: 1,
      title: "Programming, Computer Science",
      institution: "Massachusetts Institute of Technology",
      period: "2019 - 2020",
      description:
        "Specialized in Advance Web Design, UI/UX Web App. Thesis on 'Improving Accessibility in Web Applications through AI-Driven Adaptations'.",
      achievements: [
        "Graduated with honors",
        "Project published in Github VCS",
      ],
    },
    {
      id: 2,
      title: "Microsoft Office Specialist",
      institution: "Udemy Academy",
      period: "2017 - 2018",
      description:
        "Majored in Microsoft Excel, Microsoft PowerPoint & Microsoft Word (Expert Level), minored in Outlook & Access",
      achievements: [
        "Recognized as a top-tier credential for Office professionals",
        "Proves deep, professional-level mastery & Validates hands-on skill in  Word, Excel, PowerPoint",
      ],
    },
    {
      id: 3,
      title: "Web Design/Development",
      institution: "Aptech Center",
      period: "2015 - 2016",
      description:
        "Focused on front-end web development and software architecture; minored in design and digital media.",
      achievements: [
        "Aptech 2016 Best Graduating Students List",
        "Team Member, Aptech Web Challenge Winners (2016)",
      ],
    },

    {
      id: 4,
      title: "B.Eng., Biosystem Engineer",
      institution: "University of Ilorin",
      period: "2002 - 2007",
      description:
        "Focused on the design and development of farm machinery and farm structure architecture; minored in wiring and electrification of farm structures.",
      achievements: [
        "Dean’s List Member (All Semesters)",
        "Design and Development of a Juice Extractor Machine",
      ],
    },
  ],
  experience: [
    {
      id: 1,
      title: "Maths Teacher/Google Education Admin",
      company: "Abraham Lincoln America Academy",
      period: "2022 - 2023",
      description:
        "Teach Mathematics, Science and oversee the school Science Club. Design Lesson Plan, set digital CA, and Paper Examination. Grade, Record, & Design Modern Report Card for students",
      achievements: [
        "Redesigned and reconfigured G Suite from Google Enterprise to Google WorkSpace for Education",
        "Configure students gadgets for easy login, &  set restrictions for student devices, & Configure Google Meet settings like recording, participant limits, and access.",
        "Set up Classroom and assign teachers permission to create/manage classes.",
        "Help users recover passwords or access locked accounts, & investigate login issues, syncing errors, or blocked content.",
        "Connect third-party educational tools (e.g., Kahoot, Canva), & set up Vault for email and document archiving",
      ],
    },
    {
      id: 2,
      title: "Mathematics/ICT Instructor",
      company: "Cradle2Harvard International",
      period: "2021 - 2022",
      description:
        "Prepare students for WAEC, NECO & IGCSE examination. Oversee IGCSE programs and manage the JET club. Maintain the school website. Train staff on Google Workspace technology integration into the classroom",
      achievements: [
        "Register the school on Google Workspace for Education",
        "Setup and configure the school Google Workspace for Education, create logins for students and staffs",
        "Train staff and students on using Google Workspace tools effectively.",
        "Manage Gmail routing, filtering, and spam control, & Enable or restrict Google services (e.g., YouTube, Meet, Gmail) based on age, group, or need.",
        "Design online Hub for lesson plan and lesson notes",
      ],
    },
    {
      id: 3,
      title: "Mathematics/Physics Teacher",
      company: "Surestart College",
      period: "2018 - 2021",
      description:
        "Prepare students for WAEC, NECO & IGCSE examination. Maintain the school website. Train staff on Google Workspace technology. Design Lesson Plan, set CA, and Examination. Grade, Record, & Design Modern Report Card for students",
      achievements: [
        "Register the school on Google Workspace for Education",
        "Create, manage, and delete user accounts for students, teachers, and staff.",
        "Organize users into organizational units (OUs) by grade, department, or role.",
        "Enable or restrict Google services (e.g., YouTube, Meet, Gmail) based on age, group, or need.",
        "Design a website for the school",
      ],
    },
  ],
  certifications: [
    {
      title: "Fullstack Web Development",
      issuer: "FreeCodeCamp",
      date: "2024",
    },
    {
      title: "Frontend Web Design/Development",
      issuer: "Aptech Center",
      date: "2015",
    },
    {
      title: "Microsoft Office Specialist",
      issuer: "Udemy Academy",
      date: "2018",
    },
    {
      title: "Google WorkSpace Administrator",
      issuer: "Google",
      date: "2019",
    },
    {
      title: "System Management",
      issuer: "Computer City College",
      date: "2002",
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
              <img
                src="/assets/images/ismail-ibadehin-pics.png"
                className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {resumeData.summary.name}
              </h3>
              <p className="text-lg text-[var(--accent-color)] font-medium mb-4">
                {resumeData.summary.title}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-left">
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
