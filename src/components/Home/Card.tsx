import MusicPlayer from "./MusicPlayer";
import "./Home.css";

type CardProps = {
  title: string;
  description: string;
  soundPath: string;
  about: string;
};

const Card = ({ title, description, soundPath, about }: CardProps) => {
  return (
    <div className="detail-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Audio Player */}
      <MusicPlayer soundPath={soundPath} />
      <button className="about-button">{about}</button>
    </div>
  );
};

export default Card;
