import WavesurferPlayer from "@wavesurfer/react";
import { useState } from "react";
import WaveSurfer from "wavesurfer.js";
import "./Home.css";

type MusicPlayerProps = {
  soundPath: string;
};

const MusicPlayer = ({ soundPath }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);

  const onReady = (ws: WaveSurfer) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  return (
    <div className="audio-player">
      <button onClick={onPlayPause}>
        <i className="material-icons" style={{ fontSize: "2rem" }}>
          {isPlaying ? "pause_circle_filled" : "play_circle_filled"}
        </i>
      </button>
      <WavesurferPlayer
        height={40}
        width={200}
        waveColor="#DAC5A7"
        barWidth={2}
        barGap={2}
        progressColor={"#fff"}
        url={soundPath}
        onReady={onReady}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default MusicPlayer;
