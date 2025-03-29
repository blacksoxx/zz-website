import WavesurferPlayer from "@wavesurfer/react";
import { useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import "./Home.css";

type MusicPlayerProps = {
  soundPath: string;
  isActive: boolean;
  onPlay: () => void;
  onPause: () => void;
};

const MusicPlayer = ({
  soundPath,
  isActive,
  onPlay,
  onPause,
}: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);

  const onReady = (ws: WaveSurfer) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const onPlayPause = () => {
    if (!wavesurfer) return;

    if (isActive) {
      wavesurfer.pause();
      onPause();
    } else {
      wavesurfer.play();
      onPlay();
    }
  };

  useEffect(() => {
    if (!wavesurfer) return;

    if (!isActive && wavesurfer.isPlaying()) {
      wavesurfer.pause();
    }
  }, [isActive, wavesurfer]);

  return (
    <div className="audio-player">
      <button onClick={onPlayPause}>
        <i className="material-icons" style={{ fontSize: "2rem" }}>
          {isActive ? "pause_circle_filled" : "play_circle_filled"}
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
        onPlay={onPlay}
        onPause={onPause}
      />
    </div>
  );
};

export default MusicPlayer;
