import { useTranslation } from "react-i18next";
import ButtonHomePage from "../atoms/ButtonHomePage";
import { useEffect, useState } from "react";
import { events, splitEventsByDate, Event } from "../../data/events";
import UpcomingEventCard from "../molecules/UpcomingEventCard";

function UpcomingEvents() {
  const { t } = useTranslation();
  const [nextTwoEvents, setNextTwoEvents] = useState<Event[]>([]);

  useEffect(() => {
    const { futureAsc } = splitEventsByDate(events);
    setNextTwoEvents([futureAsc[0], futureAsc[1]]);
  }, []);

  return (
    <div className="w-80 md:w-[866px] flex flex-col items-center text-center justify-start mx-auto pt-23 md:pt-27">
      {/* section title */}
      <p className="whitespace-pre-line text-sand text-3xl md:text-7xl font-normal font-smallCaps uppercase leading-[110%] tracking-[3px] md:tracking-widest">
        {t("home.upcomingEvents.title")}
      </p>

      {/* upcoming event cards*/}
      <div className="pt-16 pb-17">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Next event cards - responsive*/}
          {nextTwoEvents.map((nextEvent) => (
            <UpcomingEventCard key={nextEvent.id} event={nextEvent} />
          ))}
        </div>
      </div>

      {/* button */}
      <div className="mb-31 md:mb-35">
        <ButtonHomePage
          btnText={t("home.upcomingEvents.btn")}
          linkTo="/events"
        />
      </div>
    </div>
  );
}

export default UpcomingEvents;
