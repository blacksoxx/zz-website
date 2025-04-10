import { Helmet } from "react-helmet";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { musicData } from "../../constants/music";
import "./Home.css";
import { useState } from "react";
import MusicPlayer from "./MusicPlayer";

interface MusicCard {
  id: string;
  title: string;
  description: string;
  soundPath: string;
  about: string;
  link: string;
}

const Home = () => {
  const [activePlayer, setActivePlayer] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<MusicCard | null>(null);
  return (
    <>
      <div
        className="home-container"
        style={{
          backgroundImage: "url('/background.jpg')",
        }}
      >
        <Helmet>
          <title>Home | Zied Zouari</title>
        </Helmet>
        <Header />
        <main className="main-content">
          <div className="intro-section">
            <h1>Violoniste, Compositeur et Décorateur du silence</h1>
          </div>
          <div className="details-section">
            {musicData.map((music, index) => (
              <div
                className="detail-card"
                key={"music: " + index}
                
              >
                <h3>{music.title}</h3>
                {/* Audio Player */}
                <MusicPlayer
                  soundPath={music.soundPath}
                  isActive={activePlayer === music.id}
                  onPlay={() => setActivePlayer(music.id)}
                  onPause={() => setActivePlayer(null)}
                />
                <button className="about-button" onClick={() => setSelectedCard(music)}>{music.about}</button>
              </div>
            ))}
          </div>
          {selectedCard && (
            <div
              className="modal-overlay"
              onClick={() => setSelectedCard(null)}
            >
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="close-modal"
                  onClick={() => setSelectedCard(null)}
                >
                  ×
                </button>
                <h2>{selectedCard.title}</h2>
                <p>{selectedCard.description}</p>
                <button
                  className="category-tag"
                  onClick={() => window.open(selectedCard.link, "_blank")}
                >
                  Ecouter {selectedCard.title} sur Spotify
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
