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
    <div className="about-container" 
    style={{
      backgroundImage: "url('/background.jpg')", // Path relative to the public folder
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}> 
      <Helmet>
        <title>About | Zied Zouari</title>
      </Helmet>
      <Header />
      <main className="about-content">
        <section className="about-section">
          <h2>Zied Zouari, le décorateur du silence</h2>
          <p>
          Zied Zouari est une figure clé de la musique arabo-orientale et une icône incontournable du violon dans le monde.
          L'artiste sculpte le son comme on habille le silence. "Je suis un décorateur du silence", aime-t-il dire, transformant chaque note en une couleur, chaque mélodie en une fresque vibrante. Des scènes mythiques comme le Festival International de Carthage, le Zénith de Paris, l'acropole de Athènes ou l'Albert Hall à Londres vibrent sous son archet, fusionnant les traditions Du monde avec amour et générosité.</p>
          <img src="/altissimo_1_mid.jpg" alt="Profile Image" className="profile-image" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;