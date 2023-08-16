import { Carousel } from "flowbite-react";
import React from "react";
import { Modal, Button } from "flowbite-react";
import { useState } from "react";

import "./carousel-button.css";
import "../Portfolio/grid.css";
import "../../../public/Project Photos/Personal Website/countries-visited.png";

const ProjectCard = ({ project }) => {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  return (
    <div class="bg-white projectWidth rounded-lg">
      <h1 class="text-gray-700 text-xl text-center font-bold h-1/6 flex items-center justify-center">
        {project.title}
      </h1>

      <div className="mx-auto h-4/6 px-4">
        <Carousel
          slide={false}
          className="dark"
          data-modeal-toggle="staticModal"
        >
          {project.images.map((image) => (
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className="rounded-lg object-contain h-full"
            />
          ))}
        </Carousel>
      </div>

      
      <Button onClick={() => props.setOpenModal("default")}>
        Toggle modal
      </Button>

      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>{project.title}</Modal.Header>
        <Modal.Body>
          <div className="mx-auto h-64 px-4">
            <Carousel
              slide={false}
              className="dark"
              data-modeal-toggle="staticModal"
            >
              {project.images.map((image) => (
                <img
                  src={image.src}
                  alt={`Image ${image.id}`}
                  className="rounded-lg object-contain h-full"
                />
              ))}
            </Carousel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div class="flex flex-wrap justify-center items-center ">
            {project.technology.map((tech, index) => (
            <span className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 mt-2">
                {tech}
            </span>
        ))}
        </div>
        </Modal.Footer>
      </Modal>
      {/* <div class="flex flex-wrap justify-center items-center ">
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
