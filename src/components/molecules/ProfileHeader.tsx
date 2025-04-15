import ReactCountryFlag from "react-country-flag";
import { useLanguage } from "../../context/LanguageContext";
import { Artist } from "../../data/artists";
import ArtistProfileAvatar from "../atoms/ArtistProfileAvatar";

type HeaderProps = {
  artist: Artist;
};

function ProfileHeader({ artist }: HeaderProps) {
  const { language } = useLanguage();
  const artistCountry =
    artist.country.name[language as keyof typeof artist.country.name];

  return (
    <div className="w-full bg-black/60 text-gray-300 py-4 md:py-6 px-4 md:px-6 rounded-xl shadow-lg flex items-center gap-4 md:gap-6">
      {/* Avatar */}
      <ArtistProfileAvatar artist={artist} />

      {/* Info Block: Stacks Name and Country vertically */}
      <div className="flex flex-col md:gap-1">
        {/* Artist Name */}
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-1">
          {artist.name}
        </h2>

        {/* Country Info: Uses flex row internally */}
        <div className="flex items-center gap-2 text-gray-400">
          {/* Flag Container */}
          <div className="inline-flex items-center justify-center w-5 h-4 shrink-0">
            <ReactCountryFlag
              countryCode={artist.country.code}
              svg
              style={{ width: "2em", height: "1em" }}
              className="rounded-xs"
            />
          </div>
          {/* Country Name Span */}
          <span className="min-w-0 truncate text-xs md:text-base">{artistCountry}</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
