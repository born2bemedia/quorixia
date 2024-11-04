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

const HrExpertise = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const locale = useLocale();
  const t = useTranslations("hr");

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
      title: "Contract Negotiation <br>& Review",
      description:
        "Secure favourable terms in your employment agreements to protect your interests.",
    },
    {
      title: "Performance <br>Management",
      description:
        "Receive expert guidance to excel in your current role and achieve professional growth.",
    },
    {
      title: "Legal <br>HR Consultation",
      description:
        "Navigate complex employment laws and workplace rights with confidence.",
    },
    {
      title: "Workplace <br>Conflict Resolution",
      description:
        "Get professional advice on resolving disputes and creating a harmonious work environment.",
    },
    {
      title: "Leadership <br>Coaching",
      description:
        "Unlock your leadership potential with personalised coaching to advance in your career.",
    },
    {
      title: "Compensation <br>& Benefits Consultation",
      description:
        "Ensure you’re being compensated fairly and receiving the right benefits for your role.",
    },
    {
      title: "Exit Strategy & Career <br>Transition Support",
      description:
        "Receive guidance on smoothly transitioning out of a current role and into new opportunities.",
    },
    {
      title: "Work-Life Balance <br>Strategies",
      description:
        "Tailored strategies to help you maintain a healthy balance between work and personal life.",
    },
    {
      title: "Onboarding <br>Support",
      description:
        "Make the transition into new roles easier with customised onboarding advice.",
    },
    {
      title: "Talent Development <br>& Skills Assessment",
      description:
        "Identify your strengths and areas for growth with a tailored skills assessment.",
    },
    {
      title: "Diversity & Inclusion <br>Consultation",
      description: "Get advice on navigating diverse and inclusive workplaces.",
    },
    {
      title: "Remote Work <br>& Flexibility Planning",
      description:
        "Develop strategies to thrive in remote or flexible working environments.",
    },
    {
      title: "Career Path <br>Planning",
      description:
        "Map out a clear, strategic path for your career progression.",
    },
    {
      title: "HR Policy <br>Review",
      description:
        "Ensure your employment is aligned with fair and up-to-date HR policies.",
    },
    {
      title: "Personal <br>Development Plans",
      description:
        "Create a long-term plan for personal and professional development.",
    },
    {
      title: "Conflict <br>Mediation",
      description:
        "Receive expert mediation to help resolve internal workplace conflicts.",
    },
    {
      title: "Job Role Analysis <br>& Clarification",
      description:
        "Get clear on your role expectations and how to maximise your performance.",
    },
    {
      title: "Employee Rights <br>Advocacy",
      description:
        "Support in ensuring your employee rights are upheld in the workplace.",
    },
    {
      title: "Workplace Culture <br>& Adaptation",
      description:
        "Receive guidance on how to fit into and thrive within a company’s culture.",
    },
    {
      title: "Mentorship <br>Matching",
      description:
        "We help connect you with mentors in your industry for growth and development.",
    },
    {
      title: "Workplace Wellness <br>& Mental Health Suppor",
      description:
        "Develop strategies to improve your mental well-being and create a healthier work-life environment.",
    },
  ];

  const expertiseDataDe = [
    {
      title: "Vertragsverhandlung <br>& Überprüfung",
      description: "Sichern Sie sich vorteilhafte Konditionen in Ihren Arbeitsverträgen, um Ihre Interessen zu schützen.",
    },
    {
      title: "Leistungs<Br>management",
      description: "Erhalten Sie professionelle Unterstützung, um in Ihrer aktuellen Rolle erfolgreich zu sein und beruflich zu wachsen.",
    },
    {
      title: "Rechtliche <br>HR-Beratung",
      description: "Navigieren Sie sicher durch komplexe Arbeitsgesetze und Arbeitsplatzrechte.",
    },
    {
      title: "Konfliktlösung <br>am Arbeitsplatz",
      description: "Erhalten Sie professionelle Beratung zur Lösung von Streitigkeiten und zur Schaffung eines harmonischen Arbeitsumfelds.",
    },
    {
      title: "Führungs<Br>coaching",
      description: "Entfalten Sie Ihr Führungspotenzial mit individuellem Coaching, um in Ihrer Karriere voranzukommen.",
    },
    {
      title: "Beratung zu <br>Vergütung und Leistungen",
      description: "Stellen Sie sicher, dass Sie fair bezahlt werden und die richtigen Leistungen für Ihre Rolle erhalten.",
    },
    {
      title: "Ausstiegsstrategie & Karriere<Br>übergang",
      description: "Erhalten Sie Unterstützung für einen reibungslosen Übergang in neue berufliche Chancen.",
    },
    {
      title: "Strategien für <br>Work-Life-Balance",
      description: "Individuelle Strategien, um ein gesundes Gleichgewicht zwischen Arbeit und Privatleben zu erreichen.",
    },
    {
      title: "Onboarding <Br>Unterstützung",
      description: "Erleichtern Sie den Übergang in neue Rollen mit maßgeschneiderter Onboarding-Beratung.",
    },
    {
      title: "Talententwicklung <br>& Kompetenzbewertung",
      description: "Erkennen Sie Ihre Stärken und Wachstumsbereiche mit einer individuellen Kompetenzbewertung.",
    },
    {
      title: "Beratung zu <br>Diversität & Inklusion",
      description: "Erhalten Sie Beratung zur Navigation in diversen und inklusiven Arbeitsumgebungen.",
    },
    {
      title: "Planung für <br>Remote-Arbeit & Flexibilität",
      description: "Entwickeln Sie Strategien, um in flexiblen oder Remote-Arbeitsumgebungen erfolgreich zu sein.",
    },
    {
      title: "Karriere<Br>planung",
      description: "Entwickeln Sie einen klaren, strategischen Plan für Ihren beruflichen Fortschritt.",
    },
    {
      title: "HR-<br>Richtlinienüberprüfung",
      description: "Stellen Sie sicher, dass Ihre Beschäftigung fairen und aktuellen HR-Richtlinien entspricht.",
    },
    {
      title: "Persönliche <br>Entwicklungspläne",
      description: "Erstellen Sie einen langfristigen Plan für persönliche und berufliche Entwicklung.",
    },
    {
      title: "Mediation <br>bei Konflikten",
      description: "Erhalten Sie professionelle Mediation, um interne Konflikte am Arbeitsplatz zu lösen.",
    },
    {
      title: "Analyse & Klärung der <br>Job-Rolle",
      description: "Klären Sie Ihre Rollenanforderungen und optimieren Sie Ihre Leistung.",
    },
    {
      title: "Mitarbeiterrechte <br>Vertretung",
      description: "Unterstützung, um sicherzustellen, dass Ihre Mitarbeiterrechte am Arbeitsplatz gewahrt werden.",
    },
    {
      title: "Anpassung an die <br>Unternehmenskultur",
      description: "Erhalten Sie Unterstützung, um sich in die Unternehmenskultur einzufügen und erfolgreich zu sein.",
    },
    {
      title: "Mentoring <br>Matching",
      description: "Wir helfen Ihnen, mit Mentoren in Ihrer Branche für Wachstum und Entwicklung in Kontakt zu treten.",
    },
    {
      title: "Wellness & <br>psychische Unterstützung",
      description: "Entwickeln Sie Strategien zur Verbesserung des mentalen Wohlbefindens und für ein gesünderes Arbeitsleben.",
    },
  ];
  
  const expertiseDataIt = [
    {
      title: "Negoziazione e Revisione <br>dei Contratti",
      description: "Garantisci condizioni favorevoli nei tuoi contratti di lavoro per proteggere i tuoi interessi.",
    },
    {
      title: "Gestione delle <br>Prestazioni",
      description: "Ricevi consulenza esperta per eccellere nel tuo ruolo attuale e crescere professionalmente.",
    },
    {
      title: "Consulenza Legale <br>HR",
      description: "Naviga con sicurezza le complesse leggi sul lavoro e i diritti sul posto di lavoro.",
    },
    {
      title: "Risoluzione dei Conflitti <br>sul Lavoro",
      description: "Ottieni consulenza professionale per risolvere conflitti e creare un ambiente di lavoro armonioso.",
    },
    {
      title: "Coaching <br>di Leadership",
      description: "Sblocca il tuo potenziale di leadership con un coaching personalizzato per avanzare nella carriera.",
    },
    {
      title: "Consulenza su <br>Retribuzione e Benefici",
      description: "Assicurati di essere equamente compensato e di ricevere i benefici giusti per il tuo ruolo.",
    },
    {
      title: "Strategia di Uscita & Supporto <br>alla Transizione di Carriera",
      description: "Ricevi supporto per una transizione fluida verso nuove opportunità professionali.",
    },
    {
      title: "Strategie di <br>Equilibrio Vita-Lavoro",
      description: "Strategie personalizzate per mantenere un equilibrio sano tra lavoro e vita personale.",
    },
    {
      title: "Supporto <br>all'Inserimento",
      description: "Rendi la transizione in nuovi ruoli più semplice con consigli personalizzati sull'inserimento.",
    },
    {
      title: "Sviluppo del Talento <br>& Valutazione delle Competenze",
      description: "Identifica i tuoi punti di forza e le aree di crescita con una valutazione delle competenze su misura.",
    },
    {
      title: "Consulenza su <br>Diversità e Inclusione",
      description: "Ottieni consigli per navigare in ambienti di lavoro diversi e inclusivi.",
    },
    {
      title: "Pianificazione per il Lavoro <br>Remoto & Flessibilità",
      description: "Sviluppa strategie per prosperare in ambienti di lavoro flessibili o remoti.",
    },
    {
      title: "Pianificazione della <br>Carriera",
      description: "Elabora un piano chiaro e strategico per la tua crescita professionale.",
    },
    {
      title: "Revisione delle <br>Politiche HR",
      description: "Assicurati che il tuo impiego sia in linea con politiche HR eque e aggiornate.",
    },
    {
      title: "Piani di <br>Sviluppo Personale",
      description: "Crea un piano a lungo termine per lo sviluppo personale e professionale.",
    },
    {
      title: "Mediazione dei <br>Conflitti",
      description: "Ricevi mediazione professionale per risolvere conflitti interni sul posto di lavoro.",
    },
    {
      title: "Analisi e Chiarimento <br>del Ruolo",
      description: "Chiarisci le aspettative del ruolo e massimizza le tue prestazioni.",
    },
    {
      title: "Difesa dei Diritti dei <br>Lavoratori",
      description: "Supporto per garantire che i tuoi diritti di lavoratore siano rispettati sul posto di lavoro.",
    },
    {
      title: "Cultura Aziendale <br>& Adattamento",
      description: "Ottieni consigli su come adattarti e prosperare nella cultura aziendale.",
    },
    {
      title: "Abbinamento al <br>Mentoring",
      description: "Ti aiutiamo a connetterti con mentori nel tuo settore per crescita e sviluppo.",
    },
    {
      title: "Benessere sul Lavoro <br>& Supporto Mentale",
      description: "Sviluppa strategie per migliorare il benessere mentale e creare un ambiente lavorativo più sano.",
    },
  ];
  
  const [expertiseData, setExpertiseData] = useState(expertiseDataEn);

  useEffect(() => {

    if(locale == 'de'){
      setExpertiseData(expertiseDataDe);
    } else if(locale == 'it'){
      setExpertiseData(expertiseDataIt);
    } else {
      setExpertiseData(expertiseDataEn)
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
    <section className="hr-expertise">
      <div className="_container">
        <div className="hr-expertise__top">
          <h2 className="fadeInUp" dangerouslySetInnerHTML={{ __html: t("HrExpertise.title") }} />
          <p className="fadeInUp" dangerouslySetInnerHTML={{ __html: t("HrExpertise.text") }} />
        </div>
        {isMobile ? (
          <>
            <Swiper
              ref={swiperRef} // Attach ref to Swiper component
              spaceBetween={20}
              slidesPerView={1}
              className="hr-expertise__swiper"
            >
              {chunkedData.map((chunk, index) => (
                <SwiperSlide key={index}>
                  <div className="hr-expertise__slide">
                    {chunk.map((item, subIndex) => (
                      <div
                        className="hr-expertise__item fadeInUp"
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
          <div className="hr-expertise__body">
            {expertiseData.map((item, index) => (
              <div className="hr-expertise__item fadeInUp" key={index}>
                <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}
        <div className="buttons-wrap">
          <OrderButton
            packageItem={t("HrExpertise.service")}
            text={t("HrExpertise.button")}
          />
        </div>
      </div>
    </section>
  );
};

export default HrExpertise;
