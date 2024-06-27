import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white shadow-md ${isSticky ? 'sticky top-0' : ''} z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">JobHub</h1>
          </Link>
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <div className="relative group">
              <a href="#" className="nav-link dropdown-toggle">Jobs</a>
              <div className="dropdown-menu">
                <Link to="/job-list" className="block px-4 py-2 text-sm">Job List</Link>
                <Link to="/job-detail" className="block px-4 py-2 text-sm">Job Detail</Link>
              </div>
            </div>
            <div className="relative group">
              <a href="#" className="nav-link dropdown-toggle">Pages</a>
              <div className="dropdown-menu">
                <Link to="/category" className="block px-4 py-2 text-sm">Job Category</Link>
                <Link to="/testimonial" className="block px-4 py-2 text-sm">Testimonial</Link>
                <Link to="/404" className="block px-4 py-2 text-sm">404</Link>
              </div>
            </div>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          <a href="" className="hidden lg:inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
            Post A Job
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
          <button type="button" className="lg:hidden">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;