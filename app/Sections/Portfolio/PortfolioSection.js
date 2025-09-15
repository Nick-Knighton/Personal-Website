"use client"; // This is a client component
import React, { useState } from "react";
import { projects } from "./Projects-Constant.js";

// Test 
import DropdownMenu from "@/app/Shared/Dropdown-Menu.component";
import ProjectCard from "./Project-Card.js";
import '../Portfolio/portfolio-grid.css'

const PortfolioSection = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const technologyList = [
    "Angular",
    "React",
    "C++",
    "Python",
    "JavaScript",
    "TypeScript"
  ];

  const filteredProjects =
    selectedTechnologies.length === 0
      ? []
      : projects.filter((project) =>
          project.technology.some((tech) => selectedTechnologies.includes(tech))
        );

  return (
    <section className="portfolio-section sm:mt-0 mt-4 w-full flex flex-col" id="portfolio-section">
      <div className="flex-1 flex flex-col projectContainer rounded-lg" style={{minHeight: 0}}>
        {filteredProjects.map((projectIndv) => (
          <ProjectCard project={projectIndv} key={projectIndv.title}></ProjectCard>
        ))}
      </div>

      <div className="flex items-center justify-center mt-4 h-1/8">
        <DropdownMenu
          options={technologyList}
          dropdownTitle="Technology"
          setSelectedOptions={setSelectedTechnologies}
          selectedOptions={selectedTechnologies}
        />
      </div>
    </section>
  );
};

export default PortfolioSection;
