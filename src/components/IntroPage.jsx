import "../styles/IntroPage.css";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { geojson, infoPageContent } from "../data";
import Card from "./Card";
// import functions from "firebase-functions"
// const functions = require("firebase-functions");

console.log("token:", functions.config().env.vite_mapboxgl_access_token);
console.log("to2:", import.meta.env.VITE_MAPBOXGL_ACCESS_TOKEN);
mapboxgl.accessToken = import.meta.env.VITE_MAPBOXGL_ACCESS_TOKEN;
// mapboxgl.accessToken = functions.config().env.vite_mapboxgl_access_token;

const IntroPage = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [renderInfo, setRenderInfo] = useState();
  const { evenContent, oddContent } = infoPageContent.reduce(
    (acc, item, index) => {
      if (index % 2 === 0) {
        acc.evenContent.push(item);
      } else {
        acc.oddContent.push(item);
      }
      return acc;
    },
    { evenContent: [], oddContent: [] }
  );

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
            .setHTML(`<h3>${feature.properties.name}</h3>`)
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
        {evenContent.map((item, index) => {
          return <Card key={index} data={item} isEven={true} />;
        })}
      </div>
      <div className="card-2-1 section">
        {oddContent.map((item, index) => {
          return <Card key={index} data={item} isEven={false} />;
        })}
      </div>
      <div className="card-1-2 section">
        <div ref={mapContainer} className="map-container" />
        <div className="text-box">
          <section className="section-text map-paragraph"> 
            {renderInfo ? (
              <>
              <h4 className="title">{renderInfo.name}</h4>
              <div className="map-content">
                <div className="key-words">
                  <div className="key-item"><h4>Location: </h4><p>{renderInfo.location}</p></div>
                  <div className="key-item"><h4>Vibes: </h4><p>{renderInfo.vibes}</p></div>  
                  <div className="key-item"><h4>Must try: </h4> {renderInfo.recs.map((item, index) => {
                    return <p key={index}>{item}</p>;
                  })}</div>  
                </div>
               
                <p className="map-text">{renderInfo.text}</p>
              </div></>
            ): <> <h3 className="subtitle">Café Hopping in NYC</h3><p>
            I'm on a mission to try out all the coffee shops in the city. My go-to orders? A refreshing cold brew, a perfectly balanced cortado, or a straightforward doppio. If a café offers it, I'll get a a meticulously crafted pourover. I'm not typically a sweetened coffee beverage person, but who can't resist a quirky seasonal drink.
          </p> <p>Check out the pins on the map!</p></>}
          </section>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
