import React from "react";
import "@/styles/hr.scss";
import HrHero from "./_components/HrHero";
import HomeReviews from "@/app/[locale]/(home)/_components/HomeReviews";
import HrRequest from "./_components/HrRequest";
import HrPricing from "./_components/HrPricing";
import HrPersonalisedApproach from "./_components/HrPersonalisedApproach";
import HrExpertise from "./_components/HrExpertise";
import OrderPopup from "@/global_components/OrderPopup";
import ThanksPopup from "@/global_components/ThanksPopup";
import RequestPopup from "@/global_components/RequestPopup";
import { useLocale } from "next-intl";

export const metadata = {
  title: "Expert HR Solutions for Career Success | Quorixia",
  description:
    "From contract negotiation to leadership coaching, Quorixia’s HR services provide the expert guidance you need to navigate and excel in your career.",
  openGraph: {
    title: "Expert HR Solutions for Career Success | Quorixia",
    description:
      "From contract negotiation to leadership coaching, Quorixia’s HR services provide the expert guidance you need to navigate and excel in your career.",
    images: "https://quorixia.com/images/meta.png",
  },
};

const HrPage = () => {
  const locale = useLocale();

  const reviews = [
    {
      name: "Sarah J.",
      title: "Marketing Manager",
      quote:
        "“Quorixia helped me navigate a challenging contract negotiation and secure better terms. I’m more confident in my career decisions now!”",
      link: "#",
    },
    {
      name: "Daniel R.",
      title: "Engineering Lead",
      quote:
        "“The leadership coaching I received was exceptional. It helped me step into a new management role with confidence.”",
      link: "#",
    },
    {
      name: "Laura M.",
      title: "Project Coordinator",
      quote:
        "“I was struggling with workplace conflict, and Quorixia’s mediation service helped me resolve it quickly and professionally.”",
      link: "#",
    },
    {
      name: "Mike T.",
      title: "IT Specialist",
      quote:
        "“Their exit strategy support was invaluable. Quorixia helped me transition out of a toxic work environment and into a new opportunity.”",
      link: "#",
    },
  ];

  const reviewsDe = [
    {
      name: "Sarah J.",
      title: "Marketing Manager",
      quote:
        "“Quorixia hat mir geholfen, eine schwierige Vertragsverhandlung zu meistern und bessere Konditionen zu sichern. Ich bin jetzt sicherer in meinen beruflichen Entscheidungen!”",
      link: "#",
    },
    {
      name: "Daniel R.",
      title: "Engineering Lead",
      quote:
        "“Das Führungstraining, das ich erhielt, war außergewöhnlich. Es hat mir geholfen, mit Selbstvertrauen eine neue Führungsrolle anzunehmen.”",
      link: "#",
    },
    {
      name: "Laura M.",
      title: "Projektkoordinatorin",
      quote:
        "“Ich hatte Konflikte am Arbeitsplatz und der Mediationsdienst von Quorixia half mir, das Problem schnell und professionell zu lösen.”",
      link: "#",
    },
    {
      name: "Mike T.",
      title: "IT-Spezialist",
      quote:
        "“Ihre Unterstützung bei der Austrittsstrategie war von unschätzbarem Wert. Quorixia hat mir geholfen, eine toxische Arbeitsumgebung zu verlassen und eine neue Möglichkeit zu finden.”",
      link: "#",
    },
  ];

  const reviewsIt = [
    {
      name: "Sarah J.",
      title: "Responsabile Marketing",
      quote:
        "“Quorixia mi ha aiutato a gestire una difficile negoziazione contrattuale e a ottenere condizioni migliori. Ora sono più sicura delle mie decisioni di carriera!”",
      link: "#",
    },
    {
      name: "Daniel R.",
      title: "Capo dell'Ingegneria",
      quote:
        "“Il coaching di leadership che ho ricevuto è stato eccezionale. Mi ha aiutato ad assumere un nuovo ruolo di gestione con fiducia.”",
      link: "#",
    },
    {
      name: "Laura M.",
      title: "Coordinatrice di Progetto",
      quote:
        "“Avevo difficoltà con conflitti sul lavoro e il servizio di mediazione di Quorixia mi ha aiutato a risolverli rapidamente e professionalmente.”",
      link: "#",
    },
    {
      name: "Mike T.",
      title: "Specialista IT",
      quote:
        "“Il loro supporto nella strategia di uscita è stato inestimabile. Quorixia mi ha aiutato a uscire da un ambiente di lavoro tossico e a trovare una nuova opportunità.”",
      link: "#",
    },
  ];

  return (
    <>
      <HrHero />
      <HrExpertise />
      <HrPricing />
      {locale == "en" && (
        <HomeReviews reviews={reviews} />
      )}
      {locale == "de" && (
        <HomeReviews reviews={reviewsDe} />
      )}
      {locale == "it" && (
        <HomeReviews reviews={reviewsIt} />
      )}
      <HrPersonalisedApproach />
      <HrRequest />
      <RequestPopup />
      <ThanksPopup />
    </>
  );
};

export default HrPage;
