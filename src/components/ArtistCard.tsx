import { Artist } from "../artists/data/artists";
import { FaFacebookF, FaSpotify, FaSoundcloud, FaYoutube, FaGlobe } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";

type Props = {
  artist: Artist;
};

function ArtistCard({ artist }: Props) {
  return (
    <div className="artist-card">
      {/* Artist image */}
      <div className="artist-image-container">
        <img src={artist.image} className="artist-image" />
      </div>
      {/* Artist info */}
      <div className="artist-info-container">
        <div className="artist-info">
          <p className="artist-name">{artist.name}</p>
          <p className="artist-country">{artist.locationCountry}</p>
        </div>
        {/* Genre tags - to be implemented */}
      </div>
      {/* Artist social links icons */}
      <div className="artist-social-links">
        {artist.socialLinks.soundCloud && (
            <a href={artist.socialLinks.soundCloud} target="_blank" rel="noopener noreferrer">
                <FaSoundcloud />
            </a>
        )}
        {artist.socialLinks.spotify && (
            <a href={artist.socialLinks.spotify} target="_blank" rel="noopener noreferrer">
                <FaSpotify />
            </a>
        )}
        {artist.socialLinks.youtube && (
            <a href={artist.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                <FaYoutube />
            </a>
            )}
        {artist.socialLinks.facebook && (
            <a href={artist.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
            </a>
        )}
        {artist.socialLinks.website && (
            <a href={artist.socialLinks.website} target="_blank" rel="noopener noreferrer">
                <BsGlobe2 />
            </a>
        )}
      </div>
    </div>
  );
}

export default ArtistCard;
