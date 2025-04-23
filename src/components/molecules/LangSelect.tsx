import { SupportedLanguages } from "../../i18n";

interface LangSelectProps {
  language: SupportedLanguages;
  setLanguage: (lang: SupportedLanguages) => void;
}

function LangSelect({ language, setLanguage }: LangSelectProps) {
  return (
    <div className="justify-start">
      <span
        className={`text-lg xl:text-xl font-normal font-nexaRustSansBook uppercase tracking-widest cursor-pointer ${
          language === "hu" ? "text-sand" : "text-white"
        }`}
        onClick={() => {
          setLanguage("hu");
        }}
      >
        {"hu"}
      </span>
      <span className="text-white text-lg xl:text-xl font-normal font-nexaRustSansBook uppercase tracking-widest">
        {" "}
        /{" "}
      </span>
      <span
        className={`text-lg xl:text-xl font-normal font-nexaRustSansBook uppercase tracking-widest cursor-pointer ${
          language === "en" ? `text-sand` : `text-white`
        }`}
        onClick={() => {
          setLanguage("en");
        }}
      >
        {"en"}
      </span>
    </div>
  );
}

export default LangSelect;
