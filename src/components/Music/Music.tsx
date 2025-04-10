import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";
import "./Music.css";

// Define the Card interface
interface Card {
  id: number;
  title: string;
  artist: string;
  year: number;
  cover: string;
  description: string;
}

// Mock Data for Albums/Singles
const Albums: Card[] = 
[
  {
      "id": 1,
      "title": "Electro Btaihi",
      "artist": "Zied Zouari, Imed Twinlo, Ghassen Fendri",
      "year": 2015,
      "cover": "/66407518_1209162519268818_5167469844685127680_n.jpg",
      "description": "Electro Btaihi est un projet musical lancé par Zied Zouari en 2016, fusionnant les musiques traditionnelles tunisiennes avec des sonorités underground. Réunissant Zied Zouari (violon), Imed Twinlo (beatbox) et Ghassen Fendri (guitare), ce projet a rencontré un grand succès, donnant lieu à de nombreux concerts en Tunisie et à l’international. En 2018, il s’élargit en intégrant des artistes des régions intérieures de Tunisie et divers styles musicaux, tels que le chant berbère, le stambeli, et la musique de l'Atlas. Electro Btaihi redéfinit le patrimoine musical tunisien en le mêlant à des influences électroniques, jazz et carnatiques, créant une passerelle entre traditions et modernité. "
  },
  {
      "id": 2,
      "title": "Maqam Roads",
      "artist": "Zied Zouari, Julien Tekeyan, Abdurrahman Tarikci",
      "year": 2018,
      "cover": "/WhatsApp Image 2025-03-25 à 14.31.50_e68bd1e0.jpg",
      "description": "\"Maqâm Roads\" est un voyage musical initié par Zied Zouari, où violon et alto réinventent les chants ancestraux à travers des rythmes contemporains. Inspiré du maqâm, il fusionne traditions et modernité aux côtés de Julien Tekeyan (batterie, percussions – Arménie) et Abdurrahman Tarikci (basse, saz, chant – Turquie). Ce trio virtuose crée un pont entre Orient et Occident, mêlant improvisation et sonorités hybrides pour une expérience musicale unique "
  },
  {
      "id": 3,
      "title": "Beb Diwan",
      "artist": "Zied Zouari et Ghassen Fendri",
      "year": 2022,
      "cover": "/WhatsApp Image 2025-03-25 à 14.32.39_362e7a26.jpg",
      "description": "Zied Zouari et Ghassen Fendri, deux artistes tunisiens, fusionnent leurs racines dans Beb Diwân, un projet vibrant inspiré de la médina de Sfax, leur ville natale. À travers un mélange audacieux de musique traditionnelle tunisienne, électro et rock, ils réinventent les sonorités de la Hadhra et du stambâli. Entre improvisation et électronique, Beb Diwân célèbre l’africanité de Sfax et remet en lumière un héritage musical ancestral souvent méconnu. "
  },
  {
      "id": 4,
      "title": "Made In Africa",
      "artist": "Zied Zouari",
      "year": 2025,
      "cover": "/COUVERTURE ALBUM MADE IN AFRICA.png",
      "description": "Dans \"Made in Africa\", Zied Zouari nous embarque dans une fusion sonore recréant le pont entre l'Afrique et la Tunisie, son pays natal, appelé autrefois \"Ifriqiya\". A travers son style envoutant, cet album est une réminiscence ancestrale de racines partagées et de rythmes en commun, à l'instar de la Hadhra, une musique tunisienne soufie qui a bercé l'enfance de l'artiste. Zied Zouari s'entoure d'artistes tunisiens aux univers atypiques. Entre chants, cordes et percussions, chaque invité amène une teinte singulière, ancrant l'orginalité et la puissance de ce voyage. une expérience hors des sentiers battus qui boulverse les codes et rend hommage à l'africanité dans une esthétique émancipée et contemporaine."
  }
]

