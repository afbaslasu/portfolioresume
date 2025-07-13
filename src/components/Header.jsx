// src/components/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  // Create refs for each dropdown button
  const productButtonRef = useRef(null);
  const companyButtonRef = useRef(null);
  const mobileProductButtonRef = useRef(null);
  const mobileCompanyButtonRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dropdown menu with proper state management
  const toggleMenu = (menu) => {
    // If clicking the same menu that's already open, close it
    if (openMenu === menu) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menu);
    }
  };

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setOpenMenu(null); // Also close any open menus
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check if any product route is active
  const isProductActive = location.pathname.startsWith("/product");

  // Check if any company route is active
  const isCompanyActive = location.pathname.startsWith("/company");

  // Check if features route is active
  const isFeaturesActive = location.pathname.startsWith("/features");

  // Check if marketplace route is active
  const isMarketplaceActive = location.pathname.startsWith("/marketplace");

  // Product dropdown items
  const productItems = [
    {
      title: "Analytics",
      desc: "Get a better understanding of your traffic",
      path: "/product/analytics",
    },
    {
      title: "Engagement",
      desc: "Speak directly to your customers",
      path: "/product/engagement",
    },
    {
      title: "Security",
      desc: "Your customers’ data will be safe and secure",
      path: "/product/security",
    },
    {
      title: "Integrations",
      desc: "Connect with third-party tools",
      path: "/product/integrations",
    },
    {
      title: "Automations",
      desc: "Build strategic funnels that will convert",
      path: "/product/automations",
    },
  ];

  // Company dropdown items
  const companyItems = [
    {
      title: "About us",
      desc: "Learn more about our company values and mission",
      path: "/company/about",
    },
    {
      title: "Careers",
      desc: "Looking for your next career opportunity?",
      path: "/company/careers",
    },
    {
      title: "Support",
      desc: "Get in touch with our dedicated support team",
      path: "/company/support",
    },
    {
      title: "Blog",
      desc: "Read our latest announcements and perspectives",
      path: "/company/blog",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-800">
                Startup
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav ref={navRef} className="hidden md:flex items-center space-x-8">
            {/* Product Dropdown */}
            <div className="relative">
              <button
                ref={productButtonRef}
                onClick={() => toggleMenu("product")}
                className={`flex items-center font-medium transition-colors ${
                  isProductActive || openMenu === "product"
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                Product
                {openMenu === "product" ? (
                  <FaChevronUp className="ml-1 w-3 h-3" />
                ) : (
                  <FaChevronDown className="ml-1 w-3 h-3" />
                )}
              </button>

              {openMenu === "product" && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                  <div className="py-2">
                    {productItems.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) =>
                          `block px-4 py-3 transition-colors ${
                            isActive
                              ? "bg-indigo-50 border-l-4 border-indigo-600"
                              : "hover:bg-indigo-50"
                          }`
                        }
                      >
                        <div className="font-medium text-gray-900">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {item.desc}
                        </div>
                      </NavLink>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
                    <NavLink
                      to="/demo"
                      className="block text-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      Watch demo
                    </NavLink>
                    <NavLink
                      to="/contact-sales"
                      className="block text-center w-full text-indigo-600 hover:text-indigo-800 font-medium mt-2 transition-colors"
                    >
                      Contact sales
                    </NavLink>
                  </div>
                </div>
              )}
            </div>

            {/* Features */}
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`
              }
            >
              Features
            </NavLink>

            {/* Marketplace */}
            <NavLink
              to="/marketplace"
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`
              }
            >
              Marketplace
            </NavLink>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                ref={companyButtonRef}
                onClick={() => toggleMenu("company")}
                className={`flex items-center font-medium transition-colors ${
                  isCompanyActive || openMenu === "company"
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                Company
                {openMenu === "company" ? (
                  <FaChevronUp className="ml-1 w-3 h-3" />
                ) : (
                  <FaChevronDown className="ml-1 w-3 h-3" />
                )}
              </button>

              {openMenu === "company" && (
                <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                  <div className="py-2">
                    {companyItems.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) =>
                          `block px-4 py-3 transition-colors ${
                            isActive
                              ? "bg-indigo-50 border-l-4 border-indigo-600"
                              : "hover:bg-indigo-50"
                          }`
                        }
                      >
                        <div className="font-medium text-gray-900">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {item.desc}
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="container mx-auto px-4 py-6 h-full flex flex-col">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            {/* Product Accordion */}
            <div className="mb-6">
              <button
                ref={mobileProductButtonRef}
                onClick={() => toggleMenu("product-mobile")}
                className={`flex items-center justify-between w-full py-3 text-left font-medium ${
                  isProductActive || openMenu === "product-mobile"
                    ? "text-indigo-600"
                    : "text-gray-700"
                }`}
              >
                <span>Product</span>
                {openMenu === "product-mobile" ? (
                  <FaChevronUp className="w-4 h-4" />
                ) : (
                  <FaChevronDown className="w-4 h-4" />
                )}
              </button>

              {openMenu === "product-mobile" && (
                <div className="pl-4 mt-2 space-y-4">
                  {productItems.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.path}
                      className={({ isActive }) =>
                        `block py-2 pl-3 transition-colors ${
                          isActive
                            ? "text-indigo-600 font-medium border-l-2 border-indigo-600"
                            : "text-gray-700 hover:text-indigo-600"
                        }`
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </NavLink>
                  ))}
                  <div className="pt-4 space-y-3">
                    <NavLink
                      to="/demo"
                      className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Watch demo
                    </NavLink>
                    <NavLink
                      to="/contact-sales"
                      className="block w-full text-indigo-600 hover:text-indigo-800 font-medium py-2 px-4 rounded-md transition-colors text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact sales
                    </NavLink>
                  </div>
                </div>
              )}
            </div>

            {/* Features */}
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `block py-3 text-left font-medium border-t border-gray-100 ${
                  isActive ? "text-indigo-600" : "text-gray-700"
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </NavLink>

            {/* Marketplace */}
            <NavLink
              to="/marketplace"
              className={({ isActive }) =>
                `block py-3 text-left font-medium border-t border-gray-100 ${
                  isActive ? "text-indigo-600" : "text-gray-700"
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Marketplace
            </NavLink>

            {/* Company Accordion */}
            <div className="mb-6">
              <button
                ref={mobileCompanyButtonRef}
                onClick={() => toggleMenu("company-mobile")}
                className={`flex items-center justify-between w-full py-3 text-left font-medium border-t border-gray-100 ${
                  isCompanyActive || openMenu === "company-mobile"
                    ? "text-indigo-600"
                    : "text-gray-700"
                }`}
              >
                <span>Company</span>
                {openMenu === "company-mobile" ? (
                  <FaChevronUp className="w-4 h-4" />
                ) : (
                  <FaChevronDown className="w-4 h-4" />
                )}
              </button>

              {openMenu === "company-mobile" && (
                <div className="pl-4 mt-2 space-y-4">
                  {companyItems.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.path}
                      className={({ isActive }) =>
                        `block py-2 pl-3 transition-colors ${
                          isActive
                            ? "text-indigo-600 font-medium border-l-2 border-indigo-600"
                            : "text-gray-700 hover:text-indigo-600"
                        }`
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Social Icons */}
          <div className="flex justify-center space-x-8 py-8 border-t border-gray-200">
            <a
              href="#"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
