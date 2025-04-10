import { useTranslation } from "react-i18next";
import { Event } from "../../data/events";
type Size = "sm" | "md" | "lg";

type Props = {
  event: Event;
  size?: Size;
};

function TicketsButton({ event, size = "md" }: Props) {
  const { t } = useTranslation();
  const buttonClasses: Record<Size, string> = {
    sm: "text-xs py-1.5 px-2.5 rounded",
    md: "text-sm py-2 px-4 rounded",
    lg: "text-base py-2.5 px-5 rounded-md",
  };

  return (
    <a
      href={event.ticketsLink}
      target="_blank"
      className={`bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors ${buttonClasses[size]}`}
    >
      {t("events.ticketsBtn")}
    </a>
  );
}

export default TicketsButton;
