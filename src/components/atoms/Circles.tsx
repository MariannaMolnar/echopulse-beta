import { CarouselSlide } from "../../data/carousel";

type Status = "active" | "inactive";

type CirclesProps = {
  items: CarouselSlide[];
  activeIndex: number;
};

function Circles({ items, activeIndex }: CirclesProps) {
  const stlyeClasses: Record<Status, string> = {
    inactive: "border-2 md:border-[3px] border-white",
    active: "bg-sand",
  };
  return (
    <div className="flex justify-center items-center gap-7 md:gap-10 h-4 relative">
      {items.map((item, index) => {
        const status: Status = index === activeIndex ? "active" : "inactive";
        const dynamicStyle = stlyeClasses[status];
        return (
          <div
            key={item.id}
            className={`w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full transition-all duration-300 ease-in-out ${dynamicStyle}`}
          />
        );
      })}
    </div>
  );
}

export default Circles;
