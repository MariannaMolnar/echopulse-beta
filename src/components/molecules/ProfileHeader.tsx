import { useLanguage } from "../../context/LanguageContext";
import { Artist } from "../../data/artists";
import ArtistProfileAvatar from "../atoms/ArtistProfileAvatar";

type HeaderProps = {
  artist: Artist;
};

function ProfileHeader({ artist }: HeaderProps) {
  const { language } = useLanguage();
  return (
    <div className="w-full bg-black/60 text-gray-300 py-20 px-4 md:px-6 rounded-xl shadow-lg">
      <ArtistProfileAvatar artist={artist} />
    </div>
  );
}

export default ProfileHeader;
