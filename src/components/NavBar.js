import React from "react";
import "../styles/index.css"

export default function NavBar({ page, setPage }) {
    return (
        <ul className="navbar">
            <li className="nav-item">
                <a
                    href="#aboutMe"
                    onClick={() => setPage("AboutMe")}
                    className={page === "AboutMe" ? 'nav-link active' : 'nav-link'}
                >About Me</a>
            </li>
            <li className="nav-item">
                <a
                    href="#portfolio"
                    onClick={() => setPage('Work')}
                    className={page === 'Work' ? 'nav-link active' : 'nav-link'}
                >Portfolio</a>
            </li>
            <li className="nav-item">
                <a
                    href="#resume"
                    onClick={() => setPage('Resume')}
                    className={page === 'Resume' ? 'nav-link active' : 'nav-link'}
                >Resume</a>
            </li>
            <li className="nav-item">
                <a
                    href="#contact"
                    onClick={() => setPage('Contact')}
                    className={page === 'Contact' ? 'nav-link active' : 'nav-link'}
                >Contact</a>    
            </li>
        </ul>
    )
}