const collaborations: Card[] = [
  {
      "id": 1,
      "title": "Duplessy et les Violons du monde",
      "artist": "Mathias Duplessy",
      "year": 2012,
      "cover": "/WhatsApp Image 2025-01-26 à 13.30.44_6f0d04cd.jpg",
      "description": "À l’international, l'un des projets phares de Zied Zouari est “Duplessy et Les Violons du Monde”, une initiative qui réunit des violonistes issus de diverses traditions musicales pour créer un dialogue interculturel unique. Dans ce projet, Zied Zouari fusionne habilement les sonorités orientales et le jazz, contribuant à enrichir cette rencontre entre le violon occidental, le morin khuur mongol et le sarangi indien. Ce projet incarne une véritable exploration sonore, mettant en valeur la diversité des instruments et des influences à travers une fusion musicale innovante. ",
  },
  {
      "id": 2,
      "title": "Safar",
      "artist": "Imed Alibi",
      "year": 2014,
      "cover": "/WhatsApp Image 2025-04-08 à 00.18.42_0a251a07.jpg",
      "description": "\"\"\"La Thérapie du Voyage\"\" SAFAR, qui signifie \"\"voyage\"\" en arabe, est le premier album solo d’Imed Alibi, sorti en 2014. Une création réalisée avec le violoniste tunisien Zied Zouari et le musicien Stéphane Puech, produite par le guitariste anglais Justin Adams, célèbre pour son travail avec Robert Plant de Led Zeppelin et le groupe de blues saharien Tinariwen. L’album – comme son nom l’indique en arabe – retrace les voyages et les rencontres d’Imed en tant que musicien. Il y a également invité le percussionniste brésilien Zé Luis Nascimento et le chanteur de playback indien Shreekumar Vakkiyil. SAFAR a été bien accueilli et salué par de nombreux médias prestigieux.\" ",
  },
  {
      "id": 3,
      "title": "Kalila Wa Dimna",
      "artist": "Moneim Adwan et Olivier Letellier",
      "year": 2016,
      "cover": "/kalila_0325.webp",
      "description": "Création mondiale de Moneim Adwan, Kalila wa Dimna mêle fable animalière et tragédie humaine, arabe et français, musique orientale et opéra occidental. Inspiré du célèbre Livre de Kalila et Dimna, ce spectacle raconte l’histoire d’une amitié trahie par l’ambition. La mise en scène d’Olivier Letellier rencontre la richesse musicale de Zied Zouari, qui signe une direction musicale audacieuse, entre tradition et modernité. ",

  },
  {
    "id": 4,
    "title": "Three letters from Sarajevo",
    "artist": "Goran Bregovic",
    "year": 2018,
    "cover": "/48379059_1063254833859588_1511545071890071552_n.jpg",
    "description": "Zied Zouari est également invité par l'icône de la musique balkanique Goran Bregović  pour son projet « Three Letters From Sarajevo » . Ce projet prestigieux lui permet de jouer en solo avec des orchetres symphoniques du monde entier, mettant en avant sa musicalité et sa touche artistique distinguée. "
},
{
    "id": 5,
    "title": "Imagine",
    "artist": "Karim Thlibi",
    "year": 2022,
    "cover": "/470215545_1209993954459372_8856853478952187190_n.jpg",
    "description": "Le projet \"Imagine\" du grand compositeur tunisien Karim Thlibi est le premier psychodrame musical du monde arabe. Présenté en Album et Concert, il réunit des artistes de grande envergure tels que Nay Al-Barghouti, Hussein Bin Miloud, Cyrine Harabi, Saber radhouani, Daly Chebil. Zied Zouari y est invité comme soliste pour jouer un rôle principal dans une expérience orchestrale immersive et boulversante qui châmboule tous les codes."
}
];
const grandsEnsembles: Card[] = [
  {
      "id": 1,
      "title": "« Papillon de la Mer »",
      "artist": "Zied Zouari",
      "year": 2021,
      "cover": "/474595061_9130604933642803_7593004587535503372_n.jpg",
      "description": "Le spectacle « Papillon de la Mer » est l’histoire d’un papillon qui aurait fait un voyage imaginaire entre l’archipel de Kerkennah et l'île de Djerba.\nCe rêve, devenu réalité, consiste à inviter les djerbiens dans les territoires Kerkennais via ce papillon de la mer qui n’est autre qu’un artiste voyageur.. Un papillon à deux ailes, l’un pour Kerkennah, l’autre, plus foncé, pour Djerba. Chacun des deux ailes est la continuité de son île. Il porte ses habits, se garnit de ses couleurs. \nSur scène, une vingtaine d’artistes dont la partie Cordes à jardin, est musicalement associée à  Kerkennah quand la partie des cuivres, à cour, se marient aux djerbiens. assurent le spectacle."
  },
  {
      "id": 2,
      "title": "waddouni",
      "artist": "Zied Zouari, Imed Amara",
      "year": 2022,
      "cover": "/473325358_1051430683417295_701468694210806546_n.jpg",
      "description": "Dans un autre registe, Zied Zouari s’associe à Imed Amara pour un spectacle imaginé au  carrefour de la musique et de la danse.\nIl a réuni pour la première fois l'orchestre Symphonique tunisien et la mythique  troupe des arts populaires autour de la thématique du voyage. Une œuvre ancrée dans les couleurs musicales profondes du pays avec l'implication Mezwed, de la zokra ainsi que différents Percussions populaires dans un récit tant nostalgique que festif."
  },
  {
      "id": 3,
      "title": "Rouh El Arab",
      "artist": "",
      "year": 2024,
      "cover": "/485354243_1163527521899412_7900127028119031839_n.jpg",
      "description": "Zied Zouari est également directeur musical de Rouh el Arab, un projet orchestral grandiose qui réunit sur scène 100 artistes de 11 nationalités arabes différentes, organisé à l'occasion de la clôture du festival des radios et télévisions arabes en Juin 2024."
  },
  {
      "id": 4,
      "title": "Journal du générique ",
      "artist": "Zied Zouari",
      "year": 2024,
      "cover": "/Ajouter un sous-titre (2).jpg",
      "description": "Création du générique du journal télévisé\nZied Zouari a composé et enregistré le générique du journal télévisé dans le prestigieux Studio 8 de la Radio Nationale Tunisienne. Ce lieu emblématique, témoin de l’âge d’or de la scène artistique tunisienne, a accueilli les plus grands noms de la musique du pays. Pour cette création, Zied a dirigé un orchestre composé de 40 jeunes musiciens talentueux, réunis autour d’une vision musicale ambitieuse et moderne. Le résultat : un générique fort, identitaire et profondément ancré dans la mémoire sonore tunisienne, mêlant tradition et contemporanéité avec émotion et puissance."
  }
]

