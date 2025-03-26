import { Artist } from "../artists/data/artists";

type Props = {
  artist: Artist;
};

function ArtistCard({ artist }: Props) {
  return (
  <div className="artist-card">
    {/* Artist image */}
    <div className="artist-image-container">
        <img src={artist.image} className="artist-image"/>
    </div>
    {/* Artist info */}
    <div className="artist-info-container">
        <div className="artist-info">
            <p className="artist-name">{artist.name}</p>
            <p className="artist-country">{artist.locationCountry}</p>
        </div>
        {/* Genre tags - to be implemented */}
    </div>
    {/* Artist social links */}
  </div>
  );
}

export default ArtistCard;
