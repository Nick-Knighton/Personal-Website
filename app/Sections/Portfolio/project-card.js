import React from "react";
import ProjectModal from "./Project-Modal" ;
import { useState } from "react";

import { Carousel, Button } from "flowbite-react";

import "./carousel-button.css";
import "../Portfolio/grid.css";

const ProjectCard = ({ project }) => {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  return (
    <div className="bg-white projectDimensions rounded-lg">
      <h1 className="text-gray-700 text-xl text-center font-bold flex items-center justify-center" style={{height: "10%"}}>
        {project.title}
      </h1>

      <div className="mx-auto h-3/4 px-4">
        <Carousel
          slide={false}
          data-model-toggle="staticModal"
          theme={{
            root: {
              base: "relative h-full w-full rounded pb-6",
              leftControl:
                "absolute top-0 left-0 flex h-full items-center justify-center px-2 focus:outline-none",
              rightControl:
                "absolute top-0 right-0 flex h-full items-center justify-center px-5 focus:outline-none",
            },
            indicators: {
              active: {
                off: "bg-gray-400 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
                on: "bg-gray-700 dark:bg-gray-800",
              },
              base: "h-3 w-3 rounded-full",
              wrapper:
                "absolute left-1/2 flex -translate-x-1/2 space-x-2 rounded-lg bottom-1",
            },
          }}
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
        
        <div className=" flex justify-center items-center h-1/5" >
          <Button
            onClick={() => props.setOpenModal("default")}
            className="mx-auto"
          >
            Details
          </Button>
        </div>
      </div>

      <ProjectModal project={project} props={props}></ProjectModal>
    </div>
  );
};

export default ProjectCard;
