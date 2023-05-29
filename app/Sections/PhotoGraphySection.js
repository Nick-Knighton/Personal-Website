"use client"; // This is a client component

import React, { useState } from "react";
import 'flowbite'

const PhotographySection = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedCameras, setSelectedCameras] = useState([]);

  const handleCountryChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedCountries(selectedOptions);
  };

  const handleCameraChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedCameras(selectedOptions);
  };

  const photos = [
    { id: 1, src: "photo1.jpg", tags: ["nature", "landscape"], country: "USA", camera: "Canon" },
    { id: 2, src: "photo2.jpg", tags: ["nature", "animals"], country: "Canada", camera: "Nikon" },
    { id: 3, src: "photo3.jpg", tags: ["architecture"], country: "France", camera: "Sony" },
    // Add more photo objects with their respective tags, country, and camera
  ];

  const filteredPhotos = photos.filter((photo) => {
    const matchesCountries = selectedCountries.length === 0 || selectedCountries.includes(photo.country);
    const matchesCameras = selectedCameras.length === 0 || selectedCameras.includes(photo.camera);
    return matchesCountries && matchesCameras;
  });

  return (
      <section className="grid place-content-center min-h-screen" id="photography-section">

        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1>Photography</h1>
                    
                    {/* Dropdown  menu for Country */}
                    <button id="dropdownCountry" data-dropdown-toggle="Country"
                        class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        type="button">
                        Filter by Country
                        <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>

                    <div id="Country" class="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                        <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                        Country:
                        </h6>

                        {/* Drop Down Menu Elements*/}
                        <ul class="space-y-2 text-sm" aria-labelledby="dropdownCountry">
                            {/* Selections */}
                            <li class="flex items-center">
                                <input id="apple" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                USA(??)
                                </label>
                            </li>

                            <li class="flex items-center">
                                <input id="apple" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                Apple (??)
                                </label>
                            </li>
                        </ul>
                    </div>



                    {/* Dropdown menu for selecting cameras */}
                    <button id="dropdownCamera" data-dropdown-toggle="Camera"
                                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                type="button">
                                Filter by Camera
                                <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                    </button>

                    <div id="Camera" class="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                        <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                        Camera:
                        </h6>

                        {/* Drop Down Menu Elements*/}
                        <ul class="space-y-2 text-sm" aria-labelledby="dropdownCamera">
                            {/* Selections */}
                            <li class="flex items-center">
                                <input id="Sony A7iii" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                Sony A7iii(??)
                                </label>
                            </li>

                            <li class="flex items-center">
                                <input id="GoPro Max" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                GoPro Max (??)
                                </label>
                            </li>

                            <li class="flex items-center">
                                <input id="Insta 360 ONER" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                Insta 360 ONER(??)
                                </label>
                            </li>
                        </ul>
                    </div>
            

                {/* Display filtered photos */}
                <div className="photo-gallery">
                    {filteredPhotos.map((photo) => (
                    <img
                        key={photo.id}
                        src={photo.src}
                        alt={`Photo ${photo.id}`}
                        className="photo-item"
                    />
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default PhotographySection;
