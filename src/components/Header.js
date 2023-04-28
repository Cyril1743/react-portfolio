import React from "react";

export default function Header({page}){
    if ( page === "AboutMe"){
        return <h1>About Me</h1>
    }
    if ( page === "Work"){
        return <h1>Portfolio</h1>
    }
    if (page === "Contact"){
        return <h1>Contact</h1>
    }
    return <h1>Resume</h1>
}