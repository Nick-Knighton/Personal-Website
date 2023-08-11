import { Carousel } from "flowbite-react";
import React from "react";
import styles from "./carousel-button.css";



const ProjectCard = ({project}) => {
    return (
        <div class="bg-slate-50 p-5 shadow-md rounded-lg flex flex-col justify-between h-full">
            <div class="h-60">

            <Carousel slide={false} className="dark h-full">
                {project.images.map((image) => (
                <img
                    src={image.src}
                    alt={`Image ${image.id}`}
                    className="w-auto h-full rounded-lg object-contain"
                />
                ))}
            </Carousel>

            </div>

            <div class="h-40">
            <h2 class="text-gray-700 text-center m-3 font-bold">
                {project.title}
            </h2>
            <p class="text-gray-700 h-2/3 w-full m-2 overflow-auto">
                {project.description}
            </p>
            </div>

            <div class="h-20 flex flex-wrap justify-center items-center">
            {project.technology.map((tech, index) => (
                <span className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 mt-2">
                {tech}
                </span>
            ))}
            </div>
        </div>
    )
}

export default ProjectCard;