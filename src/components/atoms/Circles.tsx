type CarouselItem = {
  id: number;
  type: string;
};

type Status = "active" | "inactive";

type CirclesProps = {
  items: CarouselItem[];
  activeIndex: number;
};

function Circles({ items, activeIndex }: CirclesProps) {
  const stlyeClasses: Record<Status, string> = {
    inactive: "border-[3px] border-white",
    active: "bg-sand",
  };
  return (
    <div className="flex justify-center items-center gap-10 h-4 relative">
      {items.map((item, index) => {
        const status: Status = index === activeIndex ? "active" : "inactive";
        const dynamicStyle = stlyeClasses[status];
        return (
          <div
            key={item.id}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ease-in-out ${dynamicStyle}`}
          />
        );
      })}
    </div>
  );
}

export default Circles;
