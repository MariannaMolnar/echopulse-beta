import { useState } from "react";
import { carousel } from "../../data/carousel";
import CarouselCard from "../atoms/CarouselCard";
import Arrow from "../atoms/Arrow";
import Circles from "../atoms/Circles";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = carousel.length;

  function goToIndex(index: number) {
    const newIndex = (index + totalItems) % totalItems;
    setActiveIndex(newIndex);
  }

  function goToNext() {
    goToIndex(activeIndex + 1);
  }

  function goToPrev() {
    goToIndex(activeIndex - 1);
  }

  return (
    <div className="relative w-screen overflow-hidden" data-carousel="static">
      {/* carousel wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {/* Render all cards */}
        {carousel.map((carouselItem) => (
          <CarouselCard key={carouselItem.id} item={carouselItem} />
        ))}
      </div>

      {/* --- Navigation Arrows (Visible md+) --- */}
      {totalItems > 1 && (
        <div>
          {/* Left Arrow */}
          <button
            onClick={goToPrev}
            className="absolute top-1/2 left-2 md:left-14 -translate-y-1/2 z-20 p-2 cursor-pointer"
            aria-label="Previous slide"
          >
            <Arrow
              direction="left"
              color={activeIndex === 0 ? `greyScaleDarkLight` : `white`}
            />
          </button>
          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 md:right-14 -translate-y-1/2 z-20 p-2 cursor-pointer"
            aria-label="Next slide"
          >
            <Arrow
              direction="right"
              color={
                activeIndex === totalItems - 1 ? `greyScaleDarkLight` : `white`
              }
            />
          </button>
        </div>
      )}

      {/* --- Indicator Circles --- */}
      {totalItems > 1 && (
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20">
          <Circles items={carousel} activeIndex={activeIndex} />
        </div>
      )}
    </div>
  );
}

export default Carousel;
