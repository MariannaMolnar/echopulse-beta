import { FaFacebook } from "react-icons/fa";
import { Event } from "../../data/events";
import { useTranslation } from "react-i18next";

type Size = "sm" | "md" | "lg";

type FbEventProps = {
  event: Event;
  size?: Size;
};

function FacebookEventButton({ event, size = "md" }: FbEventProps) {
  const { t } = useTranslation();
  const fbIconClasses: Record<Size, string> = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-4.5 h-4.5",
  };
  const buttonClasses: Record<Size, string> = {
    sm: "text-xs py-1.5 px-2.5 rounded",
    md: "text-sm py-2 px-4 rounded",
    lg: "text-base py-2.5 px-5 rounded-md",
  };

  return (
    <a
      href={event.facebookEventLink}
      target="_blank"
      title="Facebook Event"
      className={`inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white transition-colors font-medium ${buttonClasses[size]}`}
    >
      <FaFacebook className={`${fbIconClasses[size]}`} />
      <span>{t("events.facebookEvent")}</span>
    </a>
  );
}

export default FacebookEventButton;
