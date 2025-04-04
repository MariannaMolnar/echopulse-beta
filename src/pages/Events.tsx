import { useTranslation } from "react-i18next";
import { events } from "../data/events";
import { Event } from "../data/events";
import { useEffect, useState } from "react";

function sortEvents(events: Event[], sortType: "asc" | "desc") {
  if (sortType === "asc") {
    return [...events].sort((a, b) => a.date.getTime() - b.date.getTime());
  }
  return [...events].sort((a, b) => b.date.getTime() - a.date.getTime());
}

function splitEventsByDate(sortedEvents: Event[]) {
  const currentDate = new Date();

  const future: Event[] = [];
  const past: Event[] = [];

  sortedEvents.forEach((event) => {
    if (event.date >= currentDate) {
      future.push(event);
    } else {
      past.push(event);
    }
  });

  const futureAsc = sortEvents(future, "asc");
  const pastDesc = sortEvents(past, "desc");

  return { futureAsc, pastDesc };
}

function Events() {
  const { t } = useTranslation();
  const [pastEvents, setpastEvents] = useState<Event[]>([]);
  const [nextTwoEvents, setnextTwoEvents] = useState<Event[]>([]);
  const [futureEvents, setfutureEvents] = useState<Event[]>([]);

  useEffect(() => {
    const { futureAsc, pastDesc } = splitEventsByDate(events);
    const restFutureEvents = futureAsc.slice(2);
    setnextTwoEvents([futureAsc[0], futureAsc[1]]);
    setfutureEvents(restFutureEvents);
    setpastEvents(pastDesc);
  }, []);

  return (
    <div className="isolate w-full flex flex-col items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="w-full bg-black/60 text-gray-300 py-20 px-6 rounded-xl shadow-lg">
        {/* Page title */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-gray-300 relative -top-10 sm:text-4xl">
            {t("events.title")}
          </h2>
        </div>

        {/* Up Next section */}
        <div>
          <h2>{t("events.subtitleNext")}</h2>
          <div className="up-next-cards-container">{}</div>
        </div>
        {/* Filters */}
        {/* Event cards */}
      </div>
    </div>
  );
}

export default Events;
