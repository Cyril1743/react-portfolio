import React from "react";
import "../styles/index.css"

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <ul className="footer-list d-flex justify-content-center" >
                        <li className="footer-link"><a href="https://github.com/Cyril1743" ><img className="footerImg" src="/imgs/githubLogo.png" alt="Link to Github" /></a></li>
                        <li className="footer-link"><a href="https://www.linkedin.com/in/david-j-love/"><img className="footerImg" src="/imgs/linkedIn.png" alt="Link to LinkedIn" /></a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}