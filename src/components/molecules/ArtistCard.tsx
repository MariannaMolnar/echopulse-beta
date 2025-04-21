import { Artist } from "../../data/artists";
import { FaFacebook, FaSpotify, FaYoutube } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { PiSoundcloudLogoFill } from "react-icons/pi";
import { useLanguage } from "../../context/LanguageContext";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";

type Props = {
  artist: Artist;
};

function ArtistCard({ artist }: Props) {
  const { language } = useLanguage();
  const linkTo = `/artists/${artist.name}`;

  return (
    <div className="flex flex-col bg-[#f0edf2] overflow-hidden rounded-md text-black border-[1px] border-[#140b22] group">
      {/* Artist image */}
      <div className="relative overflow-hidden w-full flex-shrink-0">
        <Link to={linkTo}>
          <img src={artist.image} className="w-full h-auto block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-95 transition-all brightness-75 sm:brightness-100" />
          <p className="block sm:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-[4.5vw] uppercase [text-shadow:0px_0px_2px_black] w-full p-[5px] text-center pointer-events-none">{artist.name.toUpperCase()}</p>
        </Link>
      </div>
      {/* Artist info */}
      <div className="hidden sm:flex w-full justify-between items-start p-3 flex-1 bg-black/50 text-white flex-shrink-0">
        <div>
          <p className="text-lg font-bold mb-2">{artist.name.toUpperCase()}</p>
          {/* Container for Flag + Country Name */}
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center justify-center w-5 h-4 shrink-0">
              <ReactCountryFlag
                countryCode={artist.country.code}
                svg
                style={{ width: "2em", height: "1em" }}
                className="rounded-xs"
              />
            </div>
            <p className="text-base">
              {
                artist.country.name[
                  language as keyof typeof artist.country.name
                ]
              }
            </p>
          </div>
        </div>
        {/* Genre tags - to be implemented */}
      </div>
      {/* Artist social links icons */}
      <div className="hidden sm:flex mt-auto w-full justify-end gap-3 px-3 pb-3 bg-black/50 text-white flex-shrink-0">
        {artist.socialLinks.soundCloud && (
          <a
            href={artist.socialLinks.soundCloud}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-center text-lg"
          >
            <PiSoundcloudLogoFill className="text-[1.3em] brightness-75 hover:brightness-100" />
          </a>
        )}
        {artist.socialLinks.spotify && (
          <a
            href={artist.socialLinks.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-center text-lg"
          >
            <FaSpotify className="text-[1.3em] brightness-75 hover:brightness-100" />
          </a>
        )}
        {artist.socialLinks.youtube && (
          <a
            href={artist.socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-center text-lg"
          >
            <FaYoutube className="text-[1.3em] brightness-75 hover:brightness-100" />
          </a>
        )}
        {artist.socialLinks.facebook && (
          <a
            href={artist.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-center text-lg"
          >
            <FaFacebook className="text-[1.3em] brightness-75 hover:brightness-100" />
          </a>
        )}
        {artist.socialLinks.website && (
          <a
            href={artist.socialLinks.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-center text-lg"
          >
            <BsGlobe2 className="text-[1.3em] brightness-75 hover:brightness-100" />
          </a>
        )}
      </div>
    </div>
  );
}

export default ArtistCard;
