import { useState } from "react";
import { carousel } from "../../data/carousel";
import CarouselCard from "../atoms/CarouselCard";
import Arrow from "../atoms/Arrow";
import Circles from "../atoms/Circles";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const totalItems = carousel.length;

  // --- Navigation Functions ---
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

  // --- Swipe Handlers ---
  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    if (event.touches && event.touches.length > 0) {
      setTouchStartX(event.touches[0].clientX);
    }
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX === null || totalItems <= 1) {
      return; // Exit if swipe didn't start properly or not needed
    }
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    const threshold = 50; // Minimum pixel distance to register as a swipe

    if (deltaX < -threshold) {
      // Swiped Left (Next)
      goToNext();
    } else if (deltaX > threshold) {
      // Swiped Right (Previous)
      goToPrev();
    }

    setTouchStartX(null); // Reset start position
  }

  return (
    <div
      className="relative w-screen overflow-hidden"
      
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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
            className="hidden md:absolute md:top-1/2 md:left-8 xl:left-14 md:-translate-y-1/2 md:z-20 md:p-2 md:cursor-pointer md:block"
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
            className="hidden md:absolute md:top-1/2 md:right-8 xl:right-14 md:-translate-y-1/2 md:z-20 md:p-2 md:cursor-pointer md:block"
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
