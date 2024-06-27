import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="bg-dark text-gray-400 pt-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">Company</h5>
            <a className="btn btn-link" href="">About Us</a>
            <a className="btn btn-link" href="">Contact Us</a>
            <a className="btn btn-link" href="">Our Services</a>
            <a className="btn btn-link" href="">Privacy Policy</a>
            <a className="btn btn-link" href="">Terms & Condition</a>
          </div>
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">Quick Links</h5>
            <a className="btn btn-link" href="">About Us</a>
            <a className="btn btn-link" href="">Contact Us</a>
            <a className="btn btn-link" href="">Our Services</a>
            <a className="btn btn-link" href="">Privacy Policy</a>
            <a className="btn btn-link" href="">Terms & Condition</a>
          </div>
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">Contact</h5>
            <p className="mb-2"><i className="fa fa-map-marker-alt mr-3"></i>123 Street, New York, USA</p>
            <p className="mb-2"><i className="fa fa-phone-alt mr-3"></i>+012 345 67890</p>
            <p className="mb-2"><i className="fa fa-envelope mr-3"></i>info@example.com</p>
            <div className="flex space-x-2 mt-4">
              <a className="btn btn-social" href=""><i className="fab fa-twitter"></i></a>
              <a className="btn btn-social" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-social" href=""><i className="fab fa-youtube"></i></a>
              <a className="btn btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">Newsletter</h5>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="relative mt-4">
              <input className="form-control bg-transparent w-full py-3 pl-4 pr-12 text-white" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-primary absolute top-0 right-0 mt-2 mr-2">SignUp</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="copyright">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved. 
              Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
            </div>
            <div className="footer-menu">
              <a href="">Home</a>
              <a href="">Cookies</a>
              <a href="">Help</a>
              <a href="">FQAs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;