import { Artist } from "../../data/artists";
import { Link } from "react-router-dom";

type AvatarSize = "sm" | "md" | "lg";

type ArtistAvatarProps = {
  artist: Artist;
  size?: AvatarSize;
};

function ArtistAvatar({ artist, size = "md" }: ArtistAvatarProps) {
const linkTo = `/artists/${artist.name}`;
  const imgClasses: Record<AvatarSize, string> = {
    sm: "h-10 w-10",
    md: "h-14 w-14",
    lg: "h-18 w-18",
  };

  return (
    <Link to={linkTo} className="relative group inline-block align-top">
      <img
        className={`relative inline-block rounded-full ring-2 ring-gray-700 align-middle ${imgClasses[size]}
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
        text-xs font-medium px-2 py-1 rounded-md
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
