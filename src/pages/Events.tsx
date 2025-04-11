import { useTranslation } from "react-i18next";
import { events } from "../data/events";
import { Event } from "../data/events";
import { useEffect, useState } from "react";
import NextEventCard from "../components/NextEventCard";
import NextEventCardResp from "../components/NextEventCardResp";

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
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [nextTwoEvents, setNextTwoEvents] = useState<Event[]>([]);
  const [futureEvents, setFutureEvents] = useState<Event[]>([]);
  const [filter, setFilter] = useState<"future" | "past">("future");

  useEffect(() => {
    const { futureAsc, pastDesc } = splitEventsByDate(events);
    const restFutureEvents = futureAsc.slice(2);
    setNextTwoEvents([futureAsc[0], futureAsc[1]]);
    setFutureEvents(restFutureEvents);
    setPastEvents(pastDesc);
  }, []);

  /*useEffect(() => {
    console.log("Filter updated:", filter);
  }, [filter]);*/

  return (
    <div className="isolate w-full flex flex-col items-center px-4 md:px-6 py-24 sm:py-32 lg:px-8">
      <div className="w-full bg-black/60 text-gray-300 py-20 px-4 md:px-6 rounded-xl shadow-lg">
        {/* Page title */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-gray-300 relative -top-10 sm:text-4xl">
            {t("events.title")}
          </h2>
        </div>

        {/* Up Next section */}
        <div className="mt-4 md:mt-12 mb-8 px-2 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
            {t("events.subtitleNext")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Next event cards - responsive*/}
            {nextTwoEvents.map((nextEvent) => (
              <NextEventCardResp key={nextEvent.id} event={nextEvent} />
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 px-7.5 py-3 mt-[45px] mb-2.5 sticky top-20 justify-start">
          <button
            onClick={() => {
              if (filter === "past") setFilter("future");
            }}
            className={`filter-btn ${
              filter === "future"
                ? "filter-btn-active" // Active state class
                : "filter-btn-inactive" // Inactive state class (optional, for hover etc.)
            }`}
          >
            <span>{t("events.filterButton.future")}</span>
          </button>
          <button
            onClick={() => {
              if (filter === "future") setFilter("past");
            }}
            className={`filter-btn ${
              filter === "past"
                ? "filter-btn-active" // Active state class
                : "filter-btn-inactive" // Inactive state class (optional, for hover etc.)
            }`}
          >
            <span>{t("events.filterButton.past")}</span>
          </button>
        </div>

        {/* Event cards */}
      </div>
    </div>
  );
}

export default Events;
