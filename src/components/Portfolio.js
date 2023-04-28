import { useState } from "react";
import AboutMe from "./pages/AboutMe.js";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import NavBar from "./NavBar"

export default function Portfolio() {
    const [page, setPage] = useState("AboutMe")

    const renderPage = () => {
        if (page === "AboutMe"){
            return <AboutMe />
        }
        if (page === "Work"){
            return <Work />
        }
        if (page === "Contact"){
            return <Contact />
        }
        return <Resume />
    }

    return (
        <div>
            <NavBar page={page} setPage={setPage} />
            {renderPage()}
        </div>
    )
}