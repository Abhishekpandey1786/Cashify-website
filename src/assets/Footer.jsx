import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => (
  <footer className="bg-[#fafbfb] text-gray-700 text-sm mt-12">
    {/* Main Footer */}
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row md:justify-between">
      {/* Logo & Social */}
      <div className="md:w-1/4 mb-8 md:mb-0">
        <img src="src\assets\logo.webp" alt="Cashify" className="h-8 mb-4" />
        <div className="mb-4">Follow us on</div>
        <div className="flex space-x-3">
          <a href="#" className="h-1.5"><FaFacebookF /></a>
          <a href="https://www.instagram.com/_abhishek_pandey_1786/?hl=en" className="h-10"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/abhishek-pandey1786-31698a270/" className="h-10" ><FaLinkedin /></a>
          <a href="https://github.com/Abhishekpandey1786" className="h-10" ><FaGithub /></a>
        </div>
      </div>
      {/* Links */}
      <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-6">
        <div>
          <div className="font-semibold mb-2">Services</div>
          <ul className="space-y-1">
            <li>Sell Phone</li>
            <li>Sell Television</li>
            <li>Sell Smart Watch</li>
            <li>Sell Smart Speakers</li>
            <li>Sell DSLR Camera</li>
            <li>Sell Earbuds</li>
            <li>Repair Phone</li>
            <li>Buy Phone</li>
            <li>Recycle Phone</li>
            <li>Find New Phone</li>
            <li>Partner With Us</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Careers</li>
            <li>Articles</li>
            <li>Press Releases</li>
            <li>Become Cashify Partner</li>
            <li>Become Supersale Partner</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Sell Device</div>
          <ul className="space-y-1">
            <li>Mobile Phone</li>
            <li>Laptop</li>
            <li>Tablet</li>
            <li>iMac</li>
            <li>Gaming Consoles</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Help & Support</div>
          <ul className="space-y-1">
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Warranty Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">More Info</div>
          <ul className="space-y-1">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>E-Waste Policy</li>
            <li>Cookie Policy</li>
            <li>GDPR Compliance</li>
            <li>What is Refurbished</li>
            <li>Device Safety</li>
          </ul>
        </div>
      </div>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <div className="bg-teal-400 px-4 py-2 rounded-lg flex items-center shadow-lg">
          <svg className="h-6 w-6 text-white mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
          <div>
            <div className="text-white font-semibold">Chat with Us</div>
            <div className="text-white text-xs">Got questions? Just ask.</div>
          </div>
        </div>
      </div>
    </div>
    {/* Registered Office & Device Safety */}
    <div className="border-t border-gray-200 py-6 px-4 max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start">
      <div className="text-xs text-gray-600 max-w-3xl">
        <div className="mb-2 font-semibold">Registered Office:</div>
        <div>Manak Waste Management Pvt Ltd.| 55, 2nd Floor, Lane-2, Westend Marg, Saidullajab, Near Saket Metro Station, New Delhi-110030, India, Support-7290068900 | CIN: U27205DL2009PTC190441</div>
        <div>Manak Waste Management Pvt Ltd. is ISO 27001 & 27701 Compliance Certified.Person who may be contacted in case of any compliance related queries or grievances: Manoj Kumar (grievanceofficer@cashify.in)</div>
        <div className="mt-2">
          ** All product names, logos, and brands are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement.
        </div>
      </div>
      <div className="mt-6 md:mt-0 md:ml-8">
        <div className="border border-gray-300 rounded-lg px-4 py-3 flex items-center bg-white max-w-xs">
          <img src="src\assets\logo.webp" alt="Device Safety" className="h-10 w-10 mr-3" />
          <div>
            <div className="font-semibold text-xs">Safeguarded by DeviceSafety.org</div>
            <div className="text-xs text-gray-500">All devices are data-wiped using DeviceSafety.org certified tools, guaranteeing the highest standards of data security and privacy.</div>
          </div>
        </div>
      </div>
    </div>
    {/* Copyright */}
    <div className="border-t border-gray-200 py-3 text-center text-xs text-gray-500">
      Copyright © 2025 Cashify All rights reserved
    </div>
  </footer>
);

export default Footer;