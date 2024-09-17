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
  return (
    <>
      <HomeHero />
      <HomeSecond />
      <HomeWhy />
      <HomeStand />
      <HomeSolutionBlack />
      <HomeSolutionWhite />
      <HomeReviews />
      <HomeResources />
      <HomeRequest />
    </>
  );
}
