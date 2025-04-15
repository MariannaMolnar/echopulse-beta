import { useTranslation } from "react-i18next";
//import { useLanguage } from "../../context/LanguageContext";
import { Event } from "../../data/events";
import DateBlock from "../atoms/DateBlock";
import FacebookEventButton from "../atoms/FacebookEventButton";
import TicketsButton from "../atoms/TicketsButton";
import ArtistAvatar from "../atoms/ArtistAvatar";
import { Artist } from "../../data/artists";
import ReactCountryFlag from "react-country-flag";

type Props = {
  event: Event;
  isFuture: boolean;
};

function EventCard_v2({ event, isFuture }: Props) {
  //const { language } = useLanguage();
  const { t } = useTranslation();
  /*const eventCity =
    event.address.city[language as keyof typeof event.address.city];
  const eventCountry =
    event.address.country.name[
      language as keyof typeof event.address.country.name
    ];*/
  const monthsArray = t("events.months", { returnObjects: true }) as string[];
  const monthIndex = event.date.getMonth();
  const monthName = monthsArray[monthIndex];

  return (
    <div className="flex flex-col bg-[#f0edf2] overflow-hidden rounded-sm md:rounded-md text-black border-[1px] border-[#140b22] shadow-lg">
      {/* Event image */}
      <div className="relative overflow-hidden w-full aspect-square bg-gray-700">
        {/* Date Block */}
        <div className="absolute top-1.5 left-1.5 md:top-3 md:left-3 z-10">
          <DateBlock
            date={event.date.getDate()}
            monthName={monthName}
            year={event.date.getFullYear()}
            startSize="small"
          />
        </div>
        {/* Flag Container */}
        <div className="absolute top-1.5 right-1.5 w-5 h-4 md:top-3 md:right-3 md:w-6 md:h-5 inline-flex items-center justify-center shrink-0 rounded-xs overflow-hidden">
          <ReactCountryFlag
            countryCode={event.address.country.code}
            svg
            style={{ width: "2em", height: "1em" }}
            className="rounded-xs"
          />
        </div>
        {/* Image */}
        <img
          src={event.image}
          alt="Event Image"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay at bottom for button readability */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10"></div>
        {/* Link Icons */}
        <div className="absolute bottom-1.5 md:bottom-3 w-full flex items-center justify-between pt-3 px-1.5 md:px-3 z-20">
          <FacebookEventButton event={event} startSize="small" />

          {/* Ticket Button */}
          {isFuture && <TicketsButton event={event} startSize="small" />}
        </div>
      </div>

      {/* Event info */}
      <div className="flex flex-col w-full p-3 flex-1 bg-black/50 text-white min-h-1/4">
        {/* Event title */}
        <div className="flex-grow mb-2">
          <h3 className="text-sm md:text-base lg:text-lg xl:text-xl 3xl:text-2xl font-bold tracking-wide text-white line-clamp-2">
            {event.name}
          </h3>
        </div>
        {/* City & country container */}
        {/*<div className="flex items-baseline gap-2 text-xs md:text-sm lg:text-base text-gray-400 pb-2.5">
          {/* Flag Container }
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
            <span className="hidden lg:inline">{`, ${eventCountry}`}</span>
          </span>
        </div>*/}

        {/* Artist Avatars */}
        <div className="flex items-center -space-x-4 mt-auto pb-1">
          {/* Negative space for overlap */}
          {/* Map artists to small img/div tags */}
          {event.artists && event.artists.length > 0 ? (
            // Limit number of avatars shown + add "+X" indicator
            event.artists.slice(0, 5).map(
              (
                artist: Artist // Show max 5
              ) => (
                <ArtistAvatar
                  key={artist.id}
                  artist={artist}
                  startSize="small"
                />
              )
            )
          ) : (
            // Placeholder to maintain height if no artists
            <div className="h-10"></div> // Height matches 'sm' avatar
          )}
          {/* "+X More" Indicator */}
          {event.artists && event.artists.length > 5 && (
            <span className="flex items-center justify-center text-xs font-semibold  z-10 relative -ml-4">
              {" "}
              {/* original classname: "flex items-center justify-center h-10 w-10 rounded-full bg-gray-600 text-xs font-semibold ring-2 ring-black/50 z-10 relative -ml-4"*/}
              +{event.artists.length - 5}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventCard_v2;
