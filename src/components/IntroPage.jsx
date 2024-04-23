import "../styles/IntroPage.css";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {geojson, infoPageContent} from "../data";
import Card from "./Card";


mapboxgl.accessToken = import.meta.env.VITE_MAPBOXGL_ACCESS_TOKEN;

const IntroPage = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [renderInfo, setRenderInfo] = useState();
  const { evenContent, oddContent } = infoPageContent.reduce((acc, item, index) => {
    if (index % 2 === 0) {
      acc.evenContent.push(item);
    } else {
      acc.oddContent.push(item);
    }
    return acc;
  }, { evenContent: [], oddContent: [] });


  

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
      const marker = new mapboxgl.Marker({ color: "#213547b9" })
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 5, closeButton: false, anchor: "top" }) // add popups
            .setHTML(`<h3>${feature.properties.description}</h3>`)
        )
  
        .addTo(map.current);
  
        marker.getElement().addEventListener("click", () => {        
          setRenderInfo(structuredClone(feature.properties));
        });
      }

  }, [map]);


  console.log(renderInfo);


  return (
    <div className="intro-page">
      <div className="card-1-2 section">
        {evenContent.map((item, index) =>  {return <Card key={index} data={item} isEven={true}/>})}
      </div> 
      <div className="card-2-1 section">
        {oddContent.map((item, index) =>  {return <Card key={index} data={item} isEven={false}/>})}
      </div>
      <div className="card-1-2 section">
        <div ref={mapContainer} className="map-container photo-box" />
        <div className="text-box">
          <h3 className="subtitle">Café Hopping in NYC</h3>
          <p>I love coffee. Exploring coffee shops is my favorite thing to do in the city. Of course I jot down thoughts and write some reviews in my notes. On this map, you'll find some of the top cafés I've discovered so far.</p>
          <section className="education-background">
            {renderInfo && <><h4>{renderInfo.description}</h4>
            <h4>Location: {renderInfo.location}</h4>
            <h4>Vibes: {renderInfo.vibes}</h4>
            <h4>Must try:{renderInfo.recs.map(item => {return <p>{item}</p>})}</h4>

            <p>{renderInfo.text}</p>
        
        </>}
            
          </section>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
