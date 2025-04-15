import { useTranslation } from "react-i18next";
import { Event } from "../../data/events";
import ArtistNextEventCard from "../atoms/ArtistNextEventCard";

type NextEventsProps = {
  artistNextEvents: Event[] | null;
};

function ArtistNextEvents({ artistNextEvents }: NextEventsProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full gap-4 px-6 2xl:px-8 py-6 bg-black/50 text-white rounded-xl flex-shrink-0">
      <h2 className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-white pb-6">
        {t("artistDetails.sectionTitles.nextEvents")}
      </h2>
      {artistNextEvents?.map((artistEvent) => (
        <ArtistNextEventCard key={artistEvent.id} artistEvent={artistEvent} />
      ))}
    </div>
  );
}

export default ArtistNextEvents;
