import AboutUsSection from "../components/molecules/AboutUsSection";
import Carousel from "../components/organisms/Carousel";
import icon1 from "../assets/Layer_2.png";
import Icon from "../components/atoms/Icon";

function Home() {
  return (
    <>
      <div>
        <Carousel />
      </div>
      <div>
        <AboutUsSection />
      </div>
      <div className="flex justify-center items-center">
        <Icon logoSrc={icon1} size="w-20 h-20"/>
      </div>
    </>
  );
}

export default Home;
