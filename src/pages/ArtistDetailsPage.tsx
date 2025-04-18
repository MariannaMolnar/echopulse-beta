import { Artist, artists } from "../data/artists";
import { useParams } from "react-router";
import ProfileHeader from "../components/molecules/ProfileHeader";
import ArtistAbout from "../components/molecules/ArtistAbout";
import SocialsCard from "../components/molecules/SocialsCard";
import { Event, events } from "../data/events";
import ArtistNextEvents from "../components/molecules/ArtistNextEvents";
import MusicPlayer from "../components/molecules/MusicPlayer";

type ArtistName = string | undefined;

function getArtist(artistName: ArtistName): Artist | null {
  if (!artistName) return null;
  const artistInDb = artists.filter((artist) => artist.name === artistName)[0];
  return artistInDb;
}

function getArtistNextEvents(
  artistName: ArtistName,
  limit: number
): Event[] | null {
  if (!artistName) return null;
  const currentDate = new Date();
  const artistEvents = events
    .filter((event) => {
      const eventArtistNames = event.artists.map((artist) => artist.name);
      return eventArtistNames.includes(artistName) && event.date >= currentDate;
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, limit);

  return artistEvents;
}

function ArtistDetailsPage() {
  const { artistName } = useParams();
  const artist = getArtist(artistName);
  const artistNextThreeEvents = getArtistNextEvents(artistName, 3);

  return (
    artist && (
      <div className="isolate w-full flex flex-col items-center px-4 md:px-6 py-24 sm:py-32 lg:px-8">
        <div className="w-full bg-black/60 text-gray-300 py-20 px-4 md:px-6 rounded-xl shadow-lg">
          {/* Header section */}
          <ProfileHeader artist={artist} />
          {/* Details section */}
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[60%_40%] 2xl:grid-cols-[70%_30%] lg:gap-4 xl:gap-5 lg:pr-6 mt-6 md:mt-8">
            {/* Left column - About section */}
            <div className="order-2 lg:order-none">
              <ArtistAbout artist={artist} />
            </div>
            {/* Right column section */}
            <div className="order-1 lg:order-none flex flex-col gap-6 w-full text-gray-300 rounded-xl shadow-lg pb-4 mt-4 md:pb-6">
              {/* Socials section */}
              <SocialsCard artist={artist} />
              {/* Next Events section */}
              {artistNextThreeEvents && (
                <ArtistNextEvents artistNextEvents={artistNextThreeEvents} />
              )}
              <MusicPlayer artist={artist} />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ArtistDetailsPage;
