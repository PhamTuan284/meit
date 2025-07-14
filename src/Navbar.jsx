import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({ active = 'ESSENTIALS' }) {
  const navigate = useNavigate();

  return (
    <nav className="w-full border-b border-gray-100 bg-white z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6">
        {/* Left */}
        <div className="flex items-center space-x-8 text-xs tracking-widest text-gray-700">
          <button 
            className={`hover:text-black ${active === 'FASHION' ? 'font-bold underline underline-offset-4' : ''}`}
            onClick={() => navigate('/fashion')}
          >
            FASHION
          </button>
          <button 
            className={`hover:text-black ${active === 'ACCESSORIES' ? 'font-bold underline underline-offset-4' : ''}`}
            onClick={() => navigate('/fragrance')}
          >
            ACCESSORIES
          </button>
        </div>
        {/* Center */}
        <div className="flex flex-col items-center">
          <button 
            className="font-bold text-2xl tracking-widest text-black mb-1 hover:opacity-70 transition-opacity"
            onClick={() => navigate('/')}
          >
            MeiT
          </button>
          <div className="flex space-x-6 text-xs text-gray-600 mt-1">
            <button className="hover:underline">SHOP MENS</button>
            <button className="hover:underline">SHOP WOMENS</button>
            <button className="hover:underline">SHOP KIDS</button>
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center space-x-8 text-xs tracking-widest text-gray-700">
          <button className="hover:text-black">SEARCH</button>
          <button className="hover:text-black">ACCOUNT</button>
          <button className="hover:text-black">BAG</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 