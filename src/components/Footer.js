import React from 'react';
import './Footer.css'; // Optional: If you want to use a separate CSS file for styling
import gif from './download.gif'; // Import the GIF

function Footer() {
  return (
    <footer className="footer bg-light text-center py-3">
      <div className="container d-flex align-items-center justify-content-between">
        <img src={gif} alt="Footer GIF" className="footer-gif" />
        <div className="footer-text">
          <p className="mb-0">© {new Date().getFullYear()} acowale News. All rights reserved.</p>
          <p className="mb-0">Designed by Sai Krishna Vamsi</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
