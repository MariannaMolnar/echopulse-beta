import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import logoImg from "../assets/logo1.png";
import Logo from "./Logo";
import { useLanguage } from "../context/LanguageContext"; 
import LangDropdown from "./LangDropdown";
import { useTranslation } from "react-i18next";
const LANGUAGES = [{ title: "en" }, { title: "hu" }];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  function toggleMenu() {
    setIsOpen(!isOpen);
    setLangDropdownOpen(false);
  }

  function toggleLangDropdown() {
    setLangDropdownOpen(!langDropdownOpen);
    setIsOpen(false);
  }

  return (
    <nav className="bg-black/50 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <div className="me-4 flex-shrink-0">
              <Logo h={50} logoSrc={logoImg} />
            </div>
            <a
              href="/"
              className="text-xl font-bold text-gray-500 whitespace-nowrap overflow-hidden"
            >
              EchoPulse Records
            </a>
          </div>

          {/* Right Section - Links and Language Selector */}
          <div className="flex items-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 me-6">
              <a
                href="/"
                className="text-gray-300 font-bold hover:text-blue-600"
              >
                {t("navbar.home")}
              </a>
              <a
                href="/events"
                className="text-gray-300 font-bold hover:text-blue-600"
              >
                {t("navbar.events")}
              </a>
              <a
                href="/artists"
                className="text-gray-300 font-bold hover:text-blue-600"
              >
                {t("navbar.artists")}
              </a>
              <a
                href="/about"
                className="text-gray-300 font-bold hover:text-blue-600"
              >
                {t("navbar.about")}
              </a>
              <a
                href="/contact"
                className="text-gray-300 font-bold hover:text-blue-600"
              >
                {t("navbar.contact")}
              </a>
            </div>

            {/* Language Select Button and Dropdown (both mobile and desktop) */}
            <LangDropdown
              buttonText={language.toUpperCase()}
              items={LANGUAGES}
              setLanguage={setLanguage}
              handleToggle={toggleLangDropdown}
              isOpen={langDropdownOpen}
            >
              <GlobeAltIcon className="h-5 w-5" />
            </LangDropdown>

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
          <a
            href="/"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
          >
            {t("navbar.home")}
          </a>
          <a
            href="/events"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
          >
            {t("navbar.events")}
          </a>
          <a
            href="/artists"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
          >
            {t("navbar.artists")}
          </a>
          <a
            href="/about"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
          >
            {t("navbar.about")}
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
          >
            {t("navbar.contact")}
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
