import React, { useState } from "react";
import "../styles/ContactForm.css";
import PopUp from "./PopUp";

const ContactForm = ({ setVisibility }) => {
  const BASE_URL = import.meta.env.VITE_PROD_BACKEND_ENDPOINT;
  const contact_email = import.meta.env.VITE_CONTACT_EMAIL;

  console.log(BASE_URL);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isEmailSent, setIsEmailSent] = useState(undefined);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      // Send formData to backend
      const response = await fetch(`${BASE_URL}/send-email`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      } 

      setIsEmailSent(true);
      console.log(isEmailSent);
  
    } catch (error) {
      setIsEmailSent(false);
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  console.log(isEmailSent);

  return (
    <form class="form__group field" onSubmit={handleSubmit}>
      {isEmailSent === true && (
        <PopUp
          title="Sent successfully!"
          message="Your message has been sent. You'll hear back within 2 business days."
          setIsEmailSent={setIsEmailSent}
        />
      )}
      {isEmailSent === false && (
        <PopUp
          title="Error"
          message={`We can't receive your message. Please try to email us at ${contact_email}`}
          setIsEmailSent={setIsEmailSent}
        />
      )}

      <div className="close-btn-row">
        <button id="close-btn" onClick={setVisibility} type="submit">
          X
        </button>
      </div>

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
      <button id="email-btn" type="submit">
        Send Email
      </button>
    </form>
  );
};

export default ContactForm;
