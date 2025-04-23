import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoImg from "../../assets/logo1.png";
import Logo from "../atoms/Logo";
import { useLanguage } from "../../context/LanguageContext";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LangSelect from "../molecules/LangSelect";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="fixed w-full z-50 h-36 bg-gradient-to-b from-black to-black/0">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <div className="me-4 flex-shrink-0">
              <Logo h={50} logoSrc={logoImg} />
            </div>
            <a
              href="/"
              className="text-2xl font-bold text-gray-500 whitespace-nowrap overflow-hidden font-hackney"
            >
              EchoPulse Records
            </a>
          </div>

          {/* Right Section - Links and Language Selector */}
          <div className="flex items-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 me-6">
              <Link
                to="/"
                className="text-gray-300 font-bold hover:text-blue-600 font-nexaRustSansBook"
              >
                {t("navbar.home")}
              </Link>
              <Link
                to="/events"
                className="text-gray-300 font-bold hover:text-blue-600 font-nexaRustSansBook"
              >
                {t("navbar.events")}
              </Link>
              <Link
                to="/artists"
                className="text-gray-300 font-bold hover:text-blue-600 font-nexaRustSansBook"
              >
                {t("navbar.artists")}
              </Link>
              <Link
                to="/about"
                className="text-gray-300 font-bold hover:text-blue-600 font-nexaRustSansBook"
              >
                {t("navbar.about")}
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 font-bold hover:text-blue-600 font-nexaRustSansBook"
              >
                {t("navbar.contact")}
              </Link>
              {/* Language Select Button (both mobile and desktop) */}
              <LangSelect language={language} setLanguage={setLanguage} />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 ml-8"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute right-0 w-24 bg-black/70 rounded-md shadow-lg">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 font-nexaRustSansBook"
            onClick={toggleMenu}
          >
            {t("navbar.home")}
          </Link>
          <Link
            to="/events"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 font-nexaRustSansBook"
            onClick={toggleMenu}
          >
            {t("navbar.events")}
          </Link>
          <Link
            to="/artists"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 font-nexaRustSansBook"
            onClick={toggleMenu}
          >
            {t("navbar.artists")}
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 font-nexaRustSansBook"
            onClick={toggleMenu}
          >
            {t("navbar.about")}
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 font-nexaRustSansBook"
            onClick={toggleMenu}
          >
            {t("navbar.contact")}
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
