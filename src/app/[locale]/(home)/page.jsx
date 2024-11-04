import Image from "next/image";
import "@/styles/home.scss";
import HomeHero from "./_components/HomeHero";
import HomeSecond from "./_components/HomeSecond";
import HomeWhy from "./_components/HomeWhy";
import HomeStand from "./_components/HomeStand";
import HomeSolutionBlack from "./_components/HomeSolutionBlack";
import HomeSolutionWhite from "./_components/HomeSolutionWhite";
import HomeReviews from "./_components/HomeReviews";
import HomeResources from "./_components/HomeResources";
import HomeRequest from "./_components/HomeRequest";
import { useLocale } from "next-intl";

export default function Home() {
  const locale = useLocale();

  const reviews = [
    {
      name: "Sarah K.",
      title: "Marketing Executive",
      quote:
        "“Quorixia gave me the tools and confidence I needed to take the next step in my career. Their team was with me every step of the way.”",
      link: "#",
    },
    {
      name: "John D.",
      title: "IT Specialist",
      quote:
        "“I never knew HR could be so personalised and effective. Quorixia changed the way I approach my career.”",
      link: "#",
    },
    {
      name: "Emma R.",
      title: "Project Manager",
      quote:
        "“With Quorixia’s help, I secured a new role within weeks. Their approach is truly groundbreaking.”",
      link: "#",
    },
  ];

  // German Reviews
  const reviewsDe = [
    {
      name: "Sarah K.",
      title: "Marketing-Managerin",
      quote:
        "„Quorixia hat mir die Werkzeuge und das Selbstvertrauen gegeben, die ich brauchte, um den nächsten Schritt in meiner Karriere zu machen. Ihr Team war bei jedem Schritt an meiner Seite.“",
      link: "#",
    },
    {
      name: "Johann D.",
      title: "IT-Spezialist",
      quote:
        "„Ich hätte nie gedacht, dass HR so personalisiert und effektiv sein kann. Quorixia hat meine Herangehensweise an meine Karriere verändert.“",
      link: "#",
    },
    {
      name: "Emma R.",
      title: "Projektmanagerin",
      quote:
        "„Mit der Hilfe von Quorixia habe ich innerhalb von Wochen eine neue Position gefunden. Ihr Ansatz ist wirklich bahnbrechend.“",
      link: "#",
    },
  ];

  // Italian Reviews
  const reviewsIT = [
    {
      name: "Sarah K.",
      title: "Responsabile Marketing",
      quote:
        "„Quorixia mi ha fornito gli strumenti e la fiducia di cui avevo bisogno per fare il prossimo passo nella mia carriera. Il loro team è stato con me in ogni fase del percorso.“",
      link: "#",
    },
    {
      name: "Giovanni D.",
      title: "Specialista IT",
      quote:
        "„Non avrei mai pensato che le risorse umane potessero essere così personalizzate ed efficaci. Quorixia ha cambiato il mio approccio alla carriera.“",
      link: "#",
    },
    {
      name: "Emma R.",
      title: "Project Manager",
      quote:
        "„Con l'aiuto di Quorixia, ho ottenuto un nuovo ruolo in poche settimane. Il loro approccio è davvero innovativo.“",
      link: "#",
    },
  ];

  // English
  const buttonText = "Read More Success Stories";

  // German
  const buttonTextDe = "Weitere Erfolgsgeschichten lesen";

  // Italian
  const buttonTextIt = "Leggi altre storie di successo";

  return (
    <>
      <HomeHero />
      <HomeSecond />
      <HomeWhy />
      <HomeStand />
      <HomeSolutionBlack />
      <HomeSolutionWhite />
      {locale == "en" && (
        <HomeReviews reviews={reviews} buttonText={buttonText} />
      )}
      {locale == "de" && (
        <HomeReviews reviews={reviewsDe} buttonText={buttonTextDe} />
      )}
      {locale == "it" && (
        <HomeReviews reviews={reviewsIT} buttonText={buttonTextIt} />
      )}
      <HomeResources />
      <HomeRequest />
    </>
  );
}
