import MusicPlayer from "./MusicPlayer";
import "./Home.css";

type CardProps = {
  id: string;
  title: string;
  description: string;
  soundPath: string;
  about: string;
  activePlayer: string | null;
  setActivePlayer: (player: string | null) => void;
};

const Card = ({
  id,
  title,
  description,
  soundPath,
  about,
  activePlayer,
  setActivePlayer,
}: CardProps) => {
  return (
    <div className="detail-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Audio Player */}
      <MusicPlayer
        soundPath={soundPath}
        isActive={activePlayer === id}
        onPlay={() => setActivePlayer(id)}
        onPause={() => setActivePlayer(null)}
      />
      <button className="about-button">{about}</button>
    </div>
  );
};

export default Card;
