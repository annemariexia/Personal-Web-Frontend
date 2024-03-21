import "../styles/NavBar.css"
import Linkedin from "../assets/linkedin-icon.svg"
import Instagram from "../assets/instagram-icon.svg"
import Github from "../assets/github-icon.svg"

const NavBar = () => {
   
    return( 
        <nav id="menu">
            <div className="icon-box">
                <a href="https://www.linkedin.com/in/annemarie-x-xia/"><img src={Linkedin} alt="Linkedin" className="linkedin-icon" /></a>
                <a href="https://www.instagram.com/anne_climbs/"><img src={Instagram} alt="Instagram" className="instagram-icon" /></a>
                <a href="https://github.com/annemariexia"><img src={Github} alt="Github" className="github-icon" /></a>
            </div>
            <div class="menu-item">
                <div class="menu-text">
                    <a href="#">About</a>
                </div>
                <div class="menu-text">
                    <a href="#">Blogs</a>
                </div>
                <div class="menu-text">
                    <a href="#">Contact</a>
                </div>
            </div>
        </nav>
    )
    

}

export default NavBar;