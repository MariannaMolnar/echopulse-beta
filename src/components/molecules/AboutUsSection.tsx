import { useTranslation } from "react-i18next";
import ButtonHomePage from "../atoms/ButtonHomePage";

function AboutUsSection() {
  const { t } = useTranslation();

  return (
    <div className="w-[866px] flex flex-col items-center text-center justify-start mx-auto pt-27">
      <p className="whitespace-pre-line text-sand text-7xl font-bold font-capMarker uppercase leading-[100%] tracking-widest">
        {t("home.aboutUs.title")}
      </p>

      <p className="w-[717px] text-center justify-start text-white text-xl font-normal font-lowerAndCaps leading-loose tracking-wide py-13">
        {t("home.aboutUs.description")}
      </p>

      <div className="mb-35">
        <ButtonHomePage btnText={t("home.aboutUs.btn")} linkTo="/about" />
      </div>
    </div>
  );
}

export default AboutUsSection;
