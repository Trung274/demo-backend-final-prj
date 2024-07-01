import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#333] text-gray-300 pt-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h5 className="text-white text-lg font-bold mb-4">Company</h5>
            <a href="#" className="block text-gray-300 hover:text-white mb-2">About Us</a>
            <a href="contact-us" className="block text-gray-300 hover:text-white mb-2">Contact Us</a>
            <a href="#" className="block text-gray-300 hover:text-white mb-2">Our Services</a>
            <a href="#" className="block text-gray-300 hover:text-white mb-2">Privacy Policy</a>
            <a href="#" className="block text-gray-300 hover:text-white mb-2">Terms & Condition</a>
          </div>
          <div>
            <h5 className="text-white text-lg font-bold mb-4">Quick Links</h5>
            <a href="/about" className="block text-gray-300 hover:text-white mb-2">About Us</a>
            <a href="contact-us" className="block text-gray-300 hover:text-white mb-2">Contact Us</a>
            <a href="#" className="block text-gray-300 hover:text-white mb-2">Our Services</a>
            <a href="#" className="block text-gray-300 hover:text-white mb-2">Privacy Policy</a>
            <a href="#" className="block text-gray-300 hover:text-white mb-2">Terms & Condition</a>
          </div>
          <div>
            <h5 className="text-white text-lg font-bold mb-4">Contact</h5>
            <p className="flex items-center mb-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              15/8 P. Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội 11310, Vietnam
            </p>
            <p className="flex items-center mb-2">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              +84 981 568196
            </p>
            <p className="flex items-center mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              trungnt.bi11-274@st.usth.edu.vn
            </p>
            <div className="flex mt-4">
              <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full mr-2">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full mr-2">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full mr-2">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-white text-lg font-bold mb-4">Newsletter</h5>
            <p className="mb-4">Stay Updated!
            <br />Subscribe to our newsletter to get the latest updates, job alerts, and career tips delivered right to your inbox.</p>
            <div className="relative max-w-xs">
              <input type="text" placeholder="Your email" className="bg-gray-700 text-white w-full py-2 px-4 rounded-md" />
              <button className="absolute right-0 top-0 bg-blue-500 text-white py-2 px-4 rounded-r-md">SignUp</button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              &copy; <a href="/" className="text-white hover:underline">JobHub</a>, All Right Reserved.
            </div>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-300 hover:text-white">Home</a>
              <a href="#" className="text-gray-300 hover:text-white">Cookies</a>
              <a href="#" className="text-gray-300 hover:text-white">Help</a>
              <a href="#" className="text-gray-300 hover:text-white">FQAs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;