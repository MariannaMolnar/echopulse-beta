type DateBlockProps = {
  date: number;
  monthName: string;
  year: number;
};

function DateBlockResponsive({ date, monthName, year }: DateBlockProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-gray-700 text-center flex-shrink-0 p-1.5 w-13 rounded md:p-3 md:w-16.5 md:rounded-md lg:p-3.5 lg:w-19 lg:rounded-lg`}
    >
      <span className={`uppercase text-blue-300 text-xs md:text-xs lg:text-sm`}>
        {monthName}
      </span>
      <span className={`font-bold text-white text-lg md:text-2xl lg:text-3xl`}>
        {date}
      </span>
      <span className={`text-gray-400 text-xs md:text-s lg:text-lg`}>
        {year}
      </span>
    </div>
  );
}

export default DateBlockResponsive;
