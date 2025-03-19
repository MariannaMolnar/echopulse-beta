import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { SupportedLanguages } from "../i18n";
import i18next from "../i18n";

interface LanguageContextType {
    language: SupportedLanguages;
    setLanguage: (lang: SupportedLanguages) => void;
  }

const LanguageContext = createContext<LanguageContextType>({
    language: "en",
    setLanguage: () => {},
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

    useEffect(() => {
        localStorage.setItem("language", language);
        i18next.changeLanguage(language); // Change i18next language
    }, [language]);

    //Set initial language
    useEffect(()=> {
        i18next.changeLanguage(savedLanguage);
      },[])

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}