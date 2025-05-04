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
    <div className=" flex flex-col items-center text-center justify-start mx-auto pt-23 md:pt-42">
      {/* section title */}
      <div className="w-83 md:w-220">
        <p className="whitespace-pre-line text-sand text-3xl md:text-4xl font-normal font-smallCaps uppercase leading-[110%] tracking-[3px] md:tracking-[3.50px]">
          {t("home.upcomingEvents.title")}
        </p>
      </div>

      {/* upcoming event cards*/}
      <div className="pt-16 pb-17 md:pt-22 md:pb-22">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {/* Next event cards - responsive*/}
          {nextTwoEvents.map((nextEvent) => (
            <UpcomingEventCard key={nextEvent.id} event={nextEvent} />
          ))}
        </div>
      </div>

      {/* button */}
      <div className="mb-31 md:mb-36">
        <ButtonHomePage
          btnText={t("home.upcomingEvents.btn")}
          linkTo="/events"
        />
      </div>
    </div>
  );
}

export default UpcomingEvents;
