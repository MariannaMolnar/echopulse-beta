import { Artist } from "../../data/artists";

type ArtistAvatarProps = {
  artist: Artist;
};

function ArtistProfileAvatar({ artist }: ArtistAvatarProps) {
  return (
    <img
      className={`relative inline-block rounded-full ring-2 ring-gray-700 align-middle h-[20vw] w-[20vw] md:h-[18vw] md:w-[18vw] xl:h-[245px] xl:w-[245px]`}
      src={artist.image}
      alt={artist.name}
    />
  );
}

export default ArtistProfileAvatar;
