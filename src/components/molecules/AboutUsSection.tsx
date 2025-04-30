import { useTranslation } from "react-i18next";
import ButtonHomePage from "../atoms/ButtonHomePage";

function AboutUsSection() {
  const { t } = useTranslation();

  return (
    <div className="w-80 md:w-[866px] flex flex-col items-center text-center justify-start mx-auto pt-19 md:pt-27">
      <p className="whitespace-pre-line text-sand text-5xl md:text-7xl font-bold font-capMarker uppercase leading-[100%] tracking-wide md:tracking-widest">
        {t("home.aboutUs.title")}
      </p>

      <p className="w-80 md:w-[717px] text-center justify-start text-white text-sm md:text-xl font-normal font-lowerAndCaps leading-[150%] md:leading-loose tracking-tight md:tracking-wide py-12 md:py-13">
        {t("home.aboutUs.description")}
      </p>

      <div className="mb-27 md:mb-35">
        <ButtonHomePage btnText={t("home.aboutUs.btn")} linkTo="/about" />
      </div>
    </div>
  );
}

export default AboutUsSection;
