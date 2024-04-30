import React from "react";
import "../styles/PopUp.css";

function PopUp({ title, message, setIsEmailSent }) {
    const handleCloseModal = () => {
        setIsEmailSent(undefined);
    }
  return (
    <div class="overlay">
        <button id="close" onClick={handleCloseModal}>X</button>
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
