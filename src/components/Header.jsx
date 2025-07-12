// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto p-4 flex space-x-6">
        <Link to="/" className="font-bold hover:text-blue-600">
          Home
        </Link>
        <Link to="/portfolio-details" className="hover:text-blue-600">
          Portfolio
        </Link>
        <Link to="/service-details" className="hover:text-blue-600">
          Service
        </Link>
        <Link to="/starter-page" className="hover:text-blue-600">
          Starter
        </Link>
        <Link to="/blog" className="hover:text-blue-600">
          Blog
        </Link>
      </nav>
    </header>
  );
}
