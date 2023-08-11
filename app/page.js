import React from "react";

//Sections
import HomeSection from './Sections/HomeSection/HomeSection';
import PortfolioSection from './Sections/Portfolio/PortfolioSection';
import PhotographySection from './Sections/Photography/PhotoGraphySection';
import CountriesVisitedSection from './Sections/CountriesVisited/CountriesVisitedSection';
import ResumeSection from './Sections/Resume/ResumeSection';


export default function Home() {
  return (
    <div className="flex flex-col">
      
      {/* <section class=" h-screen flex flex-col bg-white" id="portfolio-section">

      </section>
      <section class=" h-screen flex flex-col bg-black" id="portfolio-section">

      </section> */}

      <HomeSection/>
      <PortfolioSection/>
      



      {/* Photography Section */}
      {/* <PhotographySection/> */}

      {/* Countries Visited Section */}
      {/* <CountriesVisitedSection/> */}

      {/* Resume Section */}
      {/* <ResumeSection/> */}
      
    </div>
  )
}
