import { useTranslation } from "react-i18next";
import ButtonHomePage from "../atoms/ButtonHomePage";

function UpcomingEvents() {
  const { t } = useTranslation();
  return (
    <div className="w-80 md:w-[866px] flex flex-col items-center text-center justify-start mx-auto pt-23 md:pt-27">
      {/* section title */}
      <p className="whitespace-pre-line text-sand text-3xl md:text-7xl font-normal font-smallCaps uppercase leading-[110%] tracking-[3px] md:tracking-widest">
        {t("home.upcomingEvents.title")}
      </p>

      {/* upcoming event cards*/}
      <div className="pt-16 pb-17">
        
      </div>

      {/* button */}
      <div className="mb-31 md:mb-35">
        <ButtonHomePage
          btnText={t("home.upcomingEvents.btn")}
          linkTo="/about"
        />
      </div>
    </div>
  );
}

export default UpcomingEvents;
