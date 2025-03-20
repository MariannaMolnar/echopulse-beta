import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col items-center gap-16 py-16">
      {/* Hero Section 1: Introduction */}
      <section className="hero-section">
        <h2 className="hero-title">{t("about.intro.title")}</h2>
        <p className="hero-text">{t("about.intro.description")}</p>
      </section>

      {/* Hero Section 2: Mission */}
      <section className="hero-section">
        <h2 className="hero-title">{t("about.mission.title")}</h2>
        <p className="hero-text">{t("about.mission.description")}</p>
      </section>
    </div>
  );
}

export default About;
