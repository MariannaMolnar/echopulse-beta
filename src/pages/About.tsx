import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col items-center gap-16 py-16">
        {/* Hero Section 1: Introduction */}
        <section className="hero-section">
            <h2 className="hero-title">{t("about.title")}</h2>
            <p className="hero-text">{t("about.intro")}</p>
        </section>
    </div>
  );
}

export default About;
