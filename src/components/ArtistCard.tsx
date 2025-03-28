import { Artist } from "../artists/data/artists";
import { FaFacebook, FaSpotify, FaYoutube, FaGlobe } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { PiSoundcloudLogoFill } from "react-icons/pi";
import { useLanguage } from "../context/LanguageContext";

type Props = {
  artist: Artist;
};

function ArtistCard({ artist }: Props) {
    const { language } = useLanguage();

  return (
    <div className="artist-card group">
      {/* Artist image */}
      <div className="artist-image-container">
        <img src={artist.image} className="artist-image" />
        <p className="artist-name-overlay">{artist.name.toUpperCase()}</p>
      </div>
      {/* Artist info */}
      <div className="artist-info-container">
        <div className="artist-info">
          <p className="artist-name">{artist.name.toUpperCase()}</p>
          <p className="artist-country">{artist.locationCountry[language as keyof typeof artist.locationCountry]}</p>
        </div>
        {/* Genre tags - to be implemented */}
      </div>
      {/* Artist social links icons */}
      <div className="artist-social-links-contanier">
        {artist.socialLinks.soundCloud && (
            <a href={artist.socialLinks.soundCloud} target="_blank" rel="noopener noreferrer" className="artist-social-link">
                <PiSoundcloudLogoFill className="artist-social-icon"/>
            </a>
        )}
        {artist.socialLinks.spotify && (
            <a href={artist.socialLinks.spotify} target="_blank" rel="noopener noreferrer" className="artist-social-link">
                <FaSpotify className="artist-social-icon"/>
            </a>
        )}
        {artist.socialLinks.youtube && (
            <a href={artist.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="artist-social-link">
                <FaYoutube className="artist-social-icon"/>
            </a>
            )}
        {artist.socialLinks.facebook && (
            <a href={artist.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="artist-social-link">
                <FaFacebook className="artist-social-icon"/>
            </a>
        )}
        {artist.socialLinks.website && (
            <a href={artist.socialLinks.website} target="_blank" rel="noopener noreferrer" className="artist-social-link">
                <BsGlobe2 className="artist-social-icon"/>
            </a>
        )}
      </div>
    </div>
  );
}

export default ArtistCard;
