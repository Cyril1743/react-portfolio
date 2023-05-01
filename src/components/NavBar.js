import React from "react";
import "../styles/index.css"



export default function NavBar({ page, setPage }) {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand nav-colored" href="#about" onClick={() => setPage("AboutMe")}>David Love</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={page === "AboutMe" ? "nav-link active" : "nav-link nav-colored"} href="#about" onClick={() => setPage('AboutMe')} >About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className={page === "Work" ? 'nav-link active' : "nav-link nav-colored"} href="#portfolio" onClick={() => setPage("Work")}>Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className={page === "Contact" ? 'nav-link active' : "nav-link nav-colored"} href="#contact" onClick={() => setPage("Contact")}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className={page === "Resume" ? 'nav-link active' : 'nav-link nav-colored'} href="#resume" onClick={() => setPage("Resume")}>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}