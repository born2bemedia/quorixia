"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ButtonArrow from "@/icons/ButtonArrow";
import { Link } from "@/navigation";
import OrderButton from "@/global_components/OrderButton";
import { useLocale, useTranslations } from "next-intl";

const EmploymentExpertise = () => {
  const t = useTranslations("employment");
  const [isMobile, setIsMobile] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const locale = useLocale();

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  const expertiseDataEn = [
    {
      title: "Resume & CV <br>Building",
      description:
        "Craft custom resumes that highlight your unique strengths and achievements.",
    },
    {
      title: "Interview <br>Preparation",
      description:
        "Gain confidence and practice techniques to excel in your interviews.",
    },
    {
      title: "Job Search <br>Strategy",
      description:
        "Navigate the job market with a tailored plan that fits your career goals.",
    },
    {
      title: "LinkedIn Profile <br>Optimization",
      description:
        "Enhance your digital presence with a standout LinkedIn profile to attract employers.",
    },
    {
      title: "Networking <br>Strategy",
      description:
        "Learn how to expand your professional network and leverage critical contacts.",
    },
    {
      title: "Cover Letter <br>Writing",
      description:
        "Create compelling cover letters that stand out to potential employers.",
    },
    {
      title: "Job Market Trends <br>& Insights",
      description:
        "Stay ahead of industry trends and market shifts to optimise your job search.",
    },
    {
      title: "Salary Negotiation <br>Coaching",
      description:
        "Learn how to negotiate your salary and benefits with confidence effectively.",
    },
    {
      title: "Career Transition <br>Support",
      description:
        "Smoothly transition to a new industry or job role with personalised advice.",
    },
    {
      title: "Personal Branding <br>Consultation",
      description:
        "Build a solid personal brand that sets you apart in the job market.",
    },
    {
      title: "Job Application <br>Assistance",
      description:
        "Get guidance on filling out job applications that grab the attention of recruiters.",
    },
    {
      title: "Professional Portfolio <br>Development",
      description:
        "Showcase your work and skills with a well-designed professional portfolio.",
    },
    {
      title: "Freelance & Contract <br>Job Strategies",
      description:
        "Tailored support for those seeking freelance or contract-based opportunities.",
    },
    {
      title: "Virtual Interview <br>Coaching",
      description:
        "Master the nuances of virtual interviews with targeted coaching.",
    },
    {
      title: "Workplace Culture <br>Fit Analysis",
      description:
        "Find a work environment that aligns with your values and personality.",
    },
    {
      title: "Internship & Apprenticeship <br>Search",
      description:
        "Specialised assistance for finding internships and apprenticeships.",
    },
    {
      title: "Second Career <br>Planning",
      description:
        "Tailored strategies for professionals seeking a complete career shift.",
    },
    {
      title: "Interview Follow-Up <br>Strategy",
      description:
        "Learn how to follow up after interviews to increase your chances of success.",
    },
    {
      title: "Freelancer Profile <br>Optimization",
      description:
        "Boost your profile on freelance platforms to attract better clients and projects.",
    },
    {
      title: "Employment Law <br>Advice",
      description:
        "Understand your rights and obligations as you navigate your job search.",
    },
    {
      title: "Job Offer <br>Evaluation",
      description:
        "Get expert advice on evaluating and accepting the best job offers for your career growth.",
    },
  ];

  const expertiseDataDe = [
    {
      title: "Lebenslauf & CV <br>Erstellung",
      description:
        "Erstellen Sie maßgeschneiderte Lebensläufe, die Ihre einzigartigen Stärken und Erfolge hervorheben.",
    },
    {
      title: "Vorbereitung auf das <br>Vorstellungsgespräch",
      description:
        "Gewinnen Sie Selbstvertrauen und üben Sie Techniken, um in Ihren Interviews zu glänzen.",
    },
    {
      title: "Strategie für die <br>Jobsuche",
      description:
        "Navigieren Sie den Arbeitsmarkt mit einem maßgeschneiderten Plan, der zu Ihren Karrierezielen passt.",
    },
    {
      title: "LinkedIn Profil <br>Optimierung",
      description:
        "Verbessern Sie Ihre digitale Präsenz mit einem auffälligen LinkedIn-Profil, um Arbeitgeber anzuziehen.",
    },
    {
      title: "Netzwerkstrategie",
      description:
        "Erfahren Sie, wie Sie Ihr berufliches Netzwerk erweitern und wichtige Kontakte nutzen können.",
    },
    {
      title: "Anschreiben <br>Erstellung",
      description:
        "Erstellen Sie überzeugende Anschreiben, die potenziellen Arbeitgebern auffallen.",
    },
    {
      title: "Arbeitsmarkttrends <br>& Einblicke",
      description:
        "Bleiben Sie über Branchentrends und Marktveränderungen informiert, um Ihre Jobsuche zu optimieren.",
    },
    {
      title: "Coaching für Gehalts<Br>verhandlung",
      description:
        "Lernen Sie, wie Sie Gehalt und Leistungen effektiv und selbstbewusst verhandeln.",
    },
    {
      title: "Unterstützung bei <br>Karrieretransitionen",
      description:
        "Wechseln Sie reibungslos in eine neue Branche oder Rolle mit personalisierter Beratung.",
    },
    {
      title: "Beratung zur <br>persönlichen Marke",
      description:
        "Bauen Sie eine starke persönliche Marke auf, die Sie im Arbeitsmarkt abhebt.",
    },
    {
      title: "Unterstützung bei <br>Bewerbungen",
      description:
        "Erhalten Sie Unterstützung beim Ausfüllen von Bewerbungen, die das Interesse der Personalverantwortlichen wecken.",
    },
    {
      title: "Entwicklung eines <br>professionellen Portfolios",
      description:
        "Präsentieren Sie Ihre Arbeit und Fähigkeiten mit einem gut gestalteten professionellen Portfolio.",
    },
    {
      title: "Strategien für <br>Freiberufliche & Vertragsarbeit",
      description:
        "Maßgeschneiderte Unterstützung für diejenigen, die freiberufliche oder vertragliche Chancen suchen.",
    },
    {
      title: "Coaching für <br>virtuelle Interviews",
      description:
        "Meistern Sie die Besonderheiten virtueller Interviews mit gezieltem Coaching.",
    },
    {
      title: "Analyse der <br>Unternehmenskultur",
      description:
        "Finden Sie ein Arbeitsumfeld, das zu Ihren Werten und Ihrer Persönlichkeit passt.",
    },
    {
      title: "Suche nach Praktika & <br>Lehrstellen",
      description:
        "Spezialisierte Unterstützung bei der Suche nach Praktika und Ausbildungsstellen.",
    },
    {
      title: "Planung einer <br>zweiten Karriere",
      description:
        "Individuelle Strategien für Fachkräfte, die eine komplette Karriereänderung anstreben.",
    },
    {
      title: "Strategie für <br>Follow-Up nach Interviews",
      description:
        "Erfahren Sie, wie Sie nach Interviews nachfassen, um Ihre Erfolgschancen zu erhöhen.",
    },
    {
      title: "Optimierung des <br>Freiberuflerprofils",
      description:
        "Verbessern Sie Ihr Profil auf Freiberufler-Plattformen, um bessere Kunden und Projekte anzuziehen.",
    },
    {
      title: "Beratung im <br>Arbeitsrecht",
      description:
        "Verstehen Sie Ihre Rechte und Pflichten, während Sie Ihre Jobsuche vorantreiben.",
    },
    {
      title: "Bewertung von <br>Jobangeboten",
      description:
        "Erhalten Sie Expertenrat zur Bewertung und Annahme der besten Jobangebote für Ihr berufliches Wachstum.",
    },
  ];

  const expertiseDataIt = [
    {
      title: "Creazione del <br>Curriculum Vitae",
      description:
        "Crea curriculum personalizzati che mettano in risalto le tue competenze e successi unici.",
    },
    {
      title: "Preparazione al <br>Colloquio",
      description:
        "Acquisisci fiducia e pratica le tecniche per eccellere nei colloqui.",
    },
    {
      title: "Strategia di <br>Ricerca Lavoro",
      description:
        "Naviga il mercato del lavoro con un piano su misura che si adatta ai tuoi obiettivi di carriera.",
    },
    {
      title: "Ottimizzazione del <br>Profilo LinkedIn",
      description:
        "Migliora la tua presenza digitale con un profilo LinkedIn efficace per attrarre i datori di lavoro.",
    },
    {
      title: "Strategia di <br>Networking",
      description:
        "Scopri come espandere la tua rete professionale e sfruttare contatti strategici.",
    },
    {
      title: "Scrittura della <br>Lettera di Presentazione",
      description:
        "Crea lettere di presentazione convincenti che catturino l'attenzione dei potenziali datori di lavoro.",
    },
    {
      title: "Tendenze e <br>Approfondimenti del Mercato del Lavoro",
      description:
        "Rimani aggiornato sulle tendenze di settore e sui cambiamenti di mercato per ottimizzare la ricerca di lavoro.",
    },
    {
      title: "Coaching per <br>Negoziazione Salariale",
      description:
        "Impara a negoziare efficacemente il tuo stipendio e i benefici con fiducia.",
    },
    {
      title: "Supporto per la <br>Transizione di Carriera",
      description:
        "Passa agevolmente a una nuova industria o ruolo con consulenze personalizzate.",
    },
    {
      title: "Consulenza per il <br>Brand Personale",
      description:
        "Costruisci un solido brand personale che ti distingua nel mercato del lavoro.",
    },
    {
      title: "Assistenza per le <br>Candidature",
      description:
        "Ricevi assistenza per compilare candidature che attirino l'attenzione dei selezionatori.",
    },
    {
      title: "Sviluppo del <br>Portfolio Professionale",
      description:
        "Mostra il tuo lavoro e le tue competenze con un portfolio professionale ben progettato.",
    },
    {
      title: "Strategie per <br>Lavoro Freelance & Contratti",
      description:
        "Supporto personalizzato per chi cerca opportunità freelance o a contratto.",
    },
    {
      title: "Coaching per Colloqui <br>Virtuali",
      description:
        "Impara le sfumature dei colloqui virtuali con un coaching mirato.",
    },
    {
      title: "Analisi dell'Adattamento <br>alla Cultura Aziendale",
      description:
        "Trova un ambiente di lavoro che rispecchi i tuoi valori e la tua personalità.",
    },
    {
      title: "Ricerca di Stage & <br>Apprendistati",
      description:
        "Assistenza specializzata per trovare stage e apprendistati.",
    },
    {
      title: "Pianificazione della <br>Seconda Carriera",
      description:
        "Strategie su misura per professionisti che cercano un cambiamento completo di carriera.",
    },
    {
      title: "Strategia di Follow-Up <br>dopo il Colloquio",
      description:
        "Impara a seguire i colloqui per aumentare le tue possibilità di successo.",
    },
    {
      title: "Ottimizzazione del <br>Profilo Freelance",
      description:
        "Migliora il tuo profilo sulle piattaforme freelance per attrarre clienti e progetti migliori.",
    },
    {
      title: "Consulenza sul <br>Diritto del Lavoro",
      description: "Comprendi i tuoi diritti e doveri mentre cerchi lavoro.",
    },
    {
      title: "Valutazione delle <br>Offerte di Lavoro",
      description:
        "Ottieni consulenza per valutare e accettare le migliori offerte di lavoro per la tua crescita professionale.",
    },
  ];

  const [expertiseData, setExpertiseData] = useState(expertiseDataEn);

  useEffect(() => {
    if (locale == "de") {
      setExpertiseData(expertiseDataDe);
    } else if (locale == "it") {
      setExpertiseData(expertiseDataIt);
    } else {
      setExpertiseData(expertiseDataEn);
    }

    const checkMobile = () => setIsMobile(window.innerWidth <= 992);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Function to split the data into chunks of 3 items each
  const chunkArray = (array, chunkSize) => {
    const results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  };

  const chunkedData = chunkArray(expertiseData, 3);

  return (
    <section className="employment-expertise">
      <div className="_container">
        <div className="employment-expertise__top">
          <h2
            className="fadeInUp"
            dangerouslySetInnerHTML={{ __html: t("EmploymentExpertise.title") }}
          />
          <p
            className="fadeInUp"
            dangerouslySetInnerHTML={{ __html: t("EmploymentExpertise.text") }}
          />
        </div>
        {isMobile ? (
          <>
            <Swiper
              ref={swiperRef} // Attach ref to Swiper component
              spaceBetween={20}
              slidesPerView={1}
              className="employment-expertise__swiper"
            >
              {chunkedData.map((chunk, index) => (
                <SwiperSlide key={index}>
                  <div className="employment-expertise__slide">
                    {chunk.map((item, subIndex) => (
                      <div
                        className="employment-expertise__item fadeInUp"
                        key={subIndex}
                      >
                        <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="arrows">
              <img
                src="/images/prev.svg"
                className="prev"
                alt="Previous"
                style={{ cursor: "pointer" }}
                onClick={handlePrev}
              />
              <img
                src="/images/next.svg"
                className="next"
                alt="Next"
                style={{ cursor: "pointer" }}
                onClick={handleNext}
              />
            </div>
          </>
        ) : (
          <div className="employment-expertise__body">
            {expertiseData.map((item, index) => (
              <div className="employment-expertise__item fadeInUp" key={index}>
                <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}
        <div className="buttons-wrap">
          <OrderButton
            packageItem={t("EmploymentExpertise.service")}
            text={t("EmploymentExpertise.button")}
          />
        </div>
      </div>
    </section>
  );
};

export default EmploymentExpertise;
