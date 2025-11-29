import React from "react";
import HeroSec from "./HeroSec";
import DownloadSection from "./DownloadSection";
import FeaturedDestination from "./FeaturedDestination";
import Additionalservices from "./Additionalservices";
import FeaturedPatners from "./FeaturedPatners";
import Footer from "./Footer";
import Reviews from "./Reviews";

function HomePage() {
  return (
    <>
      <HeroSec />
      <DownloadSection />
      <FeaturedDestination />
      <Additionalservices />
      <Reviews />
      <FeaturedPatners />
      <Footer />
    </>
  );
}

export default HomePage;
