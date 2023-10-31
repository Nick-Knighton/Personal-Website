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
            <div className="flex items-center bg-white rounded-lg mx-auto overflow-hidden">
                <div className="featured-text py-4 pl-8 bg-white">
                    <div class="featured-text-card">
                        <span>Nick Knighton</span>
                    </div>
                    <div class="featured-name">
                        <p>I'm a <span class="typedText"></span></p>
                    </div>
                    <div class="featured-text-info">
                        <p>Experienced frontend developer with a passion for creating visually stunning
                            and user-friendly websites.
                        </p>
                    </div>
                    <div class="featured-text-btn">
                        <a href="Resume.pdf" download>
                            <button class="btn">Download CV <i class="uil uil-file-alt"></i></button>
                        </a>
                    </div>
                    <div class="social_icons">
                        <div class="icon"> <a href="https://www.instagram.com/nickmknighton/"> <i class="uil uil-instagram"></i></a></div>
                        <div class="icon"> <a href="https://www.youtube.com/@nickmknighton"> <i class="uil uil-youtube"></i></a></div>
                        <div class="icon"> <a href="https://www.tiktok.com/@nickmknighton"> <i class="fa-brands fa-tiktok"></i></a></div>
                        <div class="icon"> <a href="https://www.linkedin.com/in/nicholas-knighton-a3491821b/"> <i class="uil uil-linkedin-alt"></i></a></div>
                        <div class="icon"> <a href="https://github.com/Nick-Knighton"> <i class="uil uil-github-alt"></i> </a> </div>
                    </div>
                </div>
                <div class="featured-image">
                    <div class="image">
                        <img src="/Photos/headshot.png" alt="avatar"/>
                    </div>
                </div>
            </div>
                
        </section>
  );
};

export default HomeSection;
