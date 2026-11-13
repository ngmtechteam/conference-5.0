import React from "react";
import Hero from "./components/landing page/home/Hero";
import GrandMentor from "./components/landing page/home/GrandMentor";
import Growth from "./components/landing page/home/Growth";
import Mentors from "./components/landing page/home/Mentors";
import Maps from "./components/landing page/home/Maps";
import Teams from "./components/landing page/home/Teams";
import Stories from "./components/landing page/home/Stories";
import HomeFamily from "./components/landing page/home/HomeFamily";
import Questions from "./components/landing page/home/Questions";
import MentorsTree from "./components/landing page/home/MentorsTree";
import { Navbar } from "./components/landing page/home/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <GrandMentor />
      <Growth />
      <Mentors />
      <Maps />
      <Teams />
      <Stories />
      <HomeFamily />
      <Questions />
      <MentorsTree />
    </>
  );
};

export default HomePage;
