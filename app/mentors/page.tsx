import React from "react";
import Hero from "../components/landing page/mentors/Hero";
import AllMentors from "../components/landing page/mentors/AllMentors";
import MentorWithUs from "../components/landing page/mentors/MentorWithUs";
import Trustees from "../components/landing page/mentors/Trustees";
import { Navbar } from "../components/shared/Navbar";

function MentorsPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AllMentors />
      <Trustees />
      <MentorWithUs />
    </>
  );
}

export default MentorsPage;