const Music: React.FC = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  useEffect(() => {
    const header = document.querySelector(".header-container") as HTMLElement;
    if (header) {
      header.style.backdropFilter = `blur(20px)`;
    }
  }, []);

  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <Helmet>
          <title>Music | Zied Zouari</title>
      </Helmet> 
      <div
        className="music-container"
        style={{
          backgroundImage: "url('/background.jpg')", // Path relative to the public folder
        }}
      >
        <Header />
        <main className="music-content">
          {/* Tabs */}
          <div className="tabs">
            <button
              className={activeTab === "Albums" ? "active-tab" : ""}
              onClick={() => setActiveTab("Albums")}
            >
              Albums
            </button>
            <button
              className={activeTab === "collaborations" ? "active-tab" : ""}
              onClick={() => setActiveTab("collaborations")}
            >
              Collaborations
            </button>
            <button
              className={activeTab === "grandsEnsembles" ? "active-tab" : ""}
              onClick={() => setActiveTab("grandsEnsembles")}
            >
              Grands Ensembles
            </button>
          </div>

          {/* Content */}
          <div className="cards-container">
            {(activeTab === "Albums"
              ? Albums
              : activeTab === "collaborations"
              ? collaborations
              : grandsEnsembles
            ).map((item) => (
              <div
                key={item.id}
                className="horizontal-card"
                onClick={() => handleCardClick(item)}
              >
                <img src={item.cover} alt={item.title} />
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.artist}</p>
                  <p>{item.year}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Full-Screen Modal */}
          {selectedCard && (
            <div className="modal-overlay" onClick={closeModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-modal" onClick={closeModal}>
                  ×
                </button>
                <img src={selectedCard.cover} alt={selectedCard.title} />
                <h2>{selectedCard.title}</h2>
                <p>{selectedCard.artist}</p>
                <p>{selectedCard.year}</p>
                <p>{selectedCard.description}</p>
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Music;