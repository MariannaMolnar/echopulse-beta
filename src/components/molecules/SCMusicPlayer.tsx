import { Artist } from "../../data/artists";
import parse from 'html-react-parser';

type MusicPlayerProps = {
  artist: Artist;
};

function SCMusicPlayer({ artist }: MusicPlayerProps) {
  const artistSCEmbedding = artist.embedding.soundcloud;
  const artistSpotifyEmbedding = artist.embedding.spotify;
  return (
    <div className="flex flex-col w-full gap-3 px-6 2xl:px-8 py-6 bg-black/50 text-white rounded-xl flex-shrink-0">
      {artistSCEmbedding && parse(artistSCEmbedding)}
      {artistSpotifyEmbedding && parse(artistSpotifyEmbedding)}
    </div>
  );
}

export default SCMusicPlayer;
