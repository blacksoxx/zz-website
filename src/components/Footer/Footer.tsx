import React from 'react';
import './Footer.css';

interface FooterProps {
  onMoreTemplatesClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onMoreTemplatesClick = () => {} }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Social Links Section */}
        <div className="footer-section">
        <img src="/logo-transparent.png" alt="Logo" className="footer-logo" />
        <div className="social-links">
            <button className="social-link">
              <span>
                <i className="fab fa-instagram"></i> Instagram →
              </span>
            </button>
            <button className="social-link">
              <span>
                <i className="fab fa-twitter"></i> Twitter →
              </span>
            </button>
            <button className="social-link">
              <span>
                <i className="fab fa-facebook-f"></i> Facebook →
              </span>
            </button>
          </div>
        </div>

        {/* Pages Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Pages</h4>
          <ul className="footer-links">
            <li>
              <a href="/" className="footer-link">Home</a>
            </li>
            <li>
              <a href="/music" className="footer-link">Music</a>
            </li>
            <li>
              <a href="/news" className="footer-link">News</a>
            </li>
            <li>
              <a href="/media" className="footer-link">Media</a>
            </li>
            <li>
              <a href="/about" className="footer-link">About</a>
            </li>
            <li>
              <a href="/contact" className="footer-link">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Music</h4>
          <ul className="footer-links">
            <li>
              <a href="https://www.youtube.com/@ZiedZouari" className="footer-link">Youtube</a>
            </li>
            <li>
              <a href="https://open.spotify.com/intl-fr/artist/5AGvuJH8miMNqLLmgccErZ?si=5f6269e657234b76" className="footer-link">Spotify</a>
            </li>
            <li>
              <a href="https://music.apple.com/us/artist/zied-zouari/1078724093" className="footer-link">Apple Music</a>
            </li>
            <li>
              <a href="https://music.amazon.fr/artists/B01B3KY45W/zied-zouari?marketplaceId=A13V1IB3VIYZZH&musicTerritory=FR&ref=dm_sh_ZumZr2eumEwRCxJCqoD4OVGKF" className="footer-link">Amazon Music</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© Zied Zouari, All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;