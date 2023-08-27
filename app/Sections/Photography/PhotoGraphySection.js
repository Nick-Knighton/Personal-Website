"use client"; // This is a client component

import React, { useState } from "react";
import DropdownMenu from "@/app/Shared/Dropdown-Menu.component";

const PhotographySection = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedCameras, setSelectedCameras] = useState([]);

  const photos = [
    {
      value: 1,
      src: "/Photos/DSC03617.JPG",
      country: "USA",
      camera: "Sony A7iii",
    },
    {
      value: 2,
      src: "/Photos/DSC03794.JPG",
      country: "Canada",
      camera: "Sony A7iii",
    },
    {
      value: 3,
      src: "/Photos/DSC03823.JPG",
      country: "France",
      camera: "Sony A7iii",
    },
    {
      value: 4,
      src: "/Photos/DSC03869.JPG",
      country: "USA",
      camera: "Sony A7iii",
    },
    {
      value: 5,
      src: "/Photos/DSC04091.JPG",
      country: "Canada",
      camera: "GoPro Max",
    },
    {
      value: 6,
      src: "/Photos/DSC04120.JPG",
      country: "France",
      camera: "Insta360 ONER",
    },
  ];

  const countryList = ["USA", "France", "Canada"];
  const cameraList = ["Sony A7iii", "GoPro Max", "Insta360 ONER"];

  const filteredPhotos =
    selectedCountries.length === 0 || selectedCameras.length === 0
      ? [] // Return all photos if no filters are applied
      : photos.filter((photo) => {
          const matchesCountries =
            selectedCountries.length === 0 ||
            selectedCountries.includes(photo.country);
          const matchesCameras =
            selectedCameras.length === 0 ||
            selectedCameras.includes(photo.camera);
          return matchesCountries && matchesCameras;
        });

  return (
    <section className="w-full h-screen flex flex-col" id="photography-section">
      <div className="mx-32 mt-12 h-full projectContainer rounded-lg">
            {filteredPhotos.map((photo) => (
              <div key={photo.value} className="photo-item flex items-center justify-center rounded-lg" >
                <img
                  src={photo.src}
                  alt={`Photo ${photo.id}`}
                  className="max-w-full max-h-full"
                  style={{ maxWidth: "90%", maxHeight: "80%" }}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <DropdownMenu
              options={countryList}
              dropdownTitle={"Country"}
              setSelectedOptions={setSelectedCountries}
              selectedOptions={selectedCountries}
            />

            <DropdownMenu
              options={cameraList}
              dropdownTitle={"Camera"}
              setSelectedOptions={setSelectedCameras}
              selectedOptions={selectedCameras}
            />
            </div>
      

    </section>
  );
};

export default PhotographySection;
