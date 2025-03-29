import React, { useEffect } from 'react';
import './About.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

const About: React.FC = () => {
  useEffect(() => {
      const header = document.querySelector('.header-container') as HTMLElement;
      if (header) {
        header.style.backdropFilter = `blur(20px)`; 
      }
    }, []);

  return (
    <div className="about-container">
      <Helmet>
        <title>About | Zied Zouari</title>
      </Helmet>
      <Header />

      {/* Main Content */}
      <main className="about-content">
        <section className="about-section">
          <h2>Your Partner in Bringing Your Web Design Vision to Life</h2>
          <p>
            As a freelance web designer and developer, I bring a unique combination of creativity and technical expertise to every project. With a keen eye for design and a passion for delivering user-friendly web experiences, I work closely with clients to understand their needs and bring their vision to life.
          </p>
          <p>
            My approach is rooted in collaboration and communication, and I take pride in my ability to explain technical concepts in simple terms. Whether I’m developing a new website from scratch or optimizing an existing site for search engines, I always strive for excellence in both form and function. With a dedication to quality and a commitment to staying on top of the latest trends and technologies, I am confident in my ability to deliver exceptional results that exceed my clients’ expectations.
          </p>
          <img src="/altissimo_1_mid.jpg" alt="Profile Image" className="profile-image" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;