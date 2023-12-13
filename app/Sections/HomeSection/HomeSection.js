"use client"; // This is a client component
import React, {useEffect} from "react";
import Typed from 'typed.js';

import "../HomeSection/style.css";
// import "../../../public/Resume.pdf"

const HomeSection = () => {
    useEffect(() => {
        const typingEffect = new Typed(".typedText", {
            strings: ["Designer", "Youtuber", "Developer"],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 2000
        });

        return () => {
            typingEffect.destroy();
        };
    }, []); 

    return (
        <section className="h-screen flex items-center" id="type-writer-section">
            <head>
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" integrity="..."/>
            </head>
            <div className="flex items-center sm:flex-row flex-col-reverse bg-white rounded-lg sm:mx-auto mx-4 overflow-hidden">
                <div className="featured-text py-4 pl-8 bg-white ">
                    <div className="featured-text-card">
                        <span>Nick Knighton</span>
                    </div>
                    <div className="featured-name">
                        <p>I'm a <span className="typedText"></span></p>
                    </div>
                    <div className="featured-text-info">
                        <p>Experienced frontend developer with a passion for creating visually stunning
                            and user-friendly websites.
                        </p>
                    </div>
                    <div className="featured-text-btn">
                        <a href="Resume.pdf" download>
                            <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
                        </a>
                    </div>
                    <div className="social_icons">
                        <div className="icon"> <a href="https://www.instagram.com/nickmknighton/"> <i className="uil uil-instagram"></i></a></div>
                        <div className="icon"> <a href="https://www.youtube.com/@nickmknighton"> <i className="uil uil-youtube"></i></a></div>
                        <div className="icon"> <a href="https://www.tiktok.com/@nickmknighton"> <i className="fa-brands fa-tiktok"></i></a></div>
                        <div className="icon"> <a href="https://www.linkedin.com/in/nicholas-knighton-a3491821b/"> <i className="uil uil-linkedin-alt"></i></a></div>
                        <div className="icon"> <a href="https://github.com/Nick-Knighton"> <i className="uil uil-github-alt"></i> </a> </div>
                    </div>
                </div>
                <div className="featured-image">
                    <div className="image">
                        <img src="/headshot.png" alt="avatar"/>
                    </div>
                </div>
            </div>
                
        </section>
  );
};

export default HomeSection;
