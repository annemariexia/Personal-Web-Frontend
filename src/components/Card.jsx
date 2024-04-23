
import React from "react";

const Card = ({data, isEven}) => {
    console.log(data.imgSrc);
  return (
    <> {isEven ?  <><div className="photo-box">
        <img src={data.imgSrc} alt="grad-photo" className="info-photo" />
      </div>
      <div className="text-box">
        <h3 className="subtitle">
         {data.subtitle}
        </h3>
        <section className="section-text">
          {data.paragraphs.map((paragraph) => {
            return <p>{paragraph}</p>
          })}
        </section>
      </div></> : <>
      <div className="text-box">
        <h3 className="subtitle">
         {data.subtitle}
        </h3>
        <section className="section-text">
          {data.paragraphs.map((paragraph) => {
            return <p>{paragraph}</p>
          })}
        </section>
      </div><div className="photo-box">
        <img src={data.imgSrc} alt="grad-photo" className="info-photo" />
      </div></> }
     
    </>
  );
};

export default Card;
