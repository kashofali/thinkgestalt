import React from "react";
import TopContainer from "./components/TopContainer/TopContainer"
import HeroSection from "./components/HeroSection/HeroSection"
import CaseStudies from "./components/CaseStudiesSection/CaseStudies"
import CasesSection from "./components/CasesSection/CasesSection"
import ContactUs from "./components/ContactUS/ConatctUs";

export default function App() {
  return (
    <div>
        <TopContainer/>
        <HeroSection/>
        <CaseStudies/>
        <CasesSection/> 
        <ContactUs/>
    </div>
  );
}
