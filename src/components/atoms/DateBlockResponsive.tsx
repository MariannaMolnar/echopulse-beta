type Size = "small" | "midi"

type DateBlockProps = {
  date: number;
  monthName: string;
  year: number;
  startSize?: Size;
};

function DateBlockResponsive({ date, monthName, year, startSize = "midi" }: DateBlockProps) {
  const responsiveContainerClasses: Record<Size, string> = {
    small: "p-1 w-12 rounded md:p-1.5 md:w-13 lg:p-3 lg:w-16.5 lg:rounded-md 3xl:p-3.5 3xl:w-19 3xl:rounded-lg",
    midi: "p-1.5 w-13 rounded md:p-3 md:w-16.5 md:rounded-md lg:p-3.5 lg:w-19 lg:rounded-lg"
  };
  
  const responsiveMonthClasses: Record<Size, string> = {
    small: "text-xs xl:text-xs 3xl:text-sm",
    midi: "text-xs md:text-xs xl:text-sm"
  };

  const responsiveDateClasses: Record<Size, string> = {
    small: "text-md xl:text-2xl 3xl:text-3xl",
    midi: "text-lg md:text-2xl xl:text-3xl"
  };

  const responsiveYearClasses: Record<Size, string> = {
    small: "text-xs xl:text-sm 3xl:text-lg",
    midi: "text-xs md:text-sm xl:text-lg"
  };

  return (
    <div
      className={`flex flex-col items-center justify-center bg-gray-700 text-center flex-shrink-0 ${responsiveContainerClasses[startSize]}`}
    >
      <span className={`uppercase text-blue-300 ${responsiveMonthClasses[startSize]}`}>
        {monthName}
      </span>
      <span className={`font-bold text-white ${responsiveDateClasses[startSize]}`}>
        {date}
      </span>
      <span className={`text-gray-400 ${responsiveYearClasses[startSize]}`}>
        {year}
      </span>
    </div>
  );
}

export default DateBlockResponsive;
