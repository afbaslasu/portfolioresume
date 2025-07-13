// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="text-2xl font-bold tracking-tighter text-gray-900">
            Your<span className="text-blue-600">Logo</span>
          </div>
        </div>

        {/* Tagline */}
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <p className="text-gray-600 italic">
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-5">
            <Link
              to="#"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
            >
              <FaTwitter className="text-xl" />
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-blue-700 transition-colors duration-300"
            >
              <FaLinkedinIn className="text-xl" />
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-blue-800 transition-colors duration-300"
            >
              <FaFacebookF className="text-xl" />
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-gray-700 transition-colors duration-300"
            >
              <FaGithub className="text-xl" />
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-pink-600 transition-colors duration-300"
            >
              <FaDribbble className="text-xl" />
            </Link>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Solutions */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4 tracking-wider">
              Solutions
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Analytics
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Automation
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Commerce
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4 tracking-wider">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Submit ticket
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4 tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4 tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
