import { useTranslation } from "react-i18next";
import warmWaves from "../../images/backdrops/warmWavesAndSplash.jpg";

function FeaturedArtists() {
  const { t } = useTranslation();

  return (
    <div className="flex-shrink-0 relative w-screen h-screen overflow-hidden">
      <img
        src={warmWaves}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
    </div>
  );
}

export default FeaturedArtists;
