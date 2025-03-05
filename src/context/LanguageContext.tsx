import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Language = "en" | "hu";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
  }

const LanguageContext = createContext<LanguageContextType>({
    language: "en",
    setLanguage: () => {}
});

export const useLanguage = (): LanguageContextType => {
    return useContext(LanguageContext);
}

interface LanguageProviderProps {
    children: ReactNode;
  }

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const savedLanguage = (localStorage.getItem("language") as Language) || "en";
    const [language, setLanguage] = useState<Language>(savedLanguage);

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language])

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}