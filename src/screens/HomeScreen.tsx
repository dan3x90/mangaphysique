import React from "react";
// import Button from "../components/Button";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
// import Collaboration from "../components/Collaboration";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Manga from "../components/Manga";

export const HomeScreen = () => {
  return (
    <>
      <Hero />
      <Benefits />
      {/* <Collaboration /> */}
      <Services />
      <Pricing />
      <Manga />
    </>
  );
};

export default HomeScreen;
