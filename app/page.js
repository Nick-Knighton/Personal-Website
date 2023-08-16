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
        <HomeSection/>
        <PortfolioSection/>
        <PhotographySection/>
        <CountriesVisitedSection/>
        <ResumeSection/>
      </div>
    )
  }
