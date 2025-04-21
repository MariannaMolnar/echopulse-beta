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
      <section className="w-full max-w-6xl bg-black/60 text-gray-300 text-center py-20 px-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold tracking-tight mb-4 relative -top-10 sm:text-4xl">{t("about.intro.title")}</h2>
        <p className="text-lg">{t("about.intro.description")}</p>
      </section>

      {/* Hero Section 2: Mission */}
      <section className="w-full max-w-6xl bg-black/60 text-gray-300 text-center py-20 px-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold tracking-tight mb-4 relative -top-10 sm:text-4xl">{t("about.mission.title")}</h2>
        <p className="text-lg">{t("about.mission.description")}</p>
      </section>

      {/* Hero Section 3: Services */}
      <section className="w-full max-w-6xl bg-black/60 text-gray-300 text-center py-20 px-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold tracking-tight mb-4 relative -top-10 sm:text-4xl">{t("about.services.title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl p-4">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900/80 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold relative -top-3">{service.title}</h3>
              <p className="relative -bottom-1">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Section 4: About the Team */}
      <section className="w-full max-w-6xl bg-black/60 text-gray-300 text-center py-20 px-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold tracking-tight mb-4 relative -top-10 sm:text-4xl">{t("about.team.title")}</h2>
        <p className="text-lg">{t("about.team.description")}</p>
      </section>
    </div>
  );
}

export default About;
