import { useTranslation } from "react-i18next";

function AllArtists() {
  const { t } = useTranslation();

  return (
    <div className="isolate w-full flex flex-col items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="w-full bg-black/60 text-gray-300 py-20 px-6 rounded-xl shadow-lg">
        {/* Page title */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="allArtists-title">{t("allArtists.title")}</h2>
        </div>

        {/* Filter and search - to be implemented */}
        
      </div>
    </div>
  );
}

export default AllArtists;
