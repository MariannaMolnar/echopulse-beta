import { useLanguage } from "../../context/LanguageContext";
import { CarouselSlide } from "../../data/carousel";

type CarouselCardProps = {
  item: CarouselSlide;
};

function CarouselCard({ item }: CarouselCardProps) {
  const { language } = useLanguage();

  return (
    <div className="w-full flex-shrink-0 relative h-64 sm:h-80 md:h-96">
      <img
        src={item.imageUrl}
        alt={item.altText}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Centered Content Area */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4 md:p-8 text-white">
        {/* --- Conditional Content --- */}
        {item.type === "event" && (
          <div>
            {/* Event Specific Layout */}
            {/* hungarian date */}
            {language === "hu" && (
              <p className="">
                <span>{`'${item.data.date
                  .getFullYear()
                  .toString()
                  .slice(-2)}.`}</span>
                <span>{`${String(item.data.date.getMonth() + 1).padStart(
                  2,
                  "0"
                )}.`}</span>
                <span>{`${String(item.data.date.getDate()).padStart(
                  2,
                  "0"
                )}`}</span>
              </p>
            )}
            {/* english date */}
            {language === "en" && (
              <p className="">
                  <span>{`${String(item.data.date.getDate()).padStart(
                      2,
                      "0"
                  )}.`}</span>
                <span>{`${String(item.data.date.getMonth() + 1).padStart(
                    2,
                    "0"
                )}.`}</span>
                <span>{`${item.data.date
                  .getFullYear()
                  .toString()
                  .slice(-2)}`}</span>
              </p>
            )}

            <p>{item.data.title[language as keyof typeof item.data.title]}</p>
            <p>{item.data.venueName}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CarouselCard;
