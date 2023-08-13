import { Carousel } from "flowbite-react";
import React from "react";
import styles from "./carousel-button.css";
import '../Portfolio/grid.css'


const ProjectCard = ({project}) => {
    return (
        <div class="bg-white projectWidth rounded-lg">
            
            <h2 class="text-gray-700 text-center font-bold m-6">
                {project.title}
            </h2>   

            <Carousel slide={false} className="dark mx-auto w-full">
                {project.images.map((image) => (
                <img
                    src={image.src}
                    alt={`Image ${image.id}`}
                    className="rounded-lg w-3/4 object-contain h-1/2"
                />
                ))}
            </Carousel>
            
            {/* <div class="flex flex-wrap justify-center items-center">
                {project.technology.map((tech, index) => (
                    <span className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 mt-2">
                {tech}
                </span>
            ))}
            </div> */}
        </div>
    )
}

export default ProjectCard;