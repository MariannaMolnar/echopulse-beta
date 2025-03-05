import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoImg from "../assets/logo1.png";
import Logo from "./Logo";

//type Props = {}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/50 shadow-md fixed sticky top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="me-8">
              <Logo h={50} logoSrc={logoImg} />
            </div>
            <a href="/" className="text-2xl font-bold text-gray-500">
              EchoPulse Records
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-300 font-bold hover:text-blue-600">
              Home
            </a>
            <a
              href="/events"
              className="text-gray-300 font-bold hover:text-blue-600"
            >
              Events
            </a>
            <a
              href="/artists"
              className="text-gray-300 font-bold hover:text-blue-600"
            >
              Artists
            </a>
            <a
              href="/about"
              className="text-gray-300 font-bold hover:text-blue-600"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-300 font-bold hover:text-blue-600"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/30 border-t border-gray-700">
          <a
            href="/"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="/events"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
          >
            Events
          </a>
          <a
            href="/artists"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
          >
            Artists
          </a>
          <a
            href="/about"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
