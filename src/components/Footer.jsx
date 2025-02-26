import React from 'react'

import SuyambuBoomibalanTrustLogo from '../assets/images/SuyambuBoomibalanTrustLogo.png'


const Footer = () => {
    return (
      <footer className="bg text-black py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Trust Info */}
          <div className="flex flex-col items-center md:items-start">
            <img src={SuyambuBoomibalanTrustLogo} alt="Trust Logo" className="w-20 mb-3" />
            <h2 className="text-lg font-bold text-yellow-500 uppercase">Sri Suyambu Boomibalan Trust</h2>
            <p className="text-black text-sm mt-2 text-center md:text-left">
              Preserving temple heritage & serving the community with devotion.
            </p>
          </div>
  
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-yellow-500">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="/" className="text-black hover:text-yellow-500 transition">Home</a></li>
              <li><a href="/ourstory" className="text-black hover:text-yellow-500 transition">Our Story</a></li>
              <li><a href="/current-projects" className="text-black hover:text-yellow-500 transition">Current Projects</a></li>
              <li><a href="/temple-science" className="text-black hover:text-yellow-500 transition">Temple Science</a></li>
              <li><a href="#" className="text-black hover:text-yellow-500 transition">Blogs</a></li>
              <li><a href="/contact" className="text-black hover:text-yellow-500 transition">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact & Socials */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-yellow-500">Contact Us</h3>
            <p className="text-black text-sm mt-2">📍 Chennai, Tamil Nadu, India</p>
            <p className="text-black text-sm mt-1">📞 <a href="tel:+919655667705" className="hover:text-yellow-500 transition">+91 96556 67705</a></p>
            <p className="text-black text-sm mt-1">📧 <a href="mailto:info@suyambutrust.com" className="hover:text-yellow-500 transition">info@suyambutrust.com</a></p>
  
            {/* Social Icons */}
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-black hover:text-yellow-500 transition">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-black hover:text-yellow-500 transition">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-black hover:text-yellow-500 transition">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-black hover:text-yellow-500 transition">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-white-500 text-sm">
        Copyright  © {new Date().getFullYear()} . All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  