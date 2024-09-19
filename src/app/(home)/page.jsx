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

export default function Home() {
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

  return (
    <>
      <HomeHero />
      <HomeSecond />
      <HomeWhy />
      <HomeStand />
      <HomeSolutionBlack />
      <HomeSolutionWhite />
      <HomeReviews reviews={reviews} />
      <HomeResources />
      <HomeRequest />
    </>
  );
}
