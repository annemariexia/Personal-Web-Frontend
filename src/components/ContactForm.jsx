import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = ({ setVisibility }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      // Send formData to backend
      const response = await fetch("https://us-central1-anne0727.cloudfunctions.net/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      console.log(response.statusText);
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }


  };

  

  return (
    <form class="form__group field" onSubmit={handleSubmit}>
      <div className="close-btn-row"><button id="close-btn" onClick={setVisibility} type="submit">X</button></div>
      
      <div className="row">
        <label for="name" class="form__label">
          Name
        </label>
        <input
          className="form__field"
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="row">
        <label for="email" class="form__label">
          Email
        </label>
        <input
          className="form__field"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="row">
        <label for="message" class="form__label">
          Your Message
        </label>
        <textarea
          className="form__field"
          name="message"
          id="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <div id="textarea"></div>
      </div>
      <button id="email-btn" type="submit">Send Email</button>
    </form>
    
  );
};

export default ContactForm;
