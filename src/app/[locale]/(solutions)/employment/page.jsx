import React from "react";
import "@/styles/employment.scss";
import HomeReviews from "@/app/[locale]/(home)/_components/HomeReviews";
import OrderPopup from "@/global_components/OrderPopup";
import ThanksPopup from "@/global_components/ThanksPopup";
import EmploymentHero from "./_components/EmploymentHero";
import EmploymentExpertise from "./_components/EmploymentExpertise";
import EmploymentPricing from "./_components/EmploymentPricing";
import EmploymentPersonalisedApproach from "./_components/EmploymentPersonalisedApproach";
import EmploymentRequest from "./_components/EmploymentRequest";
import EmploymentHowWork from "./_components/EmploymentHowWork";
import RequestPopup from "@/global_components/RequestPopup";
import { useLocale } from "next-intl";

export const metadata = {
  title: "Employment Services to Elevate Your Career | Quorixia",
  description:
    "Quorixia offers employment services, including resume building, interview prep, and job search strategies to help you find and secure the right opportunities.",
  openGraph: {
    title: "Employment Services to Elevate Your Career | Quorixia",
    description:
      "Quorixia offers employment services, including resume building, interview prep, and job search strategies to help you find and secure the right opportunities.",
    images: "https://quorixia.com/images/meta.png",
  },
};

const EmploymentPage = () => {
  const locale = useLocale();

  const reviews = [
    {
      name: "Alex G.",
      title: "Software Developer",
      quote:
        "“Quorixia helped me optimise my resume and LinkedIn profile, and within weeks, I was getting interviews for positions I wanted.”",
      link: "#",
    },
    {
      name: "Maria L.",
      title: "Marketing Specialist",
      quote:
        "“Their interview coaching gave me the confidence to succeed in a highly competitive market. I secured a job in no time.”",
      link: "#",
    },
    {
      name: "John D.",
      title: "Project Manager",
      quote:
        "“The personalised job search strategy completely transformed how I approached finding new opportunities. Quorixia was instrumental in my career transition.”",
      link: "#",
    },
    {
      name: "Emma W.",
      title: "HR Specialist",
      quote:
        "“The support I received from Quorixia was invaluable. From refining my cover letter to negotiating my job offer, they guided me through every step. I landed a role that aligns perfectly with my career goals.”",
      link: "#",
    },
  ];

  const reviewsDe = [
    {
      name: "Alex G.",
      title: "Softwareentwickler",
      quote:
        "“Quorixia hat mir geholfen, meinen Lebenslauf und mein LinkedIn-Profil zu optimieren, und innerhalb weniger Wochen bekam ich Einladungen zu Interviews für Positionen, die ich wollte.”",
      link: "#",
    },
    {
      name: "Maria L.",
      title: "Marketing-Spezialistin",
      quote:
        "“Ihr Interview-Coaching gab mir das Selbstvertrauen, um in einem hochkompetitiven Markt erfolgreich zu sein. Ich habe schnell einen Job gefunden.”",
      link: "#",
    },
    {
      name: "John D.",
      title: "Projektmanager",
      quote:
        "“Die personalisierte Jobsuchstrategie hat meine Herangehensweise bei der Suche nach neuen Möglichkeiten völlig verändert. Quorixia war entscheidend für meinen Karriereschritt.”",
      link: "#",
    },
    {
      name: "Emma W.",
      title: "HR-Spezialistin",
      quote:
        "“Die Unterstützung, die ich von Quorixia erhielt, war von unschätzbarem Wert. Von der Verfeinerung meines Anschreibens bis zur Verhandlung meines Jobangebots haben sie mich durch jeden Schritt begleitet. Ich habe eine Stelle gefunden, die perfekt zu meinen Karrierezielen passt.”",
      link: "#",
    },
  ];

  const reviewsIt = [
    {
      name: "Alex G.",
      title: "Sviluppatore Software",
      quote:
        "“Quorixia mi ha aiutato a ottimizzare il mio curriculum e il profilo LinkedIn e, nel giro di poche settimane, ho iniziato a ricevere colloqui per posizioni che desideravo.”",
      link: "#",
    },
    {
      name: "Maria L.",
      title: "Specialista in Marketing",
      quote:
        "“Il loro coaching per i colloqui mi ha dato la fiducia per avere successo in un mercato altamente competitivo. Ho trovato lavoro in poco tempo.”",
      link: "#",
    },
    {
      name: "John D.",
      title: "Project Manager",
      quote:
        "“La strategia personalizzata di ricerca del lavoro ha completamente trasformato il mio approccio alla ricerca di nuove opportunità. Quorixia è stata fondamentale nella mia transizione di carriera.”",
      link: "#",
    },
    {
      name: "Emma W.",
      title: "Specialista HR",
      quote:
        "“Il supporto che ho ricevuto da Quorixia è stato inestimabile. Dal perfezionamento della lettera di presentazione alla negoziazione dell'offerta di lavoro, mi hanno guidato in ogni fase. Ho ottenuto un ruolo che si allinea perfettamente con i miei obiettivi di carriera.”",
      link: "#",
    },
  ];

  return (
    <>
      <EmploymentHero />
      <EmploymentExpertise />
      <EmploymentPricing />
      <EmploymentHowWork />
      {locale == "en" && (
        <HomeReviews reviews={reviews} />
      )}
      {locale == "de" && (
        <HomeReviews reviews={reviewsDe} />
      )}
      {locale == "it" && (
        <HomeReviews reviews={reviewsIt} />
      )}
      <EmploymentRequest />
      <RequestPopup />
      <ThanksPopup />
    </>
  );
};

export default EmploymentPage;
