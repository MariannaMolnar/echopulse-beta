import { Link } from "react-router-dom";
import { Artist } from "../../data/artists";

type ArtistAvatarProps = {
  artist: Artist;
};

function ArtistAvatarResponsive({ artist }: ArtistAvatarProps) {
  const linkTo = `/artists/${artist.name}`;

  return (
    <Link to={linkTo} className="relative group inline-block align-top">
      <img
        className={`relative inline-block rounded-full ring-2 ring-gray-700 align-middle h-10 w-10 md:h-14 md:w-14 lg:h-18 lg:w-18
        transition-all duration-200 ease-in-out
        group-hover:scale-120 group-hover:z-10`}
        src={artist.image}
        alt={artist.name}
      />
      <span
        className="
        absolute -bottom-4 left-1/2 -translate-x-1/2
        z-20
        opacity-0 group-hover:opacity-100
        transition-opacity duration-200 ease-in-out
        bg-gray-700 text-gray-200
        text-xs font-light px-1 py-0.5 rounded-md md:font-medium md:px-2 md:py-1
        whitespace-nowrap
        pointer-events-none
        "
      >
        {artist.name}
      </span>
    </Link>
  );
}

export default ArtistAvatarResponsive;
