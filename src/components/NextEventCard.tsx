import ReactCountryFlag from "react-country-flag";
import { useLanguage } from "../context/LanguageContext";
import { Event } from "../data/events";
import { useTranslation } from "react-i18next";
import DateBlock from "./atoms/DateBlock";
import ArtistAvatar from "./atoms/ArtistAvatar";
import FacebookEventButton from "./atoms/FacebookEventButton";
import TicketsButton from "./atoms/TicketsButton";

type Props = {
  event: Event;
};

function NextEventCard({ event }: Props) {
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
    <div className="flex bg-gray-900 rounded-2xl overflow-hidden shadow-lg my-4 max-h-130">
      {/* Left Info Column */}
      <div className="flex-1 p-4 md:p-6 bg-gray-800 text-gray-200 flex flex-col">
        {/* Outer div for top area (date & address) */}
        <div className="flex items-start gap-4 mb-6">
          {/* Date Block (First item in the row) */}
          <DateBlock
            date={event.date.getDate()}
            monthName={monthName}
            year={event.date.getFullYear()}
            size="lg"
          />

          {/* Vertical Column for Title and Location (Second item in the row) */}
          <div className="flex flex-col flex-1 min-w-0 mt-1.5">
            <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-white">
              {event.name}
            </h3>

            {/* City & country container */}
            <div className="flex items-baseline gap-2 text-sm md:text-base text-gray-400 mt-3">
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
                <ArtistAvatar key={artist.id} artist={artist} size="lg" />
              ))}
          </div>

          {/* Link Icons */}
          <div className="flex items-center justify-between border-t border-gray-700 pt-3">
            <FacebookEventButton event={event} size="lg" />

            {/* Ticket Button */}
            <TicketsButton event={event} size="lg" />
          </div>
        </div>
      </div>
      {/* Right Image Column */}
      <div className="w-1/3 md:w-2/5 flex-shrink-0">
        <img
          src={event.image}
          alt="Event Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default NextEventCard;
