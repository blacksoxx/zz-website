import React, { useEffect } from 'react';
import './Contact.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';
import '@fortawesome/fontawesome-free/css/all.css';

const Contact: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header-container') as HTMLElement;
      if (header) {
        const scrollPosition = window.scrollY;
        header.style.backdropFilter = `blur(${Math.min(scrollPosition / 10, 10)}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
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