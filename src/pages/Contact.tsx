import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="isolate w-full flex flex-col items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="w-full max-w-6xl bg-black/60 text-gray-300 py-20 px-6 rounded-xl shadow-lg">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="contact-us-title">{t("contact.title")}</h2>
          <p className="mt-2 text-lg/8 text-gray-400">
            {t("contact.description")}
          </p>
        </div>
        <form className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* First name field */}
            <div>
              <label htmlFor="first-name" className="form-label">
                {t("contact.formLabels.firstName")}
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="form-input-field"
                />
              </div>
            </div>

            {/* Last name field */}
            <div>
              <label htmlFor="last-name" className="form-label">
                {t("contact.formLabels.lastName")}
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="form-input-field"
                />
              </div>
            </div>

            {/* Subject field */}
            <div className="sm:col-span-2">
              <label htmlFor="subject" className="form-label">
                {t("contact.formLabels.subject")}
              </label>
              <div className="mt-2.5">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  autoComplete="organization"
                  className="form-input-field"
                />
              </div>
            </div>

            {/* Email field */}
            <div className="sm:col-span-2">
              <label htmlFor="email" className="form-label">
                {t("contact.formLabels.email")}
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="form-input-field"
                />
              </div>
            </div>

            {/* Message field */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="form-label">
                {t("contact.formLabels.message")}
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-input-field"
                  defaultValue={""}
                />
              </div>
            </div>

            {/* Send button */}
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-gray-700 px-3.5 py-2.5 text-center text-base font-semibold text-gray-300 shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {t("contact.sendButton")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
