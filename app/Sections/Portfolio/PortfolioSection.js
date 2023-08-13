"use client"; // This is a client component

import React, { useState } from "react";
import { projects } from "./projects-constant";

import DropdownMenu from "@/app/Shared/Dropdown-Menu.component";
import ProjectCard from "./project-card";
import '../Portfolio/grid.css'

const PortfolioSection = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  // Options to be passed into the dropdown menu
  const technologyList = [
    "Angular",
    "React",
    "C++",
    "Python",
    "JavaScript",
    "TypeScript",
  ];

  const filteredProjects =
    selectedTechnologies.length === 0
      ? []
      : projects.filter((project) =>
          project.technology.some((tech) => selectedTechnologies.includes(tech))
        );

  return (
    <section class="w-full h-screen flex flex-col bg-slate-600" id="portfolio-section">
      
      <div class="mx-32 mt-16 h-full projectContainer rounded-lg">
        {filteredProjects.map((projectIndv) => (
          <ProjectCard project={projectIndv}></ProjectCard>
        ))} 
      </div>

      <div className="mt-16 mb-32">
        <DropdownMenu
          options={technologyList}
          dropdownTitle="Technology"
          setSelectedOptions={setSelectedTechnologies}
        />
      </div>
    </section>
  );
};

export default PortfolioSection;
