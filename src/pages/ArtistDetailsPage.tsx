import { artists } from "../data/artists";
import { useParams } from "react-router";
import { Artist } from "../data/artists";
import ProfileHeader from "../components/molecules/ProfileHeader";
import ArtistAbout from "../components/molecules/ArtistAbout";

function getArtist(artistName: string | undefined): Artist | null {
  if (!artistName) return null;
  const artistInDb = artists.filter((artist) => artist.name === artistName)[0];
  return artistInDb;
}

function ArtistDetailsPage() {
  const { artistName } = useParams();
  const artist = getArtist(artistName);

  return (
    artist && (
      <div className="isolate w-full flex flex-col items-center px-4 md:px-6 py-24 sm:py-32 lg:px-8">
        <div className="w-full bg-black/60 text-gray-300 py-20 px-4 md:px-6 rounded-xl shadow-lg">
          {/* Header section */}
          <ProfileHeader artist={artist} />
          {/* Details section */}
          <div className="grid grid-cols-[75%_25%] gap-4 md:gap-5 xl:gap-6 pr-4 md:pr-6">
            {/* Left column - About section */}
            <ArtistAbout artist={artist} />
            {/* Right column section */}
            <div className="w-full bg-black/60 text-gray-300 rounded-xl shadow-lg py-4 mt-4 md:py-6">Item 2 (25%)</div>
            {/* Socials section */}
            {/* Next Events section */}
          </div>
        </div>
      </div>
    )
  );
}

export default ArtistDetailsPage;
