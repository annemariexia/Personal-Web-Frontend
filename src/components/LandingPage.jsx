import "../styles/LandingPage.css"
import Arrow from "../assets/arrow-down.svg"
import Linkedin from "../assets/linkedin-icon.svg"
import Instagram from "../assets/instagram-icon.svg"
import Github from "../assets/github-icon.svg"

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1 className="text">Hi, I'm Annemarie.</h1>
            <h3 className="typed-out">I'm a fullstack developer, climber, and coffee connoisseur.</h3>
            <div className="icon-box">
                <img src={Linkedin} alt="Linkedin" className="linkedin-icon" />
                <img src={Instagram} alt="Instagram" className="instagram-icon" />
                <img src={Github} alt="Github" className="github-icon" />
            </div>
            <img src={Arrow} alt="Arrow" className="arrow-icon" />
        </div>
    )
}

export default LandingPage;