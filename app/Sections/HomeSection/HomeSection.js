import React from "react";
import Link from "next/link";
import "./typeWriter.css"

const HomeSection = () => {
    return (
    <section className="h-full w-full flex flex-col" id="type-writer-section">
        <div className='flex-1 flex items-center justify-center'>
                <div className='content-section text-center'>
                    <h1 className='text-6xl font-bold text-text-white'>Hello, I'm</h1>

                    <div className="wrapper">
                        <ul className="dynamic-txts">
                            <li><span>Nick Knighton</span></li>
                            <li><span>a Software Engineer</span></li>
                            <li><span>a Computer Scientist</span></li>
                            <li><span>a World Traveler</span></li>
                            <li><span>a Front End Designer</span></li>
                            <li><span>a Photographer</span></li>
                        </ul>
                    </div>

                    <div className="flex justify-center space-x-6 mt-8">
                    <Link href="#portfolio-section" className="py-2 px-4 border border-transparent rounded-md text-lg font-medium text-text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tertiary">
                        Portfolio
                    </Link>
                    <Link href="#photography-section" className="py-2 px-4 border border-transparent rounded-md text-lg font-medium text-text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tertiary">
                        Photography
                    </Link>
                    <Link href="#visited-countries-section" className="py-2 px-4 border border-transparent rounded-md text-lg font-medium text-text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tertiary">
                        Countries Visited
                    </Link>
                    <Link href="#resume-section" className="py-2 px-4 border border-transparent rounded-md text-lg font-medium text-text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tertiary">
                        Resume
                    </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HomeSection;