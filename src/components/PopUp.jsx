import React from "react";
import "../styles/PopUp.css";

function PopUp({ title, message }) {
  return (
    <div class="overlay">
        <button id="close">X</button>
      <div class="popup">
        <h2>{title}</h2>
        <div class="content">
          {message}
        </div>
      </div>
    </div>
  );
}

export default PopUp;
