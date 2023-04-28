import React, { useState } from "react";

export default function Project({projectRepo, img, projectName, projectURL}) {
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container">
      <div className="position-relative">
        <h2>{projectName}</h2>
        <img
          src={img}
          alt="Screenshot of Project"
          className={`img-fluid ${isHovered ? "blur-image" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {isHovered && (
          <div className="position-absolute top-50 start-50 translate-middle">
            <a href={projectRepo} className="badge bg-primary"><img src="/imgs/githubLogo.png" alt="Link to Repo" /></a>
            <span className="badge bg-secondary">Symbol 2</span>
          </div>
        )}
      </div>
      <p>Content of MyComponent</p>
    </div>
  );
}