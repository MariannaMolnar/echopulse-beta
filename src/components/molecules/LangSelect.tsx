import { SupportedLanguages } from "../../i18n";

interface LangSelectProps {
  language: SupportedLanguages;
  setLanguage: (lang: SupportedLanguages) => void;
  onLanguageSelect?: () => void;
}

function LangSelect({
  language,
  setLanguage,
  onLanguageSelect,
}: LangSelectProps) {
  return (
    <div className="justify-start text-center block px-4 py-2 md:p-0">
      <span
        className={`text-4xl md:text-lg xl:text-xl font-normal font-smallCaps uppercase tracking-[3.60px] md:tracking-widest cursor-pointer ${
          language === "hu" ? "text-sand" : "text-white"
        }`}
        onClick={() => {
          setLanguage("hu");
          if (onLanguageSelect) {
            onLanguageSelect();
          }
        }}
      >
        {"hu"}
      </span>
      <span className="text-white text-4xl md:text-lg xl:text-xl font-normal font-smallCaps uppercase tracking-[3.60px] md:tracking-widest">
        {" "}
        /{" "}
      </span>
      <span
        className={`text-4xl md:text-lg xl:text-xl font-normal font-smallCaps uppercase tracking-[3.60px] md:tracking-widest cursor-pointer ${
          language === "en" ? `text-sand` : `text-white`
        }`}
        onClick={() => {
          setLanguage("en");
          if (onLanguageSelect) {
            onLanguageSelect();
          }
        }}
      >
        {"en"}
      </span>
    </div>
  );
}

export default LangSelect;
