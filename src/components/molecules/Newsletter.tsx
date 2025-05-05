import { useTranslation } from "react-i18next";
import orangeMelt from "../../images/backdrops/orangeMelt.jpg";
import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { PiSoundcloudLogoFill } from "react-icons/pi";
import { useLanguage } from "../../context/LanguageContext";

function Newsletter() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [subscription, setSubscription] = useState({
    name: "",
    email: "",
  });

  return (
    <div className="flex-shrink-0 relative w-screen h-dvh md:h-[847px] overflow-hidden">
      <img
        src={orangeMelt}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Content Area */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Left Column (desktop) - Title & description */}
        <div className="flex flex-col justify-start items-center md:items-end pt-[112px] md:pt-[260px] md:pr-46 lg:pr-51">
          <div className={`w-full max-w-[587px] mx-auto md:mx-0`}>
            <p className={`font-capMarker text-center md:text-left text-white text-[80px] md:text-[150px] lg:text-[183.75px] font-bold uppercase leading-[100%]`}>
              {t("home.newsletter.title")}
            </p>
            <p className={`font-smallCaps text-center md:text-left text-sand text-[25.6px] md:text-4xl lg:text-[45px] font-normal uppercase leading-[140%] md:leading-[130%] tracking-[2.57px] md:tracking-[4.51px]`}>
              {t("home.newsletter.description")}
            </p>
          </div>
        </div>

        {/* Right Column (desktop) - Form & mini footer*/}
        <div className="flex flex-col justify-start items-center md:items-start pt-[30px] md:pt-[308px]">
          <form className="w-full max-w-80 md:max-w-[749px] mx-auto md:mx-0 flex flex-col gap-[24px]">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder={t("home.newsletter.form.nameField")}
              value={subscription.name}
              onChange={(event) =>
                setSubscription({ ...subscription, name: event.target.value })
              }
              className="w-80 md:w-[749px] h-16 bg-white rounded-[30.11px] text-center justify-start text-greyScaleDarkLight text-xl font-normal font-smallCaps uppercase leading-tight tracking-widest"
            />

            {/* Email Input */}
            <input
              type="text"
              name="email"
              placeholder={t("home.newsletter.form.emailField")}
              value={subscription.email}
              onChange={(event) =>
                setSubscription({ ...subscription, email: event.target.value })
              }
              className="w-80 md:w-[749px] h-16 bg-white rounded-[30.11px] text-center justify-start text-greyScaleDarkLight text-xl font-normal font-smallCaps uppercase leading-tight tracking-widest"
            />

            {/* Subscribe Button */}
            <button
              type="submit"
              className="w-80 md:w-[749px] h-15 rounded-full border-2 border-sand text-center text-sand text-xl md:text-xl font-normal font-smallCaps uppercase leading-none md:leading-tight tracking-wider md:tracking-widest cursor-pointer px-7 py-[15px] md:px-9 md:py-4 hover:bg-sand hover:text-black transition-colors ease-out duration-400"
            >
              {t("home.newsletter.form.btn")}
            </button>
          </form>

          {/* Footer*/}
          <div className="grid grid-cols-1 md:items-center md:grid-cols-3 gap-[33px] md:gap-5 mb-10 mt-[83px] md:mb-11 md:mt-62">
            <div className="w-72 text-center md:text-left">
              <p className="justify-start text-white text-base font-normal font-smallCaps uppercase leading-none tracking-wider">
                {t("home.newsletter.footer.copyrights")}
              </p>
            </div>

            <div className="w-72 text-center md:text-left">
              <p className="justify-start text-white text-base font-normal font-smallCaps uppercase leading-none tracking-wider">
                {t("home.newsletter.footer.privacyPolicy")}
              </p>
            </div>

            {/* Social Links*/}
            <div className="flex pt-[13px] md:pt-0 md:mt-auto w-full justify-center md:justify-start gap-[70px] md:gap-9 text-white flex-shrink-0">
              <a
                href={t("home.newsletter.footer.links.soundcloud")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-center text-lg"
              >
                <FaInstagram className="text-4xl md:text-lg cursor-pointer" />
              </a>

              <a
                href={t("home.newsletter.footer.links.soundcloud")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-center text-lg"
              >
                <FaFacebook className="text-4xl md:text-lg cursor-pointer" />
              </a>

              <a
                href={t("home.newsletter.footer.links.soundcloud")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-center text-lg"
              >
                <PiSoundcloudLogoFill className="text-4xl md:text-lg cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
