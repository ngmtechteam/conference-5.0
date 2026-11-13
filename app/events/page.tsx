import React from "react";
import Hero from "../components/landing page/events/Hero";
import Conference from "../components/landing page/events/Conference";
import Events from "../components/landing page/events/Events";
import Session from "../components/landing page/events/Session";
import { Navbar } from "../components/shared/Navbar";

function EventsPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Conference />
      <Events />
      <Session />
    </>
  );
}

export default EventsPage;
