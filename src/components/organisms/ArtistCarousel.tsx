import { artists } from "../../data/artists"
import ArtistCarouselCard from "../molecules/ArtistCarouselCard"


function ArtistCarousel() {
  return (
    <div className="inline-flex items-stretch gap-[20px] h-full pr-[30px]">
          {/*<ArtistCarouselCard artist={artists[5]} />*/}
          {artists.map((artist) => (
            <ArtistCarouselCard key={artist.id} artist={artist} />
          ))}
        </div>
  )
}

export default ArtistCarousel