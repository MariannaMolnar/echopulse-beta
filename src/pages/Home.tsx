import AboutUsSection from "../components/molecules/AboutUsSection";
import Carousel from "../components/organisms/Carousel";
import icon1 from "../assets/Layer_2.png";
import Icon from "../components/atoms/Icon";
import FeaturedArtists from "../components/organisms/FeaturedArtists";

function Home() {
  return (
    <>
      <div>
        <Carousel />
      </div>
      <div className="relative">
        <AboutUsSection />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 ">
          <Icon logoSrc={icon1} size="w-20 h-20 md:w-28 md:h-28" />
        </div>
      </div>
      <div className="relative z-0">
        <FeaturedArtists />
      </div>
    </>
  );
}

export default Home;