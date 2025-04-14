import { useTranslation } from "react-i18next";
import { Artist } from "../../data/artists";
import { useLanguage } from "../../context/LanguageContext";

type ArtistAboutProps = {
  artist: Artist;
};

function ArtistAbout({ artist }: ArtistAboutProps) {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const aboutText =
    artist.description[language as keyof typeof artist.description];

  return (
    <div className="w-full bg-black/60 text-gray-300 rounded-xl shadow-lg py-4 mt-4 md:py-6 px-4 md:px-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white pb-6">
        {t("artistDetails.sectionTitles.about")}
      </h2>
      <p className="whitespace-pre-line text-justify text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
        {aboutText}
      </p>
    </div>
  );
}

export default ArtistAbout;
