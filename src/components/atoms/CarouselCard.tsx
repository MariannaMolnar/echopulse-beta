import { useLanguage } from "../../context/LanguageContext";
import { CarouselSlide } from "../../data/carousel";

type CarouselCardProps = {
  item: CarouselSlide;
};

function CarouselCard({ item }: CarouselCardProps) {
  const { language } = useLanguage();
  let displayDate = "";

  if (item.type === "event" && item.data) {
    const eventDate = item.data.date;
    const year = String(eventDate.getFullYear()).slice(-2);
    const month = String(eventDate.getMonth() + 1).padStart(2, "0");
    const day = String(eventDate.getDate()).padStart(2, "0");
    displayDate =
      language === "hu"
        ? `'${year}.${month}.${day}`
        : `${day}.${month}.${year}`;
  }

  return (
    <div className="flex-shrink-0 relative w-screen h-screen overflow-hidden">
      <img
        src={item.imageUrl}
        alt={item.altText}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Centered Content Area */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4 md:p-8 text-white">
        {/* --- Conditional Content --- */}
        {/* Event Specific Layout */}
        {item.type === "event" && (
          <div className="">
            <p className="text-white text-6xl font-normal font-smallCaps uppercase leading-[107.40px] tracking-[6px]">
              {displayDate}
            </p>
            <p className="text-white text-[193.94px] font-bold font-capMarker uppercase">
              {item.data.title[language as keyof typeof item.data.title]}
            </p>
            <p className="text-white text-6xl font-normal font-smallCaps uppercase leading-[107.40px] tracking-[6px]">
              {item.data.venueName}
            </p>
          </div>
        )}
        {/* Release Specific Layout */}
        {item.type === "release" && (
          <div>
            <p className="text-white text-8xl font-bold font-capMarker uppercase leading-[210%] tracking-[2.70px]">{item.data.title[language as keyof typeof item.data.title]}</p>
            <p className="whitespace-pre-line text-white text-8xl font-bold font-thickSmallCaps uppercase leading-[120%]">{item.data.releaseTitle}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CarouselCard;
