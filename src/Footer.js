import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Mithun M. All Rights Reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="https://github.com/Mithunit18" target="_blank" rel="noopener noreferrer">
              <FaGithub className="footer-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mithun-m-61aa052a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="footer-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/share/1BCDRvyEss/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="footer-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mithun_039/profilecard/?igsh=MWw4N2FsZmNwaDY1NA==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="footer-icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
