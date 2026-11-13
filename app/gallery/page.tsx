import React from "react";
import Hero from "../components/landing page/gallery/Hero";
import AlbumSection from "../components/landing page/gallery/Album";
import ShareSection from "../components/landing page/gallery/Share";
import { Navbar } from "../components/shared/Navbar";

function GalleryPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AlbumSection />
      <ShareSection />
    </>
  );
}

export default GalleryPage;
