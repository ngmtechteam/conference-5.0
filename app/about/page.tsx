import Hero from "../components/landing page/about/Hero";
import NGMSpeakers from "../components/landing page/about/NGMSpeakers";
import PeopleGraph from "../components/landing page/about/PeopleGraph";
import Mission from "../components/landing page/about/Mission";
import Values from "../components/landing page/about/Values";
import NGMRunning from "../components/landing page/about/NGMRunning";
import Trustees from "../components/landing page/about/Trustees";
import Partners from "../components/landing page/about/Partners";
import PreFooter from "../components/landing page/about/PreFooter";
import { Navbar } from "../components/shared/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <NGMSpeakers />
      <PeopleGraph />
      <Mission />
      <Values />
      <NGMRunning />
      <Trustees />
      <Partners />
      <PreFooter />
    </>
  );
}
