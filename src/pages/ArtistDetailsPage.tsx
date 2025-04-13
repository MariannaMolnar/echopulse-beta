import { artists } from "../data/artists";
import { useParams } from "react-router";
import { Artist } from "../data/artists";
import ProfileHeader from "../components/molecules/ProfileHeader";

function getArtist(artistName: string | undefined): Artist | null {
  if (!artistName) return null;
  const artistInDb = artists.filter((artist) => artist.name === artistName)[0];
  return artistInDb;
}

function ArtistDetailsPage() {
  const { artistName } = useParams();
  const artist = getArtist(artistName);

  return (
    <div className="isolate w-full flex flex-col items-center px-4 md:px-6 py-24 sm:py-32 lg:px-8">
      <div className="w-full bg-black/60 text-gray-300 py-20 px-4 md:px-6 rounded-xl shadow-lg">
        {/* Header section */}
        {artist && <ProfileHeader artist={artist} />}
        {/* Details section */}
        <div className="grid grid-cols-[75%_25%]">
          {/* Left column - About section */}
          <div>Item 1 (75%)</div>
          {/* Right column section */}
          <div>Item 2 (25%)</div>
          {/* Socials section */}
          {/* Next Events section */}
        </div>
      </div>
    </div>
  );
}

export default ArtistDetailsPage;
