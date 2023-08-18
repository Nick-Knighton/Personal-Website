import React from "react";
import ProjectModal from "./Project-Modal";

import { Carousel } from "flowbite-react";

import "./carousel-button.css";
import "../Portfolio/grid.css";
import "../../../public/Project Photos/Personal Website/countries-visited.png";

const ProjectCard = ({ project }) => {

  return (
    <div className="bg-white projectWidth rounded-lg">
      <h1 className="text-gray-700 text-xl text-center font-bold h-1/6 flex items-center justify-center">
        {project.title}
      </h1>

      <div className="mx-auto h-4/6 px-4">
        <Carousel
          slide={false}
          className="dark"
          data-model-toggle="staticModal"
        >
          {project.images.map((image) => (
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              key={image}
              className="rounded-lg object-contain h-full"
              />
              ))}
        </Carousel>
      </div>

      <ProjectModal project={project}></ProjectModal>

    </div>
  );
};

export default ProjectCard;
