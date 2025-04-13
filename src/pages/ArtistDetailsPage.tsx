//import { Artist } from '../data/artists'

import { useParams } from "react-router"

/*type ArtistDetailsProps = {
    artist: Artist;
}*/

function ArtistDetailsPage(/*{artist}: ArtistDetailsProps*/) {
    const {artistName} = useParams();
  return (
    <div className="text-white mt-52">{artistName}</div>
  )
}

export default ArtistDetailsPage