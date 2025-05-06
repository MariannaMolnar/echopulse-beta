import { useTranslation } from "react-i18next";
import ButtonHomePage from "../atoms/ButtonHomePage";

function AboutUsSection() {
  const { t } = useTranslation();

  return (
    <div className="w-[330px] md:w-[866px] flex flex-col items-center text-center justify-start mx-auto pt-19 md:pt-27">
      <p className="whitespace-pre-line text-sand text-[45.91px] md:text-7xl font-bold font-capMarker uppercase leading-[100%] tracking-[1.38px] md:tracking-[2.1px]">
        {t("home.aboutUs.title")}
      </p>

      <p className="w-[330px] md:w-[717px] text-center justify-start text-white text-[14.43px] md:text-[22px] font-normal font-lowerAndCaps leading-[150%] md:leading-[150%] tracking-[0.29px] md:tracking-[0.44px] py-12 md:py-13 [font-feature-settings:'salt'_on,_'ss01'_on,_'ss02'_on]">
        {t("home.aboutUs.description")}
      </p>

      <div className="mb-27 md:mb-35">
        <ButtonHomePage btnText={t("home.aboutUs.btn")} linkTo="/about" />
      </div>
    </div>
  );
}

export default AboutUsSection;
