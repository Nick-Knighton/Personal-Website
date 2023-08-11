import React from "react";

export default function ResumeSection() {
    return (
        <section className="grid place-content-center min-h-screen" id="resume-section">
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1>Resume</h1>
            <div className="mt-4" style={{ width: "80vw"}}>
              <iframe src="/Resume.pdf" width="100%" height="1200px" frameBorder="0" className="pdf-toolbar" ></iframe>
            </div>
          </div>
        </div>
      </section>
    )
}