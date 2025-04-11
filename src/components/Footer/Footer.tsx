import React from 'react';
import { useNavigate } from "react-router-dom";
import './Footer.css';

interface FooterProps {
  onMoreTemplatesClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onMoreTemplatesClick = () => { } }) => {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
    // Scroll to the top of the page after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Social Links Section */}
        <div className="footer-section">
          <img src="/logo-transparent.png" alt="Logo" className="footer-logo" />
          <div className="social-links">
            <button className="social-link" onClick={() => window.open("https://instagram.com/ziedzouari1", "_blank")}>
              <span>
                <i className="fab fa-instagram"></i> Instagram
              </span>
            </button>
            <button className="social-link" onClick={() => window.open("https://twitter.com/ZiedZouari5", "_blank")}>
              <span>
                <i className="fab fa-x-twitter"></i> X (Twitter)
              </span>
            </button>
            <button className="social-link" onClick={() => window.open("https://facebook.com/ziedzouarimusic", "_blank")}>
              <span>
                <i className="fab fa-facebook-f"></i> Facebook
              </span>
            </button>
          </div>
        </div>

        {/* Pages Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Pages</h4>
          <div className="social-links">
            <button className="social-link" onClick={() => handleNavigation("/")}>
              <span>
                <i className="fas fa-home"></i> Home
              </span>
            </button>
            <button className="social-link" onClick={() => handleNavigation("/music")}>
              <span>
                <i className="fas fa-music"></i> Musique </span>
            </button>
            <button className="social-link" onClick={() => handleNavigation("/news")}><span>
              <i className="fas fa-newspaper"></i> News</span>
            </button>
            <button className="social-link" onClick={() => handleNavigation("/media")}><span>
              <i className="fas fa-video"></i> Media</span>
            </button>
            <button className="social-link" onClick={() => handleNavigation("/about")}><span>
              <i className="fas fa-info-circle"></i> Zied</span>
            </button>
            <button className="social-link" onClick={() => handleNavigation("/contact")}><span>
              <i className="fas fa-envelope"></i> Contact</span>
            </button>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Music</h4>
          <div className="social-links">
            <button className="social-link" onClick={() => window.open("https://www.youtube.com/@ZiedZouari", "_blank")}><span>
              <i className="fab fa-youtube"></i> Youtube</span>
            </button>
            <button className="social-link" onClick={() => window.open("https://open.spotify.com/intl-fr/artist/5AGvuJH8miMNqLLmgccErZ?si=415885a0bfd64038", "_blank")}><span>
              <i className="fab fa-spotify"></i> Spotify</span>
            </button>
            <button className="social-link" onClick={() => window.open("https://music.apple.com/fr/artist/zied-zouari/1078724093", "_blank")}><span>
              <i className="fab fa-apple" ></i> Apple Music</span>
            </button>
            <button className="social-link" onClick={() => window.open("https://www.amazon.com/music/player/artists/B01B3LV4OK/zied-zouari", "_blank")}><span>
              <i className="fab fa-amazon"></i> Amazon Music</span>
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Zied Zouari, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

// onClick={() => window.open(selectedPost.link, "_blank")}