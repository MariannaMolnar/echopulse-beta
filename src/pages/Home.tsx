import AboutUsSection from "../components/molecules/AboutUsSection";
import Carousel from "../components/organisms/Carousel";
import icon1 from "../assets/Layer_2.png";
import icon2 from "../assets/Layer_3.png";
import Icon from "../components/atoms/Icon";
import FeaturedArtists from "../components/organisms/FeaturedArtists";
import UpcomingEvents from "../components/organisms/UpcomingEvents";
import Newsletter from "../components/molecules/Newsletter";

function Home() {
  return (
    <>
      {/* Carousel */}
      <div>
        <Carousel />
      </div>

      {/* About */}
      <div className="relative">
        <AboutUsSection />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 ">
          <Icon logoSrc={icon1} size="w-20 h-20 md:w-28 md:h-28" />
        </div>
      </div>

      {/* Featured artists */}
      <div className="relative">
        <FeaturedArtists />
      </div>

      {/* Featured events */}
      <div className="relative">
        <UpcomingEvents />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 ">
          <Icon logoSrc={icon2} size="w-20 h-20 md:w-28 md:h-28" />
        </div>
      </div>

      {/* Newsletter */}
      <div className="relative">
        <Newsletter />
      </div>
    </>
  );
}

export default Home;
