"use client"; // This is a client component
import React from "react";

import WorldMap from "react-svg-worldmap";

export default function CountriesVisitedSection() {
  const data = [
    //Asia
    { country: "TW", value: "" }, // Taiwan 
    { country: "IN", value: "" }, // India
    { country: "VN", value: "" }, // Vietnam
    { country: "KH", value: "" }, // Cambodia
    { country: "TH", value: "" }, // Thailand
    { country: "LA", value: "" }, // Laos
    { country: "NP", value: "" }, // Nepal
    { country: "PH", value: "" }, // Philippines
    { country: "JP", value: "" }, // Japan
    { country: "MY", value: "" }, // Malaysia
    { country: "SG", value: "" }, // Singapore
    { country: "ID", value: "" }, // Indonesia


    //Africa
    { country: "EG", value: "" }, // Egypt
    { country: "TZ", value: "" }, // Tanzania
    
    //Europe
    { country: "HR", value: "" }, // Croatia
    { country: "FX", value: "" }, // France
    { country: "de", value: "" }, // Germany
    { country: "GR", value: "" }, // Greece
    { country: "IS", value: "" }, // Iceland
    { country: "IT", value: "" }, // Italy
    { country: "MD", value: "" }, // Moldova
    { country: "ME", value: "" }, // Montenegro
    { country: "UK", value: "" }, // UK
    { country: "VA", value: "" }, // Vatican City
    { country: "RU", value: "" }, // Russia
    { country: "CH", value: "" }, // Switzerland
    
    //North America
    { country: "BS", value: "" }, // Bahamas
    { country: "CA", value: "" }, // Canada
    { country: "JM", value: "" }, // Jamaica
    { country: "MX", value: "" }, // Mexico
    { country: "US", value: "" }, // USA
    { country: "GT", value: "" }, // Guatemala 
    
    //Oceania
    { country: "FJ", value: "" }, // Fiji
    { country: "NC", value: "" }, // New Caledonia
    { country: "VU", value: "" }, // Vanuatu
  ];


  const getStyle = ({
    countryValue,
    countryCode,
    minValue,
    maxValue,
    color,
  }) => ({
    fill: countryValue === '' ? "red" : "gray",
    fillOpacity: countryValue === '' ? '.6' : '.8',
    stroke: "black",
    strokeWidth: 1,
    strokeOpacity: .2,
    cursor: "pointer",
  });
  

  return (
    <section className="sm:w-full h-screen flex items-center justify-center flex-col overflow-hidden" id="visited-countries-section">
      <h1 className="text-white mb-4 sm:mb-0 text-2xl sm:text-4xl font-bold">Countries I have Visited</h1>
        <WorldMap
          tooltipBgColor="rgb(0,0,0,1)"
          backgroundColor=""
          size="xxl"
          styleFunction={getStyle}
          data={data}
          richInteraction
          />
    </section>
  );
}
