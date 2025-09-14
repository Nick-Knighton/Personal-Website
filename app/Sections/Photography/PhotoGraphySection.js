"use client"; // This is a client component

import React, { useState, useEffect } from "react";
import DropdownMenu from "@/app/Shared/Dropdown-Menu.component";
import { supabase } from '../../../utils/supabaseConnections';

import "../Photography/photography-grid.css";


const PhotographySection = () => {
  const [selectedCountries, setSelectedCountries] = useState(["Guatemala"]); //Options selected for countries
  const [selectedCameras, setSelectedCameras] = useState(["Sony A7III"]); //Options selected for cameras
  const [countryList, setCountryList] = useState(["Guatemala"]); //Unique countries
  const [cameraList, setCameraList] = useState(["Sony A7III"]); //Unique cameras
  const [supabasePhotos, setSupabasePhotos] = useState([]); //Photos that are currently being displayed

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
      } 
      catch (error) {
        console.error("Error fetching Supabase photos:", error.message);
      }
    };
    
    const fetchUniqueEntries = async () => {
      // Fetch unique countries
      const { data: uniqueCountriesData, error: countriesError } = await supabase.from('distinct_country').select();
      
      if (countriesError) {
        console.error('Error fetching unique countries:', countriesError);
      } 
      else {
        const countries = uniqueCountriesData.map(entry => entry.Country);
        setCountryList(countries);
      }

      // Fetch unique cameras
      const { data: uniqueCamerasData, error: camerasError } = await supabase.from('distinct_camera').select();

      if (camerasError) {
        console.error('Error fetching unique cameras:', camerasError);
      } 
      else {
        const cameras = uniqueCamerasData.map(entry => entry.Camera);
        setCameraList(cameras);
      }
    };

    fetchSupabasePhotos();
    fetchUniqueEntries();
  }, [selectedCountries, selectedCameras]);

  

  return (
    <section className="w-full flex-grow flex items-center justify-center flex-col" id="photography-section">
      <div className="mx-4 h-1/2 sm:mx-32 mt-12 photographyProjectContainer rounded-lg">
        {supabasePhotos.map((photo) => (
          <img
            src={photo["Image URL"]} // Use the correct property name for the image URL
            alt={photo["Image URL"]}
            className="image-dimensions"
            key={photo["Image URL"]} // Use a unique identifier for the key
        />
        ))}
      </div>

      <div className="flex justify-center items-center h-1/8">
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
