import React from 'react';
import logo from '../assets/logo.svg';
import Facebook from '../assets/Facebook.svg';
import Twitter from '../assets/Twitter.svg';
import Instagram from '../assets/Instagram.svg';

const Footer = () => {
  return (
    <footer className="w-full bg-[#080231] text-white text-sm py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo */}
        <div>
          <img src={logo} alt="King Solomon Bet Logo" className="h-12 w-12" />
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 text-center">
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Terms and Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook">
            <img src={Facebook} alt="Facebook" className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={Twitter} alt="Twitter" className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={Instagram} alt="Instagram" className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs">
        <p>King Solomon Bet &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
