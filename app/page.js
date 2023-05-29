import styles from './/CSS/typeWriter.css'
import Link from "next/link";
import React from "react";

//Sections
import HomeSection from './Sections/HomeSection';
import PortfolioSection from './Sections/PortfolioSection';
import PhotographySection from './Sections/PhotoGraphySection';
import CountriesVisitedSection from './Sections/CountriesVisitedSection';
import ResumeSection from './Sections/ResumeSection';


export default function Home() {
  return (
    <div>
      
      {/* Home Section */}
      <HomeSection/>

      {/* Portfolio Section */}
      <PortfolioSection/>

      {/* Photography Section */}
      <PhotographySection/>

      {/* Countries Visited Section */}
      <CountriesVisitedSection/>

      {/* Resume Section */}
      <ResumeSection/>
      
    </div>
  )
}
