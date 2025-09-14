  "use client";
  import "./page.scss";
  import React from "react";

  //Sections
  import HomeSection from './Sections/HomeSection/HomeSection';
  import PortfolioSection from './Sections/Portfolio/PortfolioSection';
  import PhotographySection from './Sections/Photography/PhotoGraphySection';
  import CountriesVisitedSection from './Sections/CountriesVisited/CountriesVisitedSection';
  import ResumeSection from './Sections/Resume/ResumeSection';
  import { useState } from 'react';


  export default function Home() {
    const [activeTab, setActiveTab] = useState('Home');
    const tabs = [
      { label: 'Home', component: <HomeSection /> },
      { label: 'Portfolio', component: <PortfolioSection /> },
      { label: 'Photography', component: <PhotographySection /> },
      { label: 'Countries Visited', component: <CountriesVisitedSection /> },
      { label: 'Resume', component: <ResumeSection /> },
    ];

    return (
      <div className="app-container">
        <div className="header-section">
          {tabs.map(tab => (
            <button
              key={tab.label}
              className={`px-4 py-2 rounded font-semibold transition-colors duration-200 ${activeTab === tab.label ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-200'}`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="content-section">
          {tabs.find(tab => tab.label === activeTab)?.component}
        </div>
      </div>
    );
  }
