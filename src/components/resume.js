// ResumeViewer.js
import React from 'react';
import './resume.css';
import pdf from "./images/Naman_CV.pdf";
const ResumeViewer = () => {
  return (
    <div className="resume-viewer" id="resume">
        <h2>Resume</h2>
      <a href={pdf} target="_blank"
                    rel="noreferrer"> 
                    View Resume
                </a>
    </div>
  );
};

export default ResumeViewer;
