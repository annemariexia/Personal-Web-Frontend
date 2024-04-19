import "../styles/IntroPage.css";
import GradHeadShot from "../assets/grad-photo.jpeg";
import ClimbingPhoto from "../assets/climbing_4.jpg";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOXGL_ACCESS_TOKEN;

const IntroPage = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

 
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-73.98707, 40.72945],
        },
        properties: {
          title: "Mapbox",
          description: "La Cabra",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-73.98923, 40.73895],
        },
        properties: {
          title: "Mapbox",
          description: "Devoción",
        },
      },
    ],
  };


  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-73.993572, 40.729878],
      zoom: 12,
      attributionControl: false,
      dragPan: true,
    });


    for (const feature of geojson.features) {
      new mapboxgl.Marker({ color: '#213547b9'})
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 5 , closeButton: false, anchor: 'top'}) // add popups
            .setHTML(
              `<h3>${feature.properties.description}</h3>`
            )
        )
      
        .addTo(map.current);
    }
  }, []);

  return (
    <div className="intro-page">
      <div className="card-1-2 section">
        <div className="photo-box">
          <img src={GradHeadShot} alt="grad-photo" className="grad-photo" />
        </div>
        <div className="text-box">
          <h3 className="subtitle">
            CS and CS: Harmonizing Technologies and Thoughts
          </h3>
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

      <div className="card-1-2 section">
        <div ref={mapContainer} className="map-container photo-box" />
        <div className="text-box">
          <h3 className="subtitle">A Cup of Comfort: Café Hopping in NYC</h3>
          <section className="education-background">
            <p>Coffee 1</p>
            <p>Coffee 2</p>
            <p>Coffee 3</p>
            <p>Coffee 4</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
