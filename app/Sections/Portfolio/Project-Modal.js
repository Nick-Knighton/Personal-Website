import React from "react";


import { Modal, Button } from "flowbite-react";
import { Carousel } from "flowbite-react";

const ProjectModal = ({ project, props }) => {


  return (
      <Modal
        dismissible
        show={props.openModal === "default"}
        size={"3xl"}
        position={"center"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header
          theme={{
            close: {
              base: "ml-auto inline-flex items-center rounded-lg p-1.5 text-sm text-gray-00 hover:bg-gray-200 hover:text-gray-900",
              icon: "h-5 w-5 stroke-black",
            },
          }}
        >
          {project.title}
        </Modal.Header>

        <Modal.Body>
          <div className="mx-auto h-64 px-4">
            <Carousel slide={false} data-model-toggle="staticModal" theme={{}}>
              {project.images.map((image) => (
                <img
                  src={image.src}
                  alt={`Image ${image.id}`}
                  className="rounded-lg object-contain h-full"
                  key={image}
                />
              ))}
            </Carousel>
          </div>
          <p className="text-black mt-8">{project.description}</p>
        </Modal.Body>

        <Modal.Footer className="flex flex-wrap justify-center items-center">
          <div className="flex flex-wrap justify-center items-center ">
            {project.technology.map((tech, index) => (
              <span
                className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 mt-2"
                key={index}
              >
                {tech}
              </span>
            ))}
          </div>
        </Modal.Footer>
      </Modal>
  );
};
export default ProjectModal;
