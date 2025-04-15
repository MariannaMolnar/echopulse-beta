import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";
import { Event } from "../../data/events";
import DateBlockResponsive from "./DateBlockResponsive";

type NextEventProps = {
  artistEvent: Event;
};

function ArtistNextEventCard({ artistEvent }: NextEventProps) {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const eventCity =
    artistEvent.address.city[language as keyof typeof artistEvent.address.city];
  const eventCountry =
    artistEvent.address.country.name[
      language as keyof typeof artistEvent.address.country.name
    ];
  const monthsArray = t("events.months", { returnObjects: true }) as string[];
  const monthIndex = artistEvent.date.getMonth();
  const monthName = monthsArray[monthIndex];

  return (
    <div className="flex items-center gap-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden p-3 md:p-4 text-gray-200">
      {/* --- Left Section: Date Block --- */}
      <div className="flex-shrink-0">
        <DateBlockResponsive
          date={artistEvent.date.getDate()}
          monthName={monthName}
          year={artistEvent.date.getFullYear()}
          startSize="small"
        />
      </div>


    </div>
  );
}

export default ArtistNextEventCard;
