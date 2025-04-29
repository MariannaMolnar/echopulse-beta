import AboutUsSection from "../components/molecules/AboutUsSection";
import Carousel from "../components/organisms/Carousel";

function Home() {
  return (
    <>
      <div>
        <Carousel />
      </div>
      <div>
        <AboutUsSection />
      </div>
    </>
  );
}

export default Home;
