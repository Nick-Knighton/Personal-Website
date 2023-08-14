import { Carousel } from "flowbite-react";
import React from "react";
import styles from "./carousel-button.css";
import "../Portfolio/grid.css";
import '../../../public/Project Photos/Personal Website/countries-visited.png'

const ProjectCard = ({ project }) => {
  return (
    <div class="bg-white projectWidth rounded-lg">
      <h1 class="text-gray-700 text-xl text-center font-bold m-6">{project.title}</h1>

      <div className="mx-auto h-3/4 px-4">
        <Carousel slide={false} className="dark">
          {project.images.map((image) => (
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className="rounded-lg object-contain h-64"
            />
          ))}
        </Carousel>
      </div>

      {/* <div class="flex flex-wrap justify-center items-center">
                {project.technology.map((tech, index) => (
                    <span className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 mt-2">
                {tech}
                </span>
            ))}
            </div> */}
    </div>
  );
};

export default ProjectCard;
