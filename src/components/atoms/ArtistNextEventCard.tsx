import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";
import { Event } from "../../data/events";
import DateBlockResponsive from "./DateBlockResponsive";
import ReactCountryFlag from "react-country-flag";

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

      {/* --- Middle Section: Info --- */}
      <div className="flex-1 flex flex-col min-w-0">
        <p className="font-bold text-base md:text-lg text-white truncate mb-1">
          {artistEvent.name}
        </p>
        {/* Location Info */}
        <div className="flex items-baseline gap-2 text-xs md:text-sm text-gray-400">
          {/* Flag Container */}
          <div className="relative top-0.5 w-5 h-4 inline-flex items-center justify-center shrink-0 rounded-xs overflow-hidden">
            <ReactCountryFlag
              countryCode={artistEvent.address.country.code}
              svg
              style={{ width: "2em", height: "1em" }}
              className="rounded-xs"
            />
          </div>
          {/* Location Text */}
          <span className="inline min-w-0">
            <span className="truncate">{eventCity}</span>
            <span className="inline">{`, ${eventCountry}`}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ArtistNextEventCard;
