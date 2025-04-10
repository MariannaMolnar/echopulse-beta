import { useTranslation } from "react-i18next";
import { Event } from "../../data/events";

type Props = {
  event: Event;
};

function TicketsButtonResponsive({ event }: Props) {
  const { t } = useTranslation();

  return (
    <a
      href={event.ticketsLink}
      target="_blank"
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors
      text-xs py-1.5 px-2.5 rounded
      md:text-sm md:py-2 md:px-4
      lg:text-base lg:py-2.5 lg:px-5 lg:rounded-md" 
    >
      {t("events.ticketsBtn")}
    </a>
  );
}

export default TicketsButtonResponsive;
