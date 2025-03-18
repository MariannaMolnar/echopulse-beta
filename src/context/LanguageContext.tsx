import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { SupportedLanguages } from "../i18n";
import i18next from "../i18n";
/*import en from "../languages/en.json";
import hu from "../languages/hu.json";*/

//export type Language = "en" | "hu";

interface LanguageContextType {
    language: SupportedLanguages;
    setLanguage: (lang: SupportedLanguages) => void;
    //translations: Record<string, object>
  }

const LanguageContext = createContext<LanguageContextType>({
    language: "en",
    setLanguage: () => {},
    //translations: {}
});

export const useLanguage = (): LanguageContextType => {
    return useContext(LanguageContext);
}

interface LanguageProviderProps {
    children: ReactNode;
  }

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const savedLanguage = (localStorage.getItem("language") as SupportedLanguages);
    const [language, setLanguage] = useState<SupportedLanguages>(savedLanguage);
    //const [translations, setTranslations] = useState(en);

    useEffect(() => {
        localStorage.setItem("language", language);
        i18next.changeLanguage(language); // Change i18next language
        //setTranslations(language === "en" ? en : hu);
    }, [language]);

    //Set initial language
    useEffect(()=> {
        i18next.changeLanguage(savedLanguage);
      },[])

    return (
        <LanguageContext.Provider value={{ language, setLanguage, /*translations*/ }}>
            {children}
        </LanguageContext.Provider>
    )
}