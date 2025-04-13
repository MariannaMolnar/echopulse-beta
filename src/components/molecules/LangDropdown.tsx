import { JSX, ReactNode } from "react";
import { SupportedLanguages } from "../../i18n";
import ReactCountryFlag from "react-country-flag";

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
      {/* Trigger Button */}
      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 text-gray-300 font-bold hover:text-blue-600 h-10"
        onClick={handleToggle}
      >
        {children}
        <span>{buttonText}</span>
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50">
          <ul className="w-auto h-auto shadow-lg rounded-md bg-black py-1">
            {items.map((item) => (
              <li
                key={item.title}
                className="relative flex justify-start gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:rounded-md cursor-pointer"
                onClick={() => {
                  setLanguage(item.title);
                  handleToggle();
                }}
              >
                {/* Flag Container */}
                <div className="w-6 h-5 inline-flex items-center justify-center shrink-0 rounded-xs overflow-hidden">
                  <ReactCountryFlag
                    countryCode={item.countryCode}
                    svg
                    style={{ width: "2em", height: "1em" }}
                    className="h-full w-auto max-w-full"
                  />
                </div>
                <span>{item.title.toUpperCase()}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LangDropdown;
