import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/index.css';
import './styles/App.css';
import Home from './pages/Home';
import Fashion from './pages/Fashion';
import HouseholdGoods from './pages/HouseholdGoods';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { CartProvider } from './contexts/CartContext';

// Component for the loading overlay
function LoadingOverlay() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Listen for custom loading event from Home component
    const handleStartLoading = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
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
  }, [location.pathname]);

  return (
    <>

      
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
      <CartProvider>
        <div className="min-h-screen bg-white relative overflow-hidden">
          <LoadingOverlay />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/household-goods" element={<HouseholdGoods />} />
            <Route path="/fashion/:id" element={<ProductDetail />} />
            <Route path="/household-goods/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
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
      </CartProvider>
    </Router>
  );
}

export default App;
