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
                <i className="fab fa-instagram"></i> Instagram 
              </span>
            </button>
            <button className="social-link">
              <span>
                <i className="fab fa-x-twitter"></i> X (Twitter)
              </span>
            </button>
            <button className="social-link">
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
            <button className="social-link">
              <span>
              <i className="fas fa-home"></i> Home
              </span>
            </button>
            <button className="social-link">
              <span>
              <i className="fas fa-music"></i> Music</span>
            </button>
            <button className="social-link"><span>
              <i className="fas fa-newspaper"></i> News</span>
            </button>
            <button className="social-link"><span>
              <i className="fas fa-video"></i> Media</span>
            </button>
            <button className="social-link"><span>
              <i className="fas fa-info-circle"></i> About</span>
            </button>
            <button className="social-link"><span>
              <i className="fas fa-envelope"></i> Contact</span>
            </button>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Music</h4>
          <div className="social-links">
            <button className="social-link"><span>
              <i className="fab fa-youtube"></i> Youtube</span>
            </button>
            <button className="social-link"><span>
              <i className="fab fa-spotify"></i> Spotify</span>
            </button>
            <button className="social-link"><span>
              <i className="fab fa-apple"></i> Apple Music</span>
            </button>
            <button className="social-link"><span>
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