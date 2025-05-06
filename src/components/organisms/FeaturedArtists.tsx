import { useTranslation } from "react-i18next";
import warmWaves from "../../images/backdrops/warmWavesAndSplash.jpg";
import ButtonHomePage from "../atoms/ButtonHomePage";
import { artists } from "../../data/artists";
import ArtistCarouselCard from "../molecules/ArtistCarouselCard";

function FeaturedArtists() {
  const { t } = useTranslation();

  return (
    <div className="flex-shrink-0 relative w-screen h-[813px] md:h-[847px] overflow-hidden">
      <img
        src={warmWaves}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Centered Content Area */}
      <div className="relative z-10 h-full flex flex-col items-center text-center md:mx-15 pt-33 md:pt-30 text-white">
        <p className="text-white text-8xl md:text-[167.82px] font-bold font-capMarker uppercase leading-[83%] md:leading-[100%] ">
          {t("home.featuredArtists.title")}
        </p>

        <ArtistCarouselCard artist={artists[10]} />
      </div>

      {/*<div className="flex relative z-10">
        {artists.map((artist) => (
          <ArtistCarouselCard key={artist.id} artist={artist}/>
        ))}
      </div>*/}

      {/* button */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-31 md:bottom-28 z-30">
        <ButtonHomePage
          btnText={t("home.featuredArtists.btn")}
          linkTo="/artists"
        />
      </div>
    </div>
  );
}

export default FeaturedArtists;
