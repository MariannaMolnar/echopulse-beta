//import { Artist } from '../data/artists'

import { useParams } from "react-router";

/*type ArtistDetailsProps = {
    artist: Artist;
}*/

function ArtistDetailsPage(/*{artist}: ArtistDetailsProps*/) {
  const { artistName } = useParams();
  return (
    <div className="isolate w-full flex flex-col items-center px-4 md:px-6 py-24 sm:py-32 lg:px-8">
      <div className="w-full bg-black/60 text-gray-300 py-20 px-4 md:px-6 rounded-xl shadow-lg">
        <div className="text-white mt-52">{artistName}</div>
      </div>
    </div>
  );
}

export default ArtistDetailsPage;
