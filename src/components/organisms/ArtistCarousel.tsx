import { useEffect, useState } from "react";
import { Artist } from "../../data/artists";
import ArtistCarouselCard from "../molecules/ArtistCarouselCard";

interface ArtistCarouselProps {
  items: Artist[];
}

const MD_BREAKPOINT = 768; // Standard Tailwind 'md' breakpoint

function ArtistCarousel({ items }: ArtistCarouselProps) {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= MD_BREAKPOINT : false
  );
  const displayItems = isDesktop ? [...items, ...items] : items;
  // State for hover detection to pause animation
  const [isHovered, setIsHovered] = useState(false);

  // --- Screen Size Detection ---
  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkScreenSize = () =>
      setIsDesktop(window.innerWidth >= MD_BREAKPOINT);
    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []); // Run only on mount

  // --- Conditional Classes and Styles ---
  const trackClasses = `
   items-stretch gap-[20px] h-full px-[30px]
   ${
     isDesktop
       ? "inline-flex animate-infinite-scroll" // Desktop: Animation, inline-flex
       : "flex overflow-x-auto scroll-snap-x-mandatory no-scrollbar" // Mobile: Flex, Scroll, Snap
   }
`;

  const trackStyle: React.CSSProperties = isDesktop
    ? {
        // Desktop: Control animation state
        animationPlayState: isHovered ? "paused" : "running",
      }
    : {}; // Mobile: No inline transform or animation needed

  return (
    <div
      className="w-full overflow-hidden "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={trackClasses} style={trackStyle}>
        {displayItems.map((artist, index) => (
          <div
            className={`flex-shrink-0 ${!isDesktop ? "scroll-snap-start" : ""}`}
          >
            <ArtistCarouselCard key={`${artist.id}-${index}`} artist={artist} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistCarousel;
