// src/components/ServicesSection.jsx
import React from "react";
import {
  BiCode,
  BiPalette,
  BiMobile,
  BiRocket,
  BiShield,
  BiCloud,
  BiTrendingUp,
  BiBitcoin,
} from "react-icons/bi";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Custom, responsive websites built with modern technologies like React, Next.js, and Tailwind CSS for optimal performance and user experience.",
      icon: <BiCode className="text-2xl" />,
      delay: "100",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that enhance engagement and conversion through intuitive interfaces and seamless user journeys.",
      icon: <BiPalette className="text-2xl" />,
      delay: "200",
    },
    {
      id: 3,
      title: "Mobile Applications",
      description:
        "Cross-platform mobile apps that deliver native-like performance with React Native for both iOS and Android platforms.",
      icon: <BiMobile className="text-2xl" />,
      delay: "300",
    },
    {
      id: 4,
      title: "Product Strategy",
      description:
        "Comprehensive product planning from concept to launch, including market research, user personas, and roadmap development.",
      icon: <BiRocket className="text-2xl" />,
      delay: "400",
    },
    {
      id: 5,
      title: "Cybersecurity",
      description:
        "Protect your digital assets with security assessments, vulnerability testing, and implementation of best security practices.",
      icon: <BiShield className="text-2xl" />,
      delay: "500",
    },
    {
      id: 6,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure setup and migration services using AWS, Azure, and Google Cloud Platform.",
      icon: <BiCloud className="text-2xl" />,
      delay: "600",
    },
    {
      id: 7,
      title: "Performance Optimization",
      description:
        "Accelerate your website with performance audits, code optimizations, and infrastructure improvements.",
      icon: <BiTrendingUp className="text-2xl" />,
      delay: "700",
    },
    {
      id: 8,
      title: "E-commerce Solutions",
      description:
        "Complete online store setup with payment integration, inventory management, and conversion optimization.",
      icon: <BiBitcoin className="text-2xl" />,
      delay: "800",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-[#f8fbff] to-[#e6f0ff] dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-10 left-5 w-48 h-48 bg-purple-500 opacity-5 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-blue-600 font-mono text-sm tracking-wider mb-3">
            OUR EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 relative pb-3">
            Professional Services
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-25 h-1 bg-blue-600 "></div>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            I deliver cutting-edge solutions that drive business growth and
            digital transformation. My services are designed to meet the unique
            challenges of the modern digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 group-hover:bg-white group-hover:border group-hover:border-blue-300 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 font-medium transition-colors group-hover:underline"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>

              {/* Hover effect bar */}
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get in Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
