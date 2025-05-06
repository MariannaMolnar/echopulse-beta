import { useTranslation } from "react-i18next";
import warmWaves from "../../images/backdrops/warmWavesAndSplash.jpg";
import ButtonHomePage from "../atoms/ButtonHomePage";
import ArtistCarousel from "./ArtistCarousel";

function FeaturedArtists() {
  const { t } = useTranslation();

  return (
    <div className="flex-shrink-0 relative w-screen h-[813px] md:h-[847px] overflow-hidden">
      <img
        src={warmWaves}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Centered Content Area */}
      <div className="relative z-20  flex flex-col items-center text-center md:mx-15 pt-[135px] md:pt-30 text-white">
        <p className="text-white text-[100px] md:text-[167.82px] font-bold font-capMarker uppercase leading-[83%] md:leading-[100%] ">
          {t("home.featuredArtists.title")}
        </p>
      </div>
      <div
        className="absolute top-[285px]  left-0 right-0
                   md:relative md:top-auto md:bottom-auto md:left-auto md:right-auto md:mx-auto md:max-w-4xl md:px-4 md:mt-10 {/* Example desktop override */}
                   z-10 overflow-x-auto overflow-y-hidden pb-1 no-scrollbar"
      >
        <ArtistCarousel />
      </div>

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
