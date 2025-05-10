import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
  

  
        <nav className="bg-black shadow-md ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold text-gray-200">Portofolio</div>
              <div className="hidden md:flex space-x-6 ">
                <Link to="/" className="text-gray-200 hover:text-gray-900">Home</Link>
                <Link to="/about" className="text-gray-200 hover:text-gray-900">About</Link>
                <Link to="/services" className="text-gray-200 hover:text-gray-900">Services</Link>
                <Link to="/Contacts" className="text-gray-200 hover:text-gray-900">Contacts</Link>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-800 focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden px-4 pb-4 space-y-2">
              <Link to="/" className="block text-gray-200 hover:text-gray-900">Home</Link>
              <Link to="/About" className="block text-gray-200 hover:text-gray-900">About</Link>
              <Link to="/Contacts" className="block text-gray-200 hover:text-gray-900">Contacts</Link>
              <Link to="/Services" className="block text-gray-200 hover:text-gray-900">Services</Link>
            </div>
          )}
        </nav>
      );
    }


export default Navbar