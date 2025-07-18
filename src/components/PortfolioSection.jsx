// src/components/PortfolioSection.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import {
  BiFilter,
  BiZoomIn,
  BiLinkExternal,
  BiGrid,
  BiLayout,
  BiPalette,
  BiCodeBlock,
  BiMobile,
  BiBook,
} from "react-icons/bi";

const portfolioData = {
  title: "My Creative Work",
  description:
    "Explore a collection of my most impactful projects. Each piece represents a unique challenge solved through innovative design and technical excellence.",
  filters: [
    { name: "All", value: "*", icon: <BiGrid /> },
    { name: "Web Apps", value: "web", icon: <BiLayout /> },
    { name: "UI/UX Design", value: "design", icon: <BiPalette /> },
    { name: "Development", value: "development", icon: <BiCodeBlock /> },
    { name: "Mobile", value: "mobile", icon: <BiMobile /> },
    { name: "Case Studies", value: "case", icon: <BiBook /> },
  ],
  items: [
    {
      id: 1,
      title: "Fintech Dashboard",
      category: "web",
      description:
        "Comprehensive financial analytics platform with real-time data visualization",
      image: "/assets/images/Fintech Dashboard.png",
      gallery: [
        "/assets/images/Fintech Dashboard.png",
        "/assets/images/Audit Firm App.png",
        "//assets/images/IOT Dashboard.png",
      ],
    },
    {
      id: 2,
      title: "E-commerce Redesign",
      category: "design",
      description: "Complete UI/UX overhaul for fashion retail platform",
      image: "/assets/images/E-commerce Redesign.png",
      gallery: [
        "/assets/images/E-Commerce HeaderBanner 2.png",
        "/assets/images/E-Commerce HeaderBanner 1.png",
      ],
    },
    {
      id: 3,
      title: "Healthcare Mobile App",
      category: "mobile",
      description:
        "Telemedicine platform with appointment scheduling and video consultations",
      image: "/assets/images/Healthcare App.png",
      gallery: [
        "/assets/images/Healthcare App.png",
        "/assets/images/tech-replying-client-6_192.jpg",
      ],
    },
    {
      id: 4,
      title: "Design System",
      category: "design",
      description: "Comprehensive design system for enterprise SaaS product",
      image: "/assets/images/SaaS enterprise product.png",
      gallery: [
        "/assets/images/SaaS enterprise product.png",
        "/assets/images/web-dev-526.jpg",
      ],
    },
    {
      id: 5,
      title: "API Integration Platform",
      category: "development",
      description: "Middleware solution connecting multiple enterprise systems",
      image: "/assets/images/AI API Integration Platform.png",
      gallery: [
        "/assets/images/AI API Integration Platform.png",
        "/assets/images/web-dev-915.jpg",
      ],
    },
    {
      id: 6,
      title: "Travel Booking App",
      category: "mobile",
      description: "End-to-end travel experience with AI recommendations",
      image: "/assets/images/Travel Booking App.png",
      gallery: [
        "/assets/images/Travel Booking App.png",
        "/assets/images/student-849819_1280b.jpg",
      ],
    },
    {
      id: 7,
      title: "Brand Identity",
      category: "design",
      description: "Complete rebranding for tech startup",
      image: "/assets/images/Brand Identity.png",
      gallery: [
        "/assets/images/Brand Identity.png",
        "/assets/images/web-dev-art-420.jpg",
      ],
    },
    {
      id: 8,
      title: "E-learning Platform",
      category: "web",
      description:
        "Interactive learning management system with progress tracking",
      image: "/assets/images/E-Learning Platform.png",
      gallery: [
        "/assets/images/E-Learning Platform.png",
        "/assets/images/student-849825_1280.jpg",
      ],
    },
    {
      id: 9,
      title: "Performance Optimization",
      category: "development",
      description: "Speed enhancements for high-traffic e-commerce site",
      image: "/assets/images/seo Performance Optimization.png",
      gallery: [
        "/assets/images/seo Performance Optimization.png",
        "/assets/images/team-group-489.jpg",
      ],
    },
    {
      id: 10,
      title: "UX Research Report",
      category: "case",
      description: "Comprehensive study on mobile banking behaviors",
      image: "/assets/images/UX Research Report.png",
      gallery: [
        "/assets/images/UX Research Report.png",
        "/assets/images/workplace-1245776_1280.jpg",
      ],
    },
    {
      id: 11,
      title: "IoT Dashboard",
      category: "web",
      description: "Real-time monitoring for smart home devices",
      image: "/assets/images/IOT Dashboard.png",
      gallery: [
        "/assets/images/IOT Dashboard.png",
        "/assets/images/work-5382501_1280.jpg",
      ],
    },
    {
      id: 12,
      title: "Accessibility Audit",
      category: "case",
      description: "WCAG compliance improvements for government portal",
      image: "/assets/images/Real Estate Construction.png",
      gallery: [
        "/assets/images/Real Estate Construction.png",
        "/assets/images/Audit Firm App.png",
      ],
    },
  ],
};

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("*");

  // Filter portfolio items based on active filter
  const filteredItems =
    activeFilter === "*"
      ? portfolioData.items
      : portfolioData.items.filter((item) => item.category === activeFilter);

  // Initialize GLightbox
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      autoplayVideos: false,
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section
      id="portfolio"
      className="portfolio py-28 bg-gradient-to-br from-[#f9fcff] to-[#e6f0ff] dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-10 right-5 w-48 h-48 bg-purple-500 opacity-5 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          {/* Updated section header */}
          <div className="flex flex-col items-center">
            <span className="text-blue-600 font-mono text-sm tracking-wider mb-2">
              PROJECT SHOWCASE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 relative pb-3">
              My Portfolio
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-25 h-1 bg-blue-600 "></div>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {portfolioData.description}
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {portfolioData.filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter.value)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 border border-blue-300 dark:border-blue-700 shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <span className="text-lg">{filter.icon}</span>
              <span className="font-medium">{filter.name}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid with Tailwind responsive classes */}
        <div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-item transform transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="portfolio-content h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
                <div className="relative overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Portfolio Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <div className="flex justify-center gap-4">
                      <a
                        href={item.image}
                        className="glightbox preview-link w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-blue-600 transition-colors"
                        data-gallery={`gallery-${item.id}`}
                      >
                        <BiZoomIn className="text-gray-800 text-xl hover:text-white" />
                      </a>
                      <a
                        href={`/portfolio/${item.id}`}
                        className="details-link w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-blue-600 transition-colors"
                      >
                        <BiLinkExternal className="text-gray-800 text-xl hover:text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Hidden gallery images */}
                  <div className="hidden">
                    {item.gallery.slice(1).map((img, idx) => (
                      <a
                        key={idx}
                        href={img}
                        className="glightbox"
                        data-gallery={`gallery-${item.id}`}
                      ></a>
                    ))}
                  </div>
                </div>

                <div className="p-5 border-t border-gray-100 dark:border-gray-700">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-gray-750 rounded-full">
                    {
                      portfolioData.filters.find(
                        (f) => f.value === item.category
                      )?.name
                    }
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View Full Portfolio
            <BiLinkExternal className="text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
