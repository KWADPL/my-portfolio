/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {useState} from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xzzpeogj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message.');
    }
  };


  return (
    <div id="contact">
      <Header />
      <main className="flex justify-center items-center min-h-screen flex-col">
        <div className="vintage-frame mb-12">
          <h1 className="text-4xl font-bold mb-4 text-center">Check my social media!</h1>
          <div id="info" className="mb-8">
            <p>
              <a href="https://www.linkedin.com/in/karolina-wadecka/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                <p>LinkedIn</p>
              </a>
              <a href="https://https://github.com/KWADPL" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                <p>Github</p>
              </a>
            </p>
            <p>
              <a href="mailto:your-wadeckakarolina@gmail.com">
                <FontAwesomeIcon icon={faMailBulk} className="mr-2" />
                <p>E-mail</p>
              </a>
            </p>
            <p>
              <a href="tel:+48668586083">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <p>Phone</p>
              </a>
            </p>
          </div>
        </div>
        <div className="vintage-frame">
        <h2 className="text-2xl font-semibold mb-4 text-center">Get in Touch</h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="name-label">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="email-label">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="message-label">Message:</label>
              <textarea
                id="message"
                name="message"
                className="form-input"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit" className="submit-button">
                Send
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;