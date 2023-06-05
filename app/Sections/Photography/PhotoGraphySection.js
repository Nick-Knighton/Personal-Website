"use client"; // This is a client component

import React, { useState } from "react";
import DropdownMenu from "@/app/Shared/Dropdown-Menu.component";
import DropdownSearchMenu from "@/app/Shared/Dropdown-Search.component";

const PhotographySection = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedCameras, setSelectedCameras] = useState([]);

  const photos = [
    { id: 1, src: "photo1.jpg", country: "USA", camera: "Sony A7iii" },
    { id: 2, src: "photo2.jpg", country: "Canada", camera: "Sony A7iii" },
    { id: 3, src: "photo3.jpg", country: "France", camera: "Sony A7iii" },
    { id: 4, src: "photo4.jpg", country: "USA", camera: "Sony A7iii" },
    { id: 5, src: "photo5.jpg", country: "Canada", camera: "GoPro Max" },
    { id: 6, src: "photo6.jpg", country: "France", camera: "Insta360 ONER" },
  ];

  const countryList = ['USA', 'France', 'Canada'];
  const cameraList = ['Sony A7iii', 'GoPro Max', 'Insta360 ONER'];
  
  

  const filteredPhotos =
  selectedCountries.length === 0 || selectedCameras.length === 0
    ? [] // Return all photos if no filters are applied
    : photos.filter((photo) => {
        const matchesCountries = selectedCountries.length === 0 || selectedCountries.includes(photo.country);
        const matchesCameras = selectedCameras.length === 0 || selectedCameras.includes(photo.camera);
        return matchesCountries && matchesCameras;
      });



  return (
    <section className="grid place-content-center min-h-screen" id="photography-section">
      <div className="flex flex-col justify-center h-screen">
        <div className="text-center">
          <h1>Photography Section</h1>

          <div className="photo-gallery grid grid-cols-3 gap-4 h-3/4">
            {filteredPhotos.map((photo) => (
              <img
                key={photo.id}
                src={photo.src}
                alt={`Photo ${photo.id}`}
                className="photo-item object-cover w-full h-full rounded-lg"
              />
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <DropdownMenu
              options={countryList}
              dropdownTitle={"Country"}
              setSelectedOptions={setSelectedCountries}
            />

            <DropdownMenu
              options={cameraList}
              dropdownTitle={"Camera"}
              setSelectedOptions={setSelectedCameras}
            />

            <DropdownSearchMenu></DropdownSearchMenu>

            
          </div>
        </div>
      </div>
    </section>

  );
};

export default PhotographySection;