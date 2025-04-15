import { FaFacebook } from "react-icons/fa";
import { Event } from "../../data/events";
import { useTranslation } from "react-i18next";

type Size = "small" | "midi";

type FbEventProps = {
  event: Event;
  startSize?: Size;
};

function FacebookEventButton({ event, startSize = "midi" }: FbEventProps) {
  const { t } = useTranslation();

  const responsiveIconClasses: Record<Size, string> = {
    small: "w-2.5 h-2.5 lg:w-4 lg:h-4 4xl:w-4.5 4xl:h-4.5",
    midi: "w-3 h-3 md:w-4 md:h-4 xl:w-4.5 xl:h-4.5",
  };

  const responsiveLinkClasses: Record<Size, string> = {
    small:
      "text-xs py-1 px-2 rounded md:py-1.5 md:px-2.5 xl:text-sm xl:py-2 xl:px-4 4xl:text-base 4xl:py-2.5 4xl:px-5 4xl:rounded-md",
    midi: "text-xs py-1.5 px-2.5 rounded md:text-sm md:py-2 md:px-4 xl:text-base xl:py-2.5 xl:px-5 xl:rounded-md",
  };

  return (
    <a
      href={event.facebookEventLink}
      target="_blank"
      title="Facebook Event"
      className={`inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white transition-colors font-medium tracking-wide
      ${responsiveLinkClasses[startSize]}`}
    >
      <FaFacebook className={`${responsiveIconClasses[startSize]}`} />
      <span>{t("events.facebookEvent")}</span>
    </a>
  );
}

export default FacebookEventButton;
