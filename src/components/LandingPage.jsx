import "../styles/LandingPage.css"
import Arrow from "../assets/arrow-down.svg"

import Photo from "../assets/head-shot.jpeg"

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="photo">
                <img src={Photo} className="photo"/>
            </div>
            <div className="text">
                <h1 className="slide-in">Hi, I'm Annemarie.</h1>
                <h3 className="typed-out">I'm a fullstack developer, climber, and coffee connoisseur.</h3>
            </div>
            {/* <div className="icon-box">
                <a href="https://www.linkedin.com/in/annemarie-x-xia/"><img src={Linkedin} alt="Linkedin" className="linkedin-icon" /></a>
                <a href="https://www.instagram.com/anne_climbs/"><img src={Instagram} alt="Instagram" className="instagram-icon" /></a>
                <a href="https://github.com/annemariexia"><img src={Github} alt="Github" className="github-icon" /></a>
            </div> */}
            <div className="arrow">
                <img src={Arrow} alt="Arrow" className="arrow-icon" />
            </div>
        </div>
    )
}

export default LandingPage;