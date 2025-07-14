import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Home from './Home';
import Fashion from './Fashion';
import Fragrance from './Fragrance';

// Component for the MeiT brand overlay
function MeiTOverlay() {
  const [loading, setLoading] = useState(false);
  const [meitBlack, setMeitBlack] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Listen for custom loading event from Home component
    const handleStartLoading = () => {
      setLoading(true);
      setTimeout(() => {
        setMeitBlack(true);
      }, 200);
      setTimeout(() => {
        setLoading(false);
        setMeitBlack(false);
      }, 1200); // Extended to ensure white overlay disappears completely
    };

    window.addEventListener('startLoading', handleStartLoading);

    return () => {
      window.removeEventListener('startLoading', handleStartLoading);
    };
  }, []);

  useEffect(() => {
    // Clear loading state immediately when route changes
    setLoading(false);
    setMeitBlack(false);
  }, [location.pathname]);

  return (
    <>
      {/* MeiT brand text overlay - only visible on home page */}
      {location.pathname === '/' && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center pointer-events-none transition-all duration-500
          ${loading ? 'scale-95' : 'scale-100'}
        `}>
          <span className={`font-bold drop-shadow-lg tracking-widest transition-all duration-500
            ${meitBlack ? 'text-black text-6xl md:text-7xl' : 'text-white text-7xl md:text-8xl'}
          `}>
            MeiT
          </span>
        </div>
      )}
      
      {/* Loading Overlay - visible during navigation */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-end">
          <div className="w-full h-0 animate-rise bg-white flex items-center justify-center relative" />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-serif relative overflow-hidden">
        <MeiTOverlay />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/fragrance" element={<Fragrance />} />
        </Routes>
        
        <style>{`
          @keyframes rise {
            0% { height: 0; }
            100% { height: 100vh; }
          }
          .animate-rise {
            animation: rise 0.9s cubic-bezier(0.4,0,0.2,1) forwards;
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;
