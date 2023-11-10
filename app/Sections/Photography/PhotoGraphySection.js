"use client"; // This is a client component

import React, { useState, useEffect } from "react";
import DropdownMenu from "@/app/Shared/Dropdown-Menu.component";
import { supabase } from '../../../utils/supabaseConnections';

import "../Photography/photography-grid.css";
import { data } from "autoprefixer";


const PhotographySection = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedCameras, setSelectedCameras] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [cameraList, setCameraList] = useState([]);

  // const countryList = ["Greece"]
  // const cameraList = ["Samsung S8+"];
  

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

  const [supabasePhotos, setSupabasePhotos] = useState([]);

  //Fetch photos from DB
  useEffect(() => {
    const fetchSupabasePhotos = async () => {
      try {
        // Fetch photos from Supabase based on selected countries and cameras
        const { data, error } = await supabase
          .from('images') // Replace 'your_table_name' with your actual table name
          .select('Camera, Country, "Image URL"')
          .in('Country', selectedCountries)
          .in('Camera', selectedCameras);

        if (error) {
          throw error;
        }

        setSupabasePhotos(data || []);
      } catch (error) {
        console.error("Error fetching Supabase photos:", error.message);
      }
    };
    
    const fetchUniqueEntries = async () => {
      // Fetch unique countries
      const { data: uniqueCountriesData, error: countriesError } = await supabase
        .from('distinct_country')
        .select();
      
      if (countriesError) {
        console.error('Error fetching unique countries:', countriesError);
      } else {
        const countries = uniqueCountriesData.map(entry => entry.Country);
        setCountryList(countries);
      }
      console.log(countryList)

      // Fetch unique cameras
      const { data: uniqueCamerasData, error: camerasError } = await supabase
        .from('distinct_camera')
        .select();

      if (camerasError) {
        console.error('Error fetching unique cameras:', camerasError);
      } else {
        const cameras = uniqueCamerasData.map(entry => entry.Camera);
        setCameraList(cameras);
      }

      console.log(cameraList);
    };

    fetchSupabasePhotos();
    fetchUniqueEntries();
  }, [selectedCountries, selectedCameras]);

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
      <div className="mx-32 mt-12 h-full photographyProjectContainer rounded-lg">
        {supabasePhotos.map((photo) => (
          <img
          src={photo["Image URL"]} // Use the correct property name for the image URL
          alt={`Photo ${photo.id}`}
          className="photographyProjectDimensions"
          key={photo["Image URL"]} // Use a unique identifier for the key
        />
        ))}
      </div>

      <div className="flex justify-center items-center h-1/6">
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
