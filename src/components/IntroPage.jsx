import "../styles/IntroPage.css"
import GradHeadShot from "../assets/grad-photo.jpeg"

const IntroPage = () => {
    return (
      <div className="intro">
        <h1 className="intro-title">About Me</h1>
        <img src={GradHeadShot} alt="grad-photo" className="grad-photo" />
      </div>
    );
  }
  
  export default IntroPage;