"use client"; // This is a client component

import React, { useState} from "react";
import DropdownMenu from "@/app/Shared/Dropdown-Menu.component";

const PortfolioSection = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of Project 1",
      technology: ["React", "Python", "JavaScript"],
      images: [
        { id: 1, src: "image1.jpg" },
        { id: 2, src: "image2.jpg" },
      ],
      videos: [
        { id: 1, src: "video1.mp4" },
        { id: 2, src: "video2.mp4" },
      ],
    },

    {
      id: 2,
      title: "Project 2",
      description: "Description of Project 2",
      technology: ["Angular", "TypeScript"],
      images: [
        { id: 1, src: "image3.jpg" },
        { id: 2, src: "image4.jpg" },
      ],
      videos: [
        { id: 1, src: "video3.mp4" },
        { id: 2, src: "video4.mp4" },
      ],
    },

    {
      id: 3,
      title: "Project 3",
      description: "Description of Project 3",
      technology: ["C++", "TypeScript"],
      images: [
        { id: 1, src: "image3.jpg" },
        { id: 2, src: "image4.jpg" },
      ],
      videos: [
        { id: 1, src: "video3.mp4" },
        { id: 2, src: "video4.mp4" },
      ],
    },
    // Add more projects as needed
  ];

  // Options to be passed into the dropdown menu
  const technologyList = ['Angular', 'React', 'C++', 'Python', 'JavaScript', 'TypeScript'];
  
  
  

  const filteredProjects =
    selectedTechnologies.length === 0
      ? []
      : projects.filter((project) => project.technology.some((tech) => selectedTechnologies.includes(tech)));

  return (
    <section className="grid place-content-center min-h-screen" id="portfolio-section">
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1>Portfolio Section</h1>

          <div className="grid grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card bg-white p-4 shadow-md rounded-lg">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700">{project.description}</p>

                <div className="grid grid-cols-2 gap-2 mt-4">
                  {project.images.map((image) => (
                    <img
                      key={image.id}
                      src={image.src}
                      alt={`Image ${image.id}`}
                      className="w-full h-auto rounded-lg"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>


          
          <DropdownMenu
            options={technologyList}
            dropdownTitle={"Technology"}
            setSelectedOptions={setSelectedTechnologies}
          />

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;