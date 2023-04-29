import React, { useState } from "react";

export default function Project({projectRepo, img, projectName, projectURL}) {
  //Use States to store whether the picture is hovered or not
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="col-md-6">
      <h3>{projectName}</h3>
      <div className="position-relative" onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
        
        <img
          src={img}
          alt="Screenshot of Project"
          className={`img-fluid ${isHovered ? "blur-image blur-effect" : "blur-image"}`}
          
        />
        {isHovered && (
          <div className="position-absolute bottom-50 start-0">
            <a href={projectRepo} className="badge" target="_blank" rel="noreferrer"><img className="github-icon" src="/imgs/githubLogo.png" alt="Link to Repo"/></a>
            <a href={projectURL} className="badge" target="_blank" rel="noreferrer"><img className="project-icon" src="/imgs/browser-icon.png" alt="Link to Deployed Application" /></a>
          </div>
        )}
      </div>
    </div>
  );
}