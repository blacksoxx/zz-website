import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';
import WaveSurfer from 'wavesurfer.js';

const Home: React.FC = () => {
  // Refs for each waveform container
  const waveformRef1 = useRef<HTMLDivElement>(null!);
  const waveformRef2 = useRef<HTMLDivElement>(null!);
  const waveformRef3 = useRef<HTMLDivElement>(null!);

  // Wavesurfer instances for each card (using RefObject)
  const wavesurferRef1 = useRef<WaveSurfer | null>(null);
  const wavesurferRef2 = useRef<WaveSurfer | null>(null);
  const wavesurferRef3 = useRef<WaveSurfer | null>(null);

  // Playback states for each card
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);

  // Reference to the currently playing WaveSurfer instance
  const currentPlayingRef = useRef<WaveSurfer | null>(null); 

  // Safe Destroy Utility Function
  const safeDestroyWaveSurfer = (instance: WaveSurfer | null) => {
    if (!instance) return;
    try {
      instance.pause();
      instance.unAll(); // Remove all event listeners
      instance.destroy();
    } catch (error) {
      console.warn('WaveSurfer cleanup error:', error);
    }
  };

  const initializeWavesurfer = (
    waveformRef: React.RefObject<HTMLDivElement>,
    wavesurferRef: React.RefObject<WaveSurfer | null>,
    audioSrc: string,
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (!waveformRef.current) return;
  
    // Clean up any existing instance
    safeDestroyWaveSurfer(wavesurferRef.current);
    wavesurferRef.current = null;
  
    // Create new WaveSurfer instance
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#DAC5A7',
      progressColor: '#fff',
      height: 30,
      barWidth: 2,
      barGap: 2,
    });
  
    // Load audio
    wavesurfer.load(audioSrc);
  
    // Event handlers
    const playHandler = () => {
      setIsPlaying(true);
      if (currentPlayingRef.current && currentPlayingRef.current !== wavesurfer) {
        currentPlayingRef.current.pause();
      }
      currentPlayingRef.current = wavesurfer;
    };
  
    const pauseHandler = () => {
      setIsPlaying(false);
      if (currentPlayingRef.current === wavesurfer) {
        currentPlayingRef.current = null;
      }
    };
  
    wavesurfer.on('play', playHandler);
    wavesurfer.on('pause', pauseHandler);
    wavesurfer.on('error', (error) => console.error('WaveSurfer error:', error));
  
    // Store instance in ref
    wavesurferRef.current = wavesurfer;
  
    // Return cleanup function
    return () => {
      safeDestroyWaveSurfer(wavesurfer);
      wavesurfer.un('play', playHandler);
      wavesurfer.un('pause', pauseHandler);
    };
  };

  // Dynamic Header Blur Effect
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header-container') as HTMLElement;
      if (header) {
        const scrollPosition = window.scrollY;
        header.style.backdropFilter = `blur(${Math.min(scrollPosition / 5, 10)}px)`; // Max blur of 10px
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup
    };
  }, []);

  // Initialize Wavesurfer for each card
  // Update your useEffect for WaveSurfer initialization like this:
  useEffect(() => {
    const cleanups = [
      initializeWavesurfer(waveformRef1, wavesurferRef1, '/sound.wav', setIsPlaying1),
      initializeWavesurfer(waveformRef2, wavesurferRef2, '/sound.wav', setIsPlaying2),
      initializeWavesurfer(waveformRef3, wavesurferRef3, '/sound.wav', setIsPlaying3),
    ].filter(Boolean) as (() => void)[];
  
    return () => {
      cleanups.forEach(cleanup => cleanup());
      currentPlayingRef.current = null;
    };
  }, []);
  // Toggle play/pause for each card
  const togglePlayback = (
    wavesurferRef: React.RefObject<WaveSurfer | null>,
    isPlaying: boolean,
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      if (wavesurferRef.current) {
        wavesurferRef.current.playPause(); // Use playPause() instead of separate play/pause
        setIsPlaying(!isPlaying);
      }
    } catch (error) {
      console.error('Playback error:', error);
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: "url('/background.jpg')", // Path relative to the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
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
          {/* Detail Card for Baba Ameur */}
          <div className="detail-card">
            <h3>Baba Ameur</h3>
            <p>
              Visually stunning web designs that captivate your audience by blending your brand voice
              and customer needs.
            </p>
            {/* Audio Player */}
            <div className="audio-player">
              <button
                onClick={() => togglePlayback(wavesurferRef1, isPlaying1, setIsPlaying1)}
              >
                {isPlaying1 ? (
                  <i className="material-icons">pause_circle_filled</i>
                ) : (
                  <i className="material-icons">play_circle_filled</i>
                )}
              </button>
              <div className="sound-wave" ref={waveformRef1}></div> {/* Waveform container */}
            </div>
            <button className="about-button">About Baba Ameur</button>
          </div>

          {/* Repeat for other cards */}
          <div className="detail-card">
            <h3>Orion</h3>
            <p>
              Get custom web development solutions that are tailored to your specifications, designed
              to deliver a flawless user experience.
            </p>
            {/* Audio Player */}
            <div className="audio-player">
              <button
                onClick={() => togglePlayback(wavesurferRef2, isPlaying2, setIsPlaying2)}
              >
                {isPlaying2 ? (
                  <i className="material-icons">pause_circle_filled</i>
                ) : (
                  <i className="material-icons">play_circle_filled</i>
                )}
              </button>
              <div className="sound-wave" ref={waveformRef2}></div> {/* Waveform container */}
            </div>
            <button className="about-button">About Orion</button>
          </div>
          
          <div className="detail-card">
            <h3>Tunisian Rhapsody</h3>
            <p>
              Proven SEO strategies that enhance your online performance, bringing you to the forefront
              of organic search results.
            </p>
            {/* Audio Player */}
            <div className="audio-player">
              <button
                onClick={() => togglePlayback(wavesurferRef3, isPlaying3, setIsPlaying3)}
              >
                {isPlaying3 ? (
                  <i className="material-icons">pause_circle_filled</i>
                ) : (
                  <i className="material-icons">play_circle_filled</i>
                )}
              </button>
              <div className="sound-wave" ref={waveformRef3}></div> {/* Waveform container */}
            </div>
            <button className="about-button">About Tunisian Rhapsody</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;