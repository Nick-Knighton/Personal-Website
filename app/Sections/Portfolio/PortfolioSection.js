"use client"; // This is a client component

import React, { useState } from "react";
import { projects } from "./projects-constant";

import DropdownMenu from "@/app/Shared/Dropdown-Menu.component";
import ProjectCard from "./project-card";

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
    <section class=" h-screen flex flex-col" id="portfolio-section">
      <div class="mx-32 mt-16 h-full border-8 border-amber-800"></div>

      <div className="mt-16 mb-32 w-screen">
        <DropdownMenu
          className="bg-black"
          options={technologyList}
          dropdownTitle="Technology"
          setSelectedOptions={setSelectedTechnologies}
        />
      </div>
    </section>
  );
};

export default PortfolioSection;

{
  /* {filteredProjects.map((projectIndv) => (
  <ProjectCard project={projectIndv}></ProjectCard>
))} */
}
