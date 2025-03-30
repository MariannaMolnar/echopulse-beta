import { JSX, ReactNode } from "react";
import { SupportedLanguages } from "../i18n";

interface ItemType {
  title: SupportedLanguages;
  countryCode: string;
  url?: string;
  icon?: JSX.Element;
  action?: () => void;
}

interface LangDropdownProps {
  buttonText: string;
  items: ItemType[];
  setLanguage: (lang: SupportedLanguages) => void;
  handleToggle: () => void;
  isOpen: boolean;
  children: ReactNode;
}

function LangDropdown({
  buttonText,
  items,
  setLanguage,
  handleToggle,
  isOpen,
  children,
}: LangDropdownProps) {
  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 text-gray-300 font-bold hover:text-blue-600 h-10"
        onClick={handleToggle}
      >
        {children}
        <span>{buttonText}</span>
      </button>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/3 top-14">
          <ul className="w-auto h-auto shadow-lg rounded-md bg-black/70">
            {items.map((item, index) => (
              <li
                key={index}
                className="relative flex justify-center gap-2 px-6 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:rounded-md"
                onClick={() => {
                  setLanguage(item.title);
                  handleToggle();
                }}
              >
                {item.title.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LangDropdown;
