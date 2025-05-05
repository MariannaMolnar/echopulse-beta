import { useTranslation } from "react-i18next";
import orangeMelt from "../../images/backdrops/orangeMelt.jpg";
import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { PiSoundcloudLogoFill } from "react-icons/pi";

function Newsletter() {
  const { t } = useTranslation();
  const [subscription, setSubscription] = useState({
    name: "",
    email: "",
  });

  return (
    <div className="flex-shrink-0 relative w-screen h-[813px] md:h-[847px] overflow-hidden">
      <img
        src={orangeMelt}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Content Area */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2  h-full">
        {/* Left Column - Title & description */}
        <div className="flex flex-col justify-start items-center md:items-end pt-[180px] md:pt-[260px] pr-6 md:pr-46 lg:pr-51">
          <div className="w-full max-w-[587px] mx-auto md:mx-0">
            <p className="font-capMarker text-center md:text-left text-white text-[100px] md:text-[150px] lg:text-[183.75px] font-bold uppercase leading-[100%]">
              {t("home.newsletter.title")}
            </p>
            <p className="font-smallCaps text-center md:text-left text-sand text-3xl md:text-4xl lg:text-[45px] font-normal uppercase leading-[130%] tracking-[4.51px]">
              {t("home.newsletter.description")}
            </p>
          </div>
        </div>

        {/* Right Column - Form & mini footer*/}
        <div className="flex flex-col justify-start items-center md:items-start pt-[100px] md:pt-[308px]">
          {" "}
          {/* Approximate top offset with pt-* */}
          <form className="w-full max-w-[749px] mx-auto md:mx-0 flex flex-col gap-[25px]">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder={t("home.newsletter.form.nameField")}
              value={subscription.name}
              onChange={(event) =>
                setSubscription({ ...subscription, name: event.target.value })
              }
              className="w-[749px] h-16 bg-white rounded-[30.11px] text-center justify-start text-greyScaleDarkLight text-xl font-normal font-smallCaps uppercase leading-tight tracking-widest"
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
              className="w-[749px] h-16 bg-white rounded-[30.11px] text-center justify-start text-greyScaleDarkLight text-xl font-normal font-smallCaps uppercase leading-tight tracking-widest"
            />

            {/* Subscribe Button */}
            <button
              type="submit"
              className="w-57 md:w-[749px] rounded-full border-2 border-sand text-center text-sand text-base md:text-xl font-normal font-smallCaps uppercase leading-none md:leading-tight tracking-wider md:tracking-widest cursor-pointer px-7 py-[15px] md:px-9 md:py-4 hover:bg-sand hover:text-black transition-colors ease-out duration-400"
            >
              {t("home.newsletter.form.btn")}
            </button>
          </form>
          {/* Footer*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-11 mt-62">
            <div className="w-72">
              <p className="justify-start text-white text-base font-normal font-smallCaps uppercase leading-none tracking-wider">
                {t("home.newsletter.footer.copyrights")}
              </p>
            </div>

            <div>
              <p className="justify-start text-white text-base font-normal font-smallCaps uppercase leading-none tracking-wider">
                {t("home.newsletter.footer.privacyPolicy")}
              </p>
            </div>

            {/* Social Links*/}
            <div className="flex mt-auto w-full justify-start gap-9 text-white flex-shrink-0">
              <a
                href={t("home.newsletter.footer.links.soundcloud")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-center text-lg"
              >
                <FaInstagram className="text-lg cursor-pointer" />
              </a>

              <a
                href={t("home.newsletter.footer.links.soundcloud")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-center text-lg"
              >
                <FaFacebook className="text-lg cursor-pointer" />
              </a>

              <a
                href={t("home.newsletter.footer.links.soundcloud")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-center text-lg"
              >
                <PiSoundcloudLogoFill className="text-lg cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
