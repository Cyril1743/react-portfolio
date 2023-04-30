import React from "react";

//Function to make the Resume page
export default function Resume() {
 return (
    <div className="resume">
    <p>Download my <a href="/resume.docx" download='resume.docx'>resume</a></p>
    <h3>Front End Proficiencies</h3>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
        <li>jQuery</li>
        <li>React</li>
        <li>Redux</li>
        <li>GraphQL</li>
        <li>Progress Web Apps</li>
    </ul>
    <h3>Back End Proficiencies</h3>
    <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Socket.IO</li>
    </ul>
    <h3>Other Proficiencies</h3>
    <ul>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Sequelize.js</li>
        <li>Mongoose</li>
        <li>GitHub</li>
        <li>MVC Paradigm</li>
        <li>Handlebars.js</li>
        <li>Nodemailer</li>
        <li>MailGen</li>
    </ul>
    </div>
    )
}