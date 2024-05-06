import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './footer.css';
const Footer = () => {
  const [name, setName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_zukw9fb', 'template_pkda4up', e.target, 'oxKHmAOljrM2TNsOg').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setName('');
    setEmailId('');
    setMessage('');
  };

  return (
    <footer className="footer" id='footer'>
      <div className="contact-form" id='footer1'>
        <h3>Contact Me</h3>
        <form onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="emailId">Email ID:</label>
          <input
            type="email"
            id="emailId"
            name="emailId"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="send-button">
            Send Email
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;