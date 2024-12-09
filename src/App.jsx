import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
import { Program } from "./components/program";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      {/* Main navigation and page elements */}
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Program />
      <Services data={landingPageData.Services} />
      <Contact data={landingPageData.Contact} />
    </>
  );
};

export default App;
