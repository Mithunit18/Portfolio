import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-200 mt-12 ml-2">
      <div className='max-w-6xl mx-auto text-lg space-y-2 ' >
        <div className="flex flex-col justify-center pt-8 space-y-2">
          <h3 className='mb-4 text-2xl'>Get in <span className='font-extrabold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent text-3xl'>Touch</span></h3>
          <p>Email: <a href="mailto:amthemithun@gmail.com" className='text-gray-300 hover:text-white'>amthemithun@gmail.com</a></p>
          <p>Phone: <a href="tel:+917695831369" className='text-gray-300 hover:text-white'>7695831369</a></p>
        </div>
        <ul className="flex flex-row space-x-2 pt-1 text-gray-400 ">
          <li>
            <a href="https://github.com/Mithunit18" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5  hover:text-white" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mithun-m-61aa052a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-5 h-5  hover:text-white" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/share/1BCDRvyEss/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-5 h-5  hover:text-white"  />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mithun_039/profilecard/?igsh=MWw4N2FsZmNwaDY1NA==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5  hover:text-white" />
            </a>
          </li>
        </ul>
      </div>
       <p className='text-center pt-4 '>&copy; 2025 Mithun M. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
