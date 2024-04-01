import "../styles/IntroPage.css";
import GradHeadShot from "../assets/grad-photo.jpeg";
import ClimbingPhoto from "../assets/climbing_3.jpg";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";


mapboxgl.accessToken = import.meta.env.VITE_MAPBOXGL_ACCESS_TOKEN;

const IntroPage = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);


  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-73.971252, 40.783058],
      zoom: 10,
      attributionControl: false,
    });
  });

  return (
    <div className="intro-page">
      <div className="card-1-2 section">
        <div className="photo-box">
          <img src={GradHeadShot} alt="grad-photo" className="grad-photo" />
        </div>
        <div className="text-box">
          <h3 className="subtitle">CS and CS: Harmonizing Technologies and Thoughts</h3>
          <section className="education-background">
            <p>
              I graduated from UC Davis with a BS in Computer Science and
              Cognitive Science.
            </p>
            <p>
              Delving into the intricacies of the human mind while navigating
              the dynamic world of technology has enabled me to approach
              problems from multiple angles, blending analytical thinking with
              an understanding of human-centered design principles.
            </p>
            <p>
              Upon graduating from college, I recognized the transformative
              potential of machine learning decided to continue my academic
              journey at Columbia University.
            </p>
            <p>
              As a fullstack developer, I am driven to bridge the gap between
              technology and human needs. I believe that by embracing AI
              technologies and understanding user behavior and psychology, I can
              create innovative solutions that positively impact people's lives.
            </p>
          </section>
        </div>
      </div>


      <div className="card-2-1 section">
        <div className="text-box">
          <h3 className="subtitle">
            My Bouldering Journey: Resilience, Adaption, Versatility
          </h3>
          <section className="education-background">
            <p>
              Summer 2023, I fell in love with climbing. As a novice climber, I
              had little knowledge about climbing techniques and often locked
              myself in awkward body positions where it was impossible for me to
              generate the next move. I was scared of falling, which prevented
              me from trying with my full commitment. Yet, with each ascent,
              climbing became a teacher of resilience, pushing me to confront
              fears.{" "}
            </p>
            <p>
              In the climbing world, we read routes before we start. But rarely
              can one make perfect decisions based on incomplete information. A
              lot of times, I have to quickly adapt mid-route, learning to
              re-evaluate my plan and constantly making micro-corrections along
              my way.
            </p>
            <p>
              The art of climbing originates from the versatility of each
              climber’s body. We all have different levels of flexibility,
              heights, or wingspan, which allows for so much variation in
              everyone’s approach. When I’m off the wall resting, I like to
              observe how others send the climbs, reflect on other possibilities
              and refine my own techniques.
            </p>
          </section>
        </div>
        <div className="photo-box">
          <img src={ClimbingPhoto} alt="grad-photo" className="grad-photo" />
        </div>
      </div>

      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default IntroPage;
