import React from "react";
import "../../styles/index.css"
import profilePicture from "../../imgs/Family-144851.jpg"

const style = {
    backgroundColor: "#535B8D",
    width: '100%',
    height: '100%',
    margin: '10px',
    padding: '10px'
}

const pStyle = {
    width: '200px',
    margin: "auto"
}

export default function AboutMe() {
    return (
        <div style={style}>
            <img className="profile" src={profilePicture} alt="David"></img>
            <p style={pStyle}>Experienced Full Stack Developer with a passion for creating high-quality applications that meet business needs. Skilled in UI design, API development, and cloud apps. Collaborative team player who values technical excellence and continuous improvement. Started in Retail over 9 years ago and currently possessing a Full Stack BootCamp Certificate from the University of Kansas.
            </p>
        </div>

    )
}