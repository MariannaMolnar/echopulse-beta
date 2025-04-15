import { Link } from "react-router-dom";
import { Artist } from "../../data/artists";

type Size = "small" | "midi";

type ArtistAvatarProps = {
  artist: Artist;
  startSize?: Size;
};

function ArtistAvatar({ artist, startSize = "midi" }: ArtistAvatarProps) {
  const linkTo = `/artists/${artist.name}`;

  const resonsiveImageClasses: Record<Size, string> = {
    small:
      "ring-1 h-10 w-10 md:h-12 md:w-12 lg:ring-2 lg:h-14 lg:w-14 2xl:h-16 2xl:w-16",
    midi: "ring-2 h-12 w-12 md:h-14 md:w-14 lg:h-18 lg:w-18",
  };

  return (
    <Link to={linkTo} className="relative group inline-block align-top">
      <img
        className={`relative inline-block rounded-full ring-gray-700 align-middle ${resonsiveImageClasses[startSize]}
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

export default ArtistAvatar;
