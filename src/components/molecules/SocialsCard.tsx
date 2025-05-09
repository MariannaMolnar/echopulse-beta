import { Artist } from "../../data/artists";
import {
  FaFacebook,
  FaSpotify,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { PiSoundcloudLogoFill } from "react-icons/pi";
import { useTranslation } from "react-i18next";

type SocialsProps = {
  artist: Artist;
};

function SocialsCard({ artist }: SocialsProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full gap-3 px-6 2xl:px-8 py-6 bg-black/50 text-white rounded-xl flex-shrink-0">
      <h2 className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-white pb-6">
        {t("artistDetails.sectionTitles.socials")}
      </h2>
      {artist.socialLinks.soundCloud && (
        <a
          href={artist.socialLinks.soundCloud}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-200"
        >
          <PiSoundcloudLogoFill className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
          <span className="text-md md:text-lg lg:text-xl">
            {t("artistDetails.socials.soundCloud")}
          </span>
        </a>
      )}
      {artist.socialLinks.spotify && (
        <a
          href={artist.socialLinks.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-200"
        >
          <FaSpotify className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
          <span className="text-md md:text-lg lg:text-xl">{t("artistDetails.socials.spotify")}</span>
        </a>
      )}
      {artist.socialLinks.youtube && (
        <a
          href={artist.socialLinks.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-200"
        >
          <FaYoutube className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
          <span className="text-md md:text-lg lg:text-xl">{t("artistDetails.socials.youtube")}</span>
        </a>
      )}
      {artist.socialLinks.facebook && (
        <a
          href={artist.socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-200"
        >
          <FaFacebook className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
          <span className="text-md md:text-lg lg:text-xl">{t("artistDetails.socials.facebook")}</span>
        </a>
      )}
      {artist.socialLinks.instagram && (
        <a
          href={artist.socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-200"
        >
          <FaInstagram className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
          <span className="text-md md:text-lg lg:text-xl">
            {t("artistDetails.socials.instagram")}
          </span>
        </a>
      )}
      {artist.socialLinks.tiktok && (
        <a
          href={artist.socialLinks.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-200"
        >
          <FaTiktok className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
          <span className="text-md md:text-lg lg:text-xl">{t("artistDetails.socials.tiktok")}</span>
        </a>
      )}
      {artist.socialLinks.website && (
        <a
          href={artist.socialLinks.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-200"
        >
          <BsGlobe2 className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
          <span className="text-md md:text-lg lg:text-xl">{t("artistDetails.socials.website")}</span>
        </a>
      )}
    </div>
  );
}

export default SocialsCard;
