"use client"; // This is a client component
import React from "react";

import WorldMap from "react-svg-worldmap";
import { CountryContext } from "react-svg-worldmap";
import { transparent } from "tailwindcss/colors";

export default function CountriesVisitedSection() {
  const data = [
    //Asia
    { country: "TW", value: "" }, // Vanuatu

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
    { country: "RU", value: "" }, // Vatican City
    
    //North America
    { country: "BS", value: "" }, // Bahamas
    { country: "CA", value: "" }, // Canada
    { country: "JM", value: "" }, // Jamaica
    { country: "MX", value: "" }, // Mexico
    { country: "US", value: "" }, // USA
    

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
    strokeOpacity: 1,
    cursor: "pointer",
  });
  

  return (
    <section
      className="grid place-content-center min-h-screen"
      id="visited-countries-section"
    >
      <div>
        <WorldMap
          tooltipBgColor="rgb(0,0,0,.5)"
          backgroundColor="transparent"
          size="xxl"
          styleFunction={getStyle}
          data={data}
          richInteraction
        />
      </div>
    </section>
  );
}
