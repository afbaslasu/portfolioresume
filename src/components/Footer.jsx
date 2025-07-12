// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-white border-t py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} iPortfolio. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link
            to="/portfolio-details"
            className="text-gray-600 hover:text-gray-800"
          >
            Portfolio
          </Link>
          <Link
            to="/service-details"
            className="text-gray-600 hover:text-gray-800"
          >
            Service
          </Link>
          <Link
            to="/starter-page"
            className="text-gray-600 hover:text-gray-800"
          >
            Starter
          </Link>
          <Link to="/blog" className="text-gray-600 hover:text-gray-800">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
}
