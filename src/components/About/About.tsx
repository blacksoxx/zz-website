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
      <>
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
              L'artiste sculpte le son comme on habille le silence. "Je suis un décorateur du silence", aime-t-il dire, transformant chaque note en une couleur, chaque mélodie en une fresque vibrante. Des scènes mythiques comme le Festival International de Carthage, le Zénith de Paris, l'acropole de Athènes ou l'Albert Hall à Londres vibrent sous son archet, fusionnant les traditions Du monde avec amour et générosité.
              Né en Tunisie en 1983 dans une famille de musiciens, Zied Zouari est également 
Docteur en musique (Sorbonne, 2014), titulaire du DEM en Jazz (2010) et du diplôme CMDL du centre des musiques Didier Lockwood (2013), il joue avec Sylvain Luc, Daniel Mille, Bojan Z, Manu Théron, Thione Seck, Mathias Duplessy..
Il collabore en solo avec des groupes mythiques comme Violins of the World (France) ou encore Goran Bregovic Orchestra (Soliste du dernier album Three Letters From Sarajevo), accompagné d’orchestres symphoniques du monde entier.
Il est également le directeur artistique et de l’Opéra arabe Kalila wa Dimna, création originale du festival d’Aix en Provence (2016) et le compositeur de Mawâl de la terre, pièce de théâtre musical, commande de l’Opéra de Lille (2019).
En 2015, il obtient le prix du “meilleur interprète” au festival des journées musicales de Carthage (JMC) pour la présentation de son concert en solo. Deux ans plus tard, il est appelé par le projet MEDINEA pour intervenir dans les sessions interculturelles en composition collective en méditerranée.
En 2018, il est sollicité par la Camarata de Hamburg (Allemagne) en tant qu’orchestrateur en immersion dans l’œuvre incomplète de Mozart intitulée « Opéra Zaide ».
Si son champ de prédilection est la musique arabo-orientale, Zied s’imprègne intensément du Jazz et des musiques traditionnelles du monde. Il forme aujourd’hui une référence dans le langage violonistique actuel en développant une approche multiculturelle de l’improvisation. 
Ses créations sont multiples. On en cite : Maqâm Roads (Accords Croisés, 2017), BEB DIWÂN (MELIA, 2022), Made in Africa (MELIA 2025), Papillon de la Mer (Musiques des îles en Tunisie, 2018), Waddouni (Musique et Danse, 2022), Rouh el Arab (Spectacle Symphonique Arabe, 2024).. Tas de projets qui sont une invitation au voyage vers un univers atypique d’un violoniste compositeur hors pair.</p>
              <img src="/.jpg" alt="Profile" className="profile-image" />
            </section>
          </main>
        </div>
        <Footer />
      </>
  );
};

export default About;