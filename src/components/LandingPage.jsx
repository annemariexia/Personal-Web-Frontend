import "../styles/LandingPage.css"
import Arrow from "../assets/arrow-down.svg"
import Photo from "../assets/head-shot.jpeg"
import React, { useState, useEffect } from 'react';


const LandingPage = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;  // number of pixels measured from vertical scroll

            setIsScrolled(scrollTop > lastScrollTop);
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop])

    return (
        <div className={`landing-page ${isScrolled ? 'blur' : ''}`}>
            <div className="photo">
                <img src={Photo} className="photo"/>
            </div>
            <div className="text">
                <h1 className="slide-in">"Hi, I'm Annemarie."</h1>
                <h3 className="typed-out">I'm a fullstack developer, climber, and coffee connoisseur.</h3>
            </div>
            <div className="arrow">
                <img src={Arrow} alt="Arrow" className="arrow-icon" />
            </div>
        </div>
    )
}

export default LandingPage;