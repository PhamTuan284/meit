import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaHeart, FaUser, FaShoppingBag, FaBars } from 'react-icons/fa';
import { HiOutlineSearch, HiOutlineHeart, HiOutlineUser, HiOutlineShoppingBag, HiOutlineMenu } from 'react-icons/hi';

function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled down
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/show navbar on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.hamburger-menu') && !event.target.closest('.sidebar-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'}`}>
        <div className="w-full flex items-center justify-between py-4 px-6 relative">
          {/* Left - Hamburger Menu */}
          <div className="flex items-center hamburger-menu">
            <button 
              className="text-black hover:text-gray-600 transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16" />
              </svg>
            </button>
          </div>

          {/* Center - MeiT Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <button 
              className="font-bold text-4xl tracking-widest text-black hover:opacity-70 transition-opacity"
              onClick={() => navigate('/')}
            >
              MeiT
            </button>
          </div>

          {/* Right - Utility Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-black hover:text-gray-600 transition-colors p-2">
              <HiOutlineSearch className="w-5 h-5" />
            </button>
            <button className="text-black hover:text-gray-600 transition-colors p-2">
              <HiOutlineHeart className="w-5 h-5" />
            </button>
            <button className="text-black hover:text-gray-600 transition-colors p-2">
              <HiOutlineUser className="w-5 h-5" />
            </button>
            <button className="text-black hover:text-gray-600 transition-colors p-2">
              <HiOutlineShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Sidebar Menu */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[60] sidebar-menu ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button 
              className="text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Menu Items */}
          <div className="flex-1 py-6">
            <button
              className="w-full text-left px-6 py-4 text-lg text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-100"
              onClick={() => {
                navigate('/fashion');
                setIsMenuOpen(false);
              }}
            >
              Fashion
            </button>
            <button
              className="w-full text-left px-6 py-4 text-lg text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-100"
              onClick={() => {
                navigate('/home-goods');
                setIsMenuOpen(false);
              }}
            >
              Home Goods
            </button>
          </div>
        </div>
      </div>
      
      {/* Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar; 