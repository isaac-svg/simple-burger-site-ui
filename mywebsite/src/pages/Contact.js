import React from "react";
import leftImage from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";
function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ background: `url(${leftImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form method="POST" id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Enter ful name" />
          <input type="text" name="email" placeholder="Enter Email" />
          <label htmlFor="message">Email</label>
          <textarea
            name="message"
            placeholder="Enter message"
            cols="6"
            required="required"
          ></textarea>
          <button> Send message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
