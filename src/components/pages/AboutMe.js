import React from "react";
import "../../styles/index.css"

const style = {
    backgroundColor: "#192841",
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0
}

export default function AboutMe() {
    return (
        <div style={style}>
            <img className="profile" src="/imgs/Family-144851.jpg" alt="David"></img>
            <p>Experienced Full Stack Developer with a passion for creating high-quality applications that meet business needs. Skilled in UI design, API development, and cloud apps. Collaborative team player who values technical excellence and continuous improvement. Started in Retail over 8 years ago currently pursuing a Full Stack BootCamp Certificate from the University of Kansas.
            </p>
        </div>

    )
}