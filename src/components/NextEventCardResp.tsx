import ReactCountryFlag from "react-country-flag";
import { useLanguage } from "../context/LanguageContext";
import { Event } from "../data/events";
import { useTranslation } from "react-i18next";
import DateBlockResponsive from "./atoms/DateBlockResponsive";
import ArtistAvatarResponsive from "./atoms/ArtistAvatarResponsive";
import FacebookEventButtonResponsive from "./atoms/FacebookEventButtonResponsive";
import TicketsButtonResponsive from "./atoms/TicketsButtonResponsive";

type Props = {
  event: Event;
};

function NextEventCardResp({ event }: Props) {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const eventCity =
    event.address.city[language as keyof typeof event.address.city];
  const eventCountry =
    event.address.country.name[
      language as keyof typeof event.address.country.name
    ];
  const monthsArray = t("events.months", { returnObjects: true }) as string[];
  const monthIndex = event.date.getMonth();
  const monthName = monthsArray[monthIndex];

  return (
    // Basic Card Structure Example (Tailwind)
    <div className="flex bg-gray-900 rounded-2xl overflow-hidden shadow-lg my-4 max-h-130 min-w-80">
      {/* Left Info Column */}
      <div className="flex-1 min-w-50 p-4 md:p-4 lg:p-6 bg-gray-800 text-gray-200 flex flex-col">
        {/* Outer div for top area (date & address) */}
        <div className="flex items-start gap-4 mb-6">
          {/* Date Block (First item in the row) */}

          <DateBlockResponsive
            date={event.date.getDate()}
            monthName={monthName}
            year={event.date.getFullYear()}
          />

          {/* Vertical Column for Title and Location (Second item in the row) */}
          <div className="flex flex-col flex-1 min-w-0 -mt-0.5 md:mt-1">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold tracking-wide mb-1 text-white">
              {event.name}
            </h3>

            {/* City & country container */}
            <div className="flex items-baseline gap-2 text-sm md:text-base text-gray-400 mt-1 md:mt-3">
              {/* Flag Container */}
              <div className="relative top-0.5 w-5 h-4 inline-flex items-center justify-center shrink-0 rounded-xs overflow-hidden">
                <ReactCountryFlag
                  countryCode={event.address.country.code}
                  svg
                  style={{ width: "2em", height: "1em" }}
                  className="rounded-xs"
                />
              </div>
              <span className="inline min-w-0">
                <span className="truncate">{eventCity}</span>
                <span className="hidden md:inline">{`, ${eventCountry}`}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom group */}
        <div className="mt-auto">
          {/* mt-auto pushes to bottom */}
          {/* Artist Avatars */}
          <div className="flex items-center -space-x-2 mb-4">
            {/* Negative space for overlap */}
            {/* Map artists to small img/div tags */}
            {event.artists &&
              event.artists.map((artist) => (
                <ArtistAvatarResponsive key={artist.id} artist={artist} />
              ))}
          </div>

          {/* Link Icons */}
          <div className="flex items-center justify-between border-t border-gray-700 pt-3">
            <FacebookEventButtonResponsive event={event} />

            {/* Ticket Button */}
            <TicketsButtonResponsive event={event}/>
          </div>
        </div>
      </div>
      {/* Right Image Column */}
      <div className="min-w-28 w-1/3 md:w-2/5 flex-shrink-0">
        <img
          src={event.image}
          alt="Event Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default NextEventCardResp;
