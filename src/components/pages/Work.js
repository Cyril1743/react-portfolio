import React from "react";
import Project from "../Project.js"

const projectRepo = ["https://github.com/Cyril1743/text-editor", "https://github.com/Cyril1743/tech-blog", 'https://github.com/AmeliaBigler/RepairRadar', 'https://github.com/Cyril1743/note-taker', 'https://github.com/Cyril1743/GPS-Satellite', 'https://github.com/Cyril1743/Weather-Dashboard']

const projectImgs = ["/imgs/text-editor.png", "/imgs/tech-blog.png", "/imgs/repairradar.jpg", "/imgs/note-taker.png", "/imgs/gps-satellite.png", "/imgs/weather-dashboard.png"]

const projectName = ["Text-Editor", "Tech-Blog", "RepairRadar", "Note Taker", "GPS-Satellite", "Weather Dashboard"]

const projectURL = ["https://thawing-hollows-54875.herokuapp.com/", "https://safe-journey-37728.herokuapp.com/", "https://repairradar.herokuapp.com/", "https://fashgp51.herokuapp.com/", "https://cyril1743.github.io/GPS-Satellite/", "https://cyril1743.github.io/weather-dashboard/"]

export default function Work() {
    return (
        <div className="container">
            <div className="row">
                {projectRepo.map((project, index) => {
                    return <Project projectRepo={project} img={projectImgs[index]} projectName={projectName[index]} projectURL={projectURL[index]} key={index} />
                })}
            </div>
        </div>
    )
}