import React from "react";

//Sections
import HomeSection from './Sections/HomeSection/HomeSection';
import PortfolioSection from './Sections/Portfolio/PortfolioSection';
import PhotographySection from './Sections/Photography/PhotoGraphySection';
import CountriesVisitedSection from './Sections/CountriesVisited/CountriesVisitedSection';
import ResumeSection from './Sections/Resume/ResumeSection';


export default function Home() {
  return (
    <div class="w-screen">
      {/* Home Section */}
      <HomeSection/>

      {/* Portfolio Section */}
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
