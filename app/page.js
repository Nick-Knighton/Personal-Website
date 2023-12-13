  import React from "react";

  //Sections
  import HomeSection from './Sections/HomeSection/HomeSection';
  import PortfolioSection from './Sections/Portfolio/PortfolioSection';
  import PhotographySection from './Sections/Photography/PhotoGraphySection';
  import CountriesVisitedSection from './Sections/CountriesVisited/CountriesVisitedSection';


  export default function Home() {
    return (
      <div className="flex flex-col bg-primary max-w-screen">
        <HomeSection/>
        <PortfolioSection/>
        <PhotographySection/>
        <CountriesVisitedSection/>
      </div>
    )
  }
