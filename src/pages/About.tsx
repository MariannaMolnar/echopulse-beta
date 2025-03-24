import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const services = t("about.services.list", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  return (
    <div className="w-full flex flex-col items-center gap-16 px-6 py-24 sm:py-32 lg:px-8">
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

      {/* Hero Section 3: Services */}
      <section className="hero-section">
        <h2 className="hero-title">{t("about.services.title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Section 4: About the Team */}
      <section className="hero-section">
        <h2 className="hero-title">{t("about.team.title")}</h2>
        <p className="hero-text">{t("about.team.description")}</p>
      </section>
    </div>
  );
}

export default About;
