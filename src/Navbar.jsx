import React from 'react';

function Navbar({ active = 'ESSENTIALS' }) {
  return (
    <nav className="w-full border-b border-gray-100 bg-white z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6">
        {/* Left */}
        <div className="flex items-center space-x-8 text-xs tracking-widest text-gray-700">
          <button className={`hover:text-black ${active === 'FEAR OF GOD' ? 'font-bold underline underline-offset-4' : ''}`}>FEAR OF GOD</button>
          <button className={`hover:text-black ${active === 'ESSENTIALS' ? 'font-bold underline underline-offset-4' : ''}`}>ESSENTIALS</button>
          <button className={`hover:text-black ${active === 'ATHLETICS' ? 'font-bold underline underline-offset-4' : ''}`}>ATHLETICS</button>
        </div>
        {/* Center */}
        <div className="flex flex-col items-center">
          <span className="font-bold text-2xl tracking-widest text-black mb-1">FEAR OF GOD</span>
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
      {/* Filter button */}
      <div className="max-w-7xl mx-auto flex justify-end px-6">
        <button className="text-xs tracking-widest text-gray-600 hover:text-black py-2">FILTER <span className="ml-1">+</span></button>
      </div>
    </nav>
  );
}

export default Navbar; 