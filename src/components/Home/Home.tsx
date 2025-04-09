import { Helmet } from "react-helmet";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "./Card";
import { musicData } from "../../constants/music";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [activePlayer, setActivePlayer] = useState<string | null>(null);
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: "url('/background.jpg')"

      }}
    >
      <Helmet>
        <title>Home | Zied Zouari</title>
      </Helmet>
      <Header />
      <main className="main-content">
        <div className="intro-section">
          <h1>Violin Player, Composer and '''</h1>
          <p>Je ne sais pas quoi écrire</p>
        </div>
        <div className="details-section">
          {musicData.map((music, index) => (
            <Card
              key={index}
              {...music}
              activePlayer={activePlayer}
              setActivePlayer={setActivePlayer}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
