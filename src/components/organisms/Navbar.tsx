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
      <div className="max-w-screen mx-auto pl-5 pr-8 sm:px-8 lg:px-12 pt-8 pb-11">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <div className="me-4 flex-shrink-0">
              <Logo h={50} logoSrc={logoImg} />
            </div>
            <a
              href="/"
              className="text-2xl font-bold text-gray-500 whitespace-nowrap overflow-hidden font-capMarker"
            >
              EchoPulse Records
            </a>
          </div>

          {/* Right Section - Links and Language Selector */}
          <div className="flex items-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex md:space-x-[40px] xl:space-x-[75px] 2xl:space-x-[111px] me-4">
              <Link
                to="/events"
                className="justify-start text-white text-lg xl:text-xl font-normal font-smallCaps uppercase tracking-widest hover:text-sand transition-colors duration-300 ease-out"
              >
                {t("navbar.events")}
              </Link>
              <Link
                to="/artists"
                className="justify-start text-white text-lg xl:text-xl font-normal font-smallCaps uppercase tracking-widest hover:text-sand transition-colors duration-300 ease-out"
              >
                {t("navbar.artists")}
              </Link>
              <Link
                to="/about"
                className="justify-start text-white text-lg xl:text-xl font-normal font-smallCaps uppercase tracking-widest hover:text-sand transition-colors duration-300 ease-out"
              >
                {t("navbar.about")}
              </Link>
              <Link
                to="/contact"
                className="justify-start text-white text-lg xl:text-xl font-normal font-smallCaps uppercase tracking-widest hover:text-sand transition-colors duration-300 ease-out"
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
                <div className="w-8 h-5 relative">
                  <div className={`bg-white w-8 h-0.5 rounded absolute top-1 -mt-1 transition-all duration-600 ease-out ${isOpen && `toggle-upperLine`}`}></div>
                  <div className={`bg-white w-8 h-0.5 rounded absolute top-3 -mt-1 transition-all duration-600 ease-out ${isOpen && `toggle-midLine`}`}></div>
                  <div className={`bg-white w-8 h-0.5 rounded absolute top-5 -mt-1 transition-all duration-600 ease-out ${isOpen && `toggle-lowerLine`}`}></div>
                </div>
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
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 font-smallCaps"
            onClick={toggleMenu}
          >
            {t("navbar.home")}
          </Link>
          <Link
            to="/events"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 font-smallCaps"
            onClick={toggleMenu}
          >
            {t("navbar.events")}
          </Link>
          <Link
            to="/artists"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 font-smallCaps"
            onClick={toggleMenu}
          >
            {t("navbar.artists")}
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 font-smallCaps"
            onClick={toggleMenu}
          >
            {t("navbar.about")}
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 font-smallCaps"
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
