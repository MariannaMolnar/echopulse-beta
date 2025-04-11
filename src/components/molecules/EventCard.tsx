import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";
import { Event } from "../../data/events";
import DateBlockResponsive from "../atoms/DateBlockResponsive";
import DateBlock from "../atoms/DateBlock";
import FacebookEventButtonResponsive from "../atoms/FacebookEventButtonResponsive";
import TicketsButtonResponsive from "../atoms/TicketsButtonResponsive";
import FacebookEventButton from "../atoms/FacebookEventButton";
import TicketsButton from "../atoms/TicketsButton";

type Props = {
  event: Event;
};

function EventCard({ event }: Props) {
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
    <div className="flex flex-col bg-[#f0edf2] overflow-hidden rounded-md text-black border-[1px] border-[#140b22]">
      {/* Event image */}
      <div className="relative overflow-hidden w-full flex-shrink-0">
        {/* Date Block */}
        <div className="absolute top-1.5 left-1.5 md:top-3 md:left-3">
          <DateBlockResponsive
            date={event.date.getDate()}
            monthName={monthName}
            year={event.date.getFullYear()}
            startSize="small"
          />
        </div>
        {/* Image */}
        <img
          src={event.image}
          alt="Event Image"
          className="w-full h-auto object-cover"
        />
        {/* Link Icons */}
        <div className="absolute bottom-1.5 md:bottom-3 w-full flex items-center justify-between pt-3 px-1.5 md:px-3">
            <FacebookEventButtonResponsive event={event} startSize="small"/>

            {/* Ticket Button */}
            <TicketsButtonResponsive event={event} startSize="small"/>
          </div>
      </div>

      {/* Event info */}
      <div className="sm:flex w-full justify-between items-start p-3 flex-1 bg-black/50 text-white flex-shrink-0"></div>
    </div>
  );
}

export default EventCard;
