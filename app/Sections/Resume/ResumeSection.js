import React from "react";

export default function ResumeSection() {
    return (
      <section className="w-full h-screen flex flex-col " id="resume-section">
        <div className="flex items-center justify-center h-full">
            <div className="my-8 w-4/5 h-3/4 bg-black">
              <iframe src="/Resume.pdf" frameBorder="0" className="pdf-toolbar h-full w-full" ></iframe>
            </div>
          </div>
      </section>
    )
}