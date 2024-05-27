import "../styles/NavBar.css"
import Linkedin from "../assets/linkedin-icon.svg"
import Instagram from "../assets/instagram-icon.svg"
import Github from "../assets/github-icon.svg"
import ContactForm from "./ContactForm"
import { useState } from "react"

const NavBar = () => {
    
    const [isContactFormVisible, setVisibility] = useState(false);
    const handleContactClick = () => {
        setVisibility(prevStatus => !prevStatus);
    }

    const handleHomeClick = () => {
        if (isContactFormVisible) {
            setVisibility(prevStatus => !prevStatus);
        }
        
    }
   
    return( 
        <nav id="menu-bar">
            <div className="icon-box">
                <a href="https://www.linkedin.com/in/annemarie-x-xia/"  target="_blank"><img src={Linkedin} alt="Linkedin" className="linkedin-icon" /></a>
                <a href="https://www.instagram.com/anne_climbs/"  target="_blank"><img src={Instagram} alt="Instagram" className="instagram-icon" /></a>
                <a href="https://github.com/annemariexia"  target="_blank"><img src={Github} alt="Github" className="github-icon" /></a>
            </div>
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                
                <ul id="menu">
                <a href="#"><li onClick={handleHomeClick}>Home</li></a>
                <a><li onClick={handleContactClick}>Contact</li></a>
                </ul>
            </div>

            {isContactFormVisible && <ContactForm setVisibility={handleContactClick} /> }    
        </nav>
    )
    

}

export default NavBar;