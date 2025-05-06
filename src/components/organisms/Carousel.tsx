import { useCallback, useEffect, useRef, useState } from "react";
import { carousel } from "../../data/carousel";
import CarouselCard from "../atoms/CarouselCard";
import Arrow from "../atoms/Arrow";
import Circles from "../atoms/Circles";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0); // Index of the *original* item (0 to N-1)
  // Index used for translation: 0=clone, 1=first real, ..., N=last real, N+1=clone
  const [currentTranslateIndex, setCurrentTranslateIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false); // To disable transition during jump
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const timeoutRef = useRef<number | null>(null); // Ref to manage jump timeout
  const autoPlayInterval = 5000;

  const totalRealItems = carousel.length;
  const transitionDuration = 700;

  // --- Create array with clones (only if looping is possible) ---
  const displayItems =
    totalRealItems > 1
      ? [carousel[totalRealItems - 1], ...carousel, carousel[0]]
      : [...carousel]; // No clones needed if 0 or 1 item

  // --- Cleanup timeout on unmount ---
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // --- Navigation Functions ---
  const handleNavigation = useCallback(
    (newActiveIndex: number) => {
      if (isTransitioning || totalRealItems <= 1) return;

      const newTranslateIndex = newActiveIndex + 1; // +1 because of the prepended clone

      setActiveIndex(newActiveIndex);
      setCurrentTranslateIndex(newTranslateIndex);
      setIsTransitioning(true); // Start transition animation

      // Set timeout to handle the jump AFTER the slide animation completes
      timeoutRef.current = setTimeout(() => {
        // Jump logic for wrap-around
        if (newActiveIndex === -1) {
          // Wrapped from first to last clone
          setIsTransitioning(false); // Disable transition for jump
          setCurrentTranslateIndex(totalRealItems); // Jump to real last slide position
          setActiveIndex(totalRealItems - 1); // Correct logical active index
        } else if (newActiveIndex === totalRealItems) {
          // Wrapped from last to first clone
          setIsTransitioning(false); // Disable transition for jump
          setCurrentTranslateIndex(1); // Jump to real first slide position
          setActiveIndex(0); // Correct logical active index
        } else {
          setIsTransitioning(false); // Re-enable transition for next user interaction
        }
      }, transitionDuration);
    },
    [isTransitioning, totalRealItems, transitionDuration]
  );

  const goToNextSlide = useCallback(() => {
    handleNavigation(activeIndex + 1);
  }, [activeIndex, handleNavigation]);

  const goToPrevSlide = useCallback(() => {
    handleNavigation(activeIndex - 1);
  }, [activeIndex, handleNavigation]);

  // --- Autoplay Logic (Adjusted for new logic) ---
  useEffect(() => {
    if (!autoPlayInterval || totalRealItems <= 1) return;
    const intervalId = setInterval(goToNextSlide, autoPlayInterval);
    return () => clearInterval(intervalId);
  }, [autoPlayInterval, goToNextSlide, totalRealItems]); // Use goToNext directly


  // --- Swipe Handlers ---
  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    if (isTransitioning) return; // Prevent swipe during jump transition
    if (event.touches && event.touches.length > 0) {
      setTouchStartX(event.touches[0].clientX);
      // Clear any jump timeout if user interacts mid-transition
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        setIsTransitioning(false); // Allow interaction again
      }
    }
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX === null || totalRealItems <= 1 || isTransitioning) {
      return; // Exit if swipe didn't start properly or not needed
    }
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    const threshold = 50; // Minimum pixel distance to register as a swipe

    if (deltaX < -threshold) {
      // Swiped Left (Next)
      goToNextSlide();
    } else if (deltaX > threshold) {
      // Swiped Right (Previous)
      goToPrevSlide();
    }

    setTouchStartX(null); // Reset start position
  }

  // Prepare items for Circles component (needs original items length)
  const circleItems = [...carousel]; // Use original items

  return (
    <div
      className="relative w-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* carousel wrapper */}
      <div
        className={`flex ${isTransitioning ? `transition-transform duration-${transitionDuration} ease-in-out` : ''}`} 
        style={{ transform: `translateX(-${currentTranslateIndex * 100}%)` }}
      >
        {/* Render all cards */}
        {displayItems.map((carouselItem, index) => (
          <CarouselCard key={`${carouselItem.id}-${index}`} item={carouselItem} />
        ))}
      </div>

      {/* --- Navigation Arrows (Visible md+) --- */}
      {totalRealItems > 1 && (
        <div>
          {/* Left Arrow */}
          <button
            onClick={goToPrevSlide}
            className="hidden md:absolute md:top-1/2 md:left-8 xl:left-14 md:-translate-y-1/2 md:z-20 md:p-2 md:cursor-pointer md:block"
            aria-label="Previous slide"
          >
            <Arrow direction="left" color="white" />
          </button>
          {/* Right Arrow */}
          <button
            onClick={goToNextSlide}
            className="hidden md:absolute md:top-1/2 md:right-8 xl:right-14 md:-translate-y-1/2 md:z-20 md:p-2 md:cursor-pointer md:block"
            aria-label="Next slide"
          >
            <Arrow direction="right" color="white" />
          </button>
        </div>
      )}

      {/* --- Indicator Circles --- */}
      {totalRealItems > 1 && (
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20">
          <Circles items={circleItems} activeIndex={activeIndex} />
        </div>
      )}
    </div>
  );
}

export default Carousel;
