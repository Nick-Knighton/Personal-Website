"use client";
  import "./page.scss";
  import React from "react";

  //Sections
  import HomeSection from './Sections/HomeSection/HomeSection';
  import PortfolioSection from './Sections/Portfolio/PortfolioSection';
  import PhotographySection from './Sections/Photography/PhotoGraphySection';
  import CountriesVisitedSection from './Sections/CountriesVisited/CountriesVisitedSection';
  import { useState } from 'react';


  export default function Home() {
    const [activeTab, setActiveTab] = useState('Home');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const tabs = [
      { label: 'Home', component: <HomeSection /> },
      { label: 'Portfolio', component: <PortfolioSection /> },
      { label: 'Photography', component: <PhotographySection /> },
      { label: 'Countries Visited', component: <CountriesVisitedSection /> },
    ];

    const handleTabClick = (label) => {
      setActiveTab(label);
      setSidebarOpen(false);
    };

    return (
      <div className="app-container">
        {/* Mobile sidebar button */}
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Open menu"
        >
          <span className="sidebar-toggle-bar"></span>
          <span className="sidebar-toggle-bar"></span>
          <span className="sidebar-toggle-bar"></span>
        </button>

        {/* Desktop header */}
        <div className="header-section">
          {tabs.map(tab => (
            <button
              key={tab.label}
              className={`tab-btn font-semibold transition-colors duration-200 ${activeTab === tab.label ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Mobile sidebar */}
        <div className={`sidebar-menu${sidebarOpen ? ' open' : ''}`}>
          <div className="sidebar-menu-content">
            {tabs.map(tab => (
              <button
                key={tab.label}
                className={`tab-btn sidebar-tab-btn font-semibold ${activeTab === tab.label ? 'active' : ''}`}
                onClick={() => handleTabClick(tab.label)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="content-section">
          {tabs.find(tab => tab.label === activeTab)?.component}
        </div>
      </div>
    );
  }
