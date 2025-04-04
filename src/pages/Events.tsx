import { useTranslation } from "react-i18next";
import { events } from "../data/events";

function Events() {
  const { t } = useTranslation();

  return (
    <div className="isolate w-full flex flex-col items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="w-full bg-black/60 text-gray-300 py-20 px-6 rounded-xl shadow-lg">
        {/* Page title */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-gray-300 relative -top-10 sm:text-4xl">{t("events.title")}</h2>
        </div>
      </div>
    </div>
  );
}

export default Events;
