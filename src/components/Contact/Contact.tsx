import React, { useEffect } from 'react';
import './Contact.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

const Contact: React.FC = () => {
  useEffect(() => {
      const header = document.querySelector('.header-container') as HTMLElement;
      if (header) {
        header.style.backdropFilter = `blur(20px)`; 
      }
    }, []);

  return (
    <div
      className="contact-container"
      style={{
        backgroundImage: "url('/violin.jpg')", // Path relative to the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Helmet>
        <title>Contact | Zied Zouari</title>
      </Helmet>
      <Header />
      <main className="contact-content">
        <div className="contact-form-section">
          <h2>CONTACT</h2>
          <h1>Let's get in touch</h1>
          <form className="contact-form">
            <input type="text" placeholder="Name" required/>
            <input type="email" placeholder="Email" required/>
            <input type="text" placeholder="Subject" required/>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;