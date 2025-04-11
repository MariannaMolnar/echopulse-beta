import { FaFacebook } from "react-icons/fa";
import { Event } from "../../data/events";
import { useTranslation } from "react-i18next";

type FbEventProps = {
  event: Event;
};

function FacebookEventButtonResponsive({ event }: FbEventProps) {
  const { t } = useTranslation();

  return (
    <a
      href={event.facebookEventLink}
      target="_blank"
      title="Facebook Event"
      className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white transition-colors font-medium tracking-wide
      text-xs py-1.5 px-2.5 rounded
      md:text-sm md:py-2 md:px-4
      lg:text-base lg:py-2.5 lg:px-5 lg:rounded-md"
    >
      <FaFacebook className="w-3 h-3 md:w-4 md:h-4 lg:w-4.5 lg:h-4.5" />
      <span>{t("events.facebookEvent")}</span>
    </a>
  );
}

export default FacebookEventButtonResponsive;
