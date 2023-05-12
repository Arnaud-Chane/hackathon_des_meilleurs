import React from "react";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the form data, such as send it to a server or display it on the page
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            className="input-contact"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            className="input-contact"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            className="input-contact"
            value={message}
            onChange={handleMessageChange}
          />
        </label>
        <br />
        <button className="primary-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
