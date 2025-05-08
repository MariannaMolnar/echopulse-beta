import { Artist } from "../../data/artists";

type ArtistCarouselCardProps = {
  artist: Artist;
};

function ArtistCarouselCard({ artist }: ArtistCarouselCardProps) {
  return (
    <div className="w-[243px] h-[280px] md:w-[286px] md:h-[330px] flex-shrink-0 relative overflow-hidden group cursor-pointer md:rounded-[20px] isolate">
      <img
        src={artist.image}
        className="w-[243px] h-[280px] md:w-[286px] md:h-[330px] left-0 top-0 absolute rounded-[16.993px] md:rounded-[20px] object-cover
                    transition-all duration-300 ease-in-out
                    md:grayscale 
                    md:group-hover:grayscale-0 
                    md:group-hover:scale-120"
      />

      {/* Gradient Overlay: Visible on mobile, fades in on hover on md+ */}
      <div
        className="w-[243px] h-[135px] md:w-[286px] md:h-[159px] left-0 bottom-0 absolute bg-gradient-to-b from-black/0 to-black rounded-bl-[16.993px] rounded-br-[16.993px] md:rounded-bl-[20px] md:rounded-br-[20px]
                    transition-opacity duration-300 ease-in-out
                    opacity-100 md:opacity-0 md:group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Artist Name Text: Visible on mobile, fades in on hover on md+ */}
      <div
        className="w-44 md:w-52 left-[34.84px] top-[222.61px] md:left-[41px] md:top-[262px] absolute text-center justify-start 
                    transition-opacity duration-300 ease-in-out
                    opacity-100 md:opacity-0 md:group-hover:opacity-100"
      >
        <span className="text-white text-[21px] md:text-2xl font-normal font-smallCaps uppercase leading-[100%] tracking-[2.12px] md:tracking-[2.50px]">
          {artist.name}
        </span>
      </div>
    </div>
  );
}

export default ArtistCarouselCard;
