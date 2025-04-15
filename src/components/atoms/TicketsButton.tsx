import { useTranslation } from "react-i18next";
import { Event } from "../../data/events";

type Size = "small" | "midi";

type Props = {
  event: Event;
  startSize?: Size;
};

function TicketsButton({ event, startSize = "midi" }: Props) {
  const { t } = useTranslation();

  const responsiveLinkClasses: Record<Size, string> = {
    small:
      "text-xs py-1 px-2 rounded md:py-1.5 md:px-2.5 xl:text-sm xl:py-2 xl:px-4 4xl:text-base 4xl:py-2.5 4xl:px-5 4xl:rounded-md",
    midi: "text-xs py-1.5 px-2.5 rounded md:text-sm md:py-2 md:px-4 xl:text-base xl:py-2.5 xl:px-5 xl:rounded-md",
  };

  return (
    <a
      href={event.ticketsLink}
      target="_blank"
      className={`bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wide transition-colors
        text-center
      ${responsiveLinkClasses[startSize]}`}
    >
      {t("events.ticketsBtn")}
    </a>
  );
}

export default TicketsButton;
