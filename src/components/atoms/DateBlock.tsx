type DateBlockSize = "sm" | "md" | "lg";

type DateBlockProps = {
  date: number;
  monthName: string;
  year: number;
  size?: DateBlockSize;
};

function DateBlock({ date, monthName, year, size = "md" }: DateBlockProps) {
  const containerClasses: Record<DateBlockSize, string> = {
    sm: "p-1.5 w-13 rounded",
    md: "p-3 w-16.5 rounded-md",
    lg: "p-3.5 w-19 rounded-lg",
  };

  const monthClasses: Record<DateBlockSize, string> = {
    sm: "text-xs",
    md: "text-xs",
    lg: "text-sm",
  };

  const dateClasses: Record<DateBlockSize, string> = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const yearClasses: Record<DateBlockSize, string> = {
    sm: "text-xs",
    md: "text-s",
    lg: "text-lg",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center bg-gray-700 text-center flex-shrink-0 ${containerClasses[size]}`}
    >
      <span className={`uppercase text-blue-300 ${monthClasses[size]}`}>
        {monthName}
      </span>
      <span className={`font-bold text-white ${dateClasses[size]}`}>
        {date}
      </span>
      <span className={`text-gray-400 ${yearClasses[size]}`}>{year}</span>
    </div>
  );
}

export default DateBlock;
