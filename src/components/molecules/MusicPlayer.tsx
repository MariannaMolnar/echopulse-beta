import { useTranslation } from "react-i18next";
import { Artist } from "../../data/artists";
import parse from "html-react-parser";

type MusicPlayerProps = {
  artist: Artist;
};

function MusicPlayer({ artist }: MusicPlayerProps) {
  const artistSCEmbedding = artist.embedding.soundcloud;
  const artistSpotifyEmbedding = artist.embedding.spotify;
  const {t} = useTranslation();

  return (
    <div className="flex flex-col w-full gap-3 px-6 2xl:px-8 py-6 bg-black/50 text-white rounded-xl flex-shrink-0">
      <h2 className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-white pb-6">
        {t("artistDetails.sectionTitles.mediaplayer")}
      </h2>
      {artistSCEmbedding && parse(artistSCEmbedding)}
      {artistSpotifyEmbedding && parse(artistSpotifyEmbedding)}
    </div>
  );
}

export default MusicPlayer;
