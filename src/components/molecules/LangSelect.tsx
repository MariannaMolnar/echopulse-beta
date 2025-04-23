import { SupportedLanguages } from "../../i18n";

interface LangSelectProps {
  language: SupportedLanguages;
  setLanguage: (lang: SupportedLanguages) => void;
}

function LangSelect({ language, setLanguage }: LangSelectProps) {
  return (
    <div className="justify-start">
      <span
        className={`text-xl font-normal font-nexaRustSansBook uppercase tracking-widest ${
          language === "hu" ? "text-sand" : "text-white"
        }`}
        onClick={() => {
          setLanguage("hu");
        }}
      >
        {"hu"}
      </span>
      <span className="text-white text-xl font-normal font-nexaRustSansBook uppercase tracking-widest">
        {" "}
        /{" "}
      </span>
      <span
        className={`text-xl font-normal font-nexaRustSansBook uppercase tracking-widest ${
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
