import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  const [animateOut, setAnimateOut] = useState(false);
  const [meitBlack, setMeitBlack] = useState(false);
  const fashionVideoRef = useRef(null);
  const beautyVideoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for custom loading event
    const handleStartLoading = () => {
      setTimeout(() => {
        setMeitBlack(true);
      }, 200); // Turn black after 200ms (when loading screen starts)
      setTimeout(() => {
        setMeitBlack(false);
      }, 1200); // Turn back to white after loading completes
    };

    window.addEventListener('startLoading', handleStartLoading);

    return () => {
      window.removeEventListener('startLoading', handleStartLoading);
    };
  }, []);

  // Get loading state from the loading overlay
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStartLoading = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
    };

    window.addEventListener('startLoading', handleStartLoading);

    return () => {
      window.removeEventListener('startLoading', handleStartLoading);
    };
  }, []);

  // Handler for Mua ngay buttons
  const handleShopNow = (target) => {
    setAnimateOut(true);
    setTimeout(() => {
      // Trigger loading screen
      window.dispatchEvent(new CustomEvent('startLoading'));
      
      // Navigate after loading state is completely cleared
      setTimeout(() => {
        navigate(`/${target}`);
      }, 1200);
    }, 400); // let the text/button animate out first
  };

  return (
    <>
      <section className="relative flex flex-col md:flex-row h-screen min-h-[400px]">
        {/* MeiT brand text - centered in banner */}
        <div className={`absolute inset-0 z-[100] flex items-center justify-center pointer-events-none transition-all duration-500
          ${isLoading ? 'scale-95' : 'scale-100'}
        `}>
          <span className={`font-bold drop-shadow-lg tracking-widest text-7xl md:text-8xl transition-all duration-500
            ${meitBlack ? 'text-black' : 'text-white'}
          `}>
            MeiT
          </span>
        </div>
        
        {/* Thời trang Banner */}
        <div className="flex-1 relative flex items-end justify-center overflow-hidden group bg-black">
          <video
            ref={fashionVideoRef}
            className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500"
            src="https://diorama.dam-broadcast.com/pm_11872_1075_1075540-jor9fxk0yb-1080.mp4"
            poster="https://diorama.dam-broadcast.com/cdn-cgi/image/width=3000,format=auto/pm_11872_1076_1076077-s4ksc180i9-whr.jpg"
            muted
            loop
            playsInline
            preload="none"
            onMouseEnter={() => {
              if (fashionVideoRef.current) {
                fashionVideoRef.current.play();
              }
              if (beautyVideoRef.current) {
                beautyVideoRef.current.pause();
              }
            }}
          />
          <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
          <div className={`absolute bottom-0 left-0 w-full z-20 text-white text-center p-8 pointer-events-auto transition-all duration-500 ${animateOut ? 'opacity-0 translate-y-16' : 'opacity-100 translate-y-0'}`}>
            <h2 className="text-2xl md:text-3xl font-semibold">Thời trang</h2>
            <button className="mt-2 px-8 py-2 text-white underline underline-offset-4 hover:no-underline hover:scale-110 hover:tracking-wider transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2" onClick={() => handleShopNow('fashion')}>Mua ngay</button>
          </div>
        </div>
        {/* Đồ gia dụng Banner */}
        <div className="flex-1 relative flex items-end justify-center overflow-hidden group bg-black">
          <video
            ref={beautyVideoRef}
            className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500"
            src="https://diorama.dam-broadcast.com/pm_11872_1111_1111938-vk8s39l20l-1080.mp4"
            poster="https://diorama.dam-broadcast.com/cdn-cgi/image/width=3000,format=auto/pm_11872_1111_1111944-jout1mh812-whr.jpg"
            muted
            loop
            playsInline
            preload="none"
            onMouseEnter={() => {
              if (beautyVideoRef.current) {
                beautyVideoRef.current.play();
              }
              if (fashionVideoRef.current) {
                fashionVideoRef.current.pause();
              }
            }}
          />
          <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
          <div className={`absolute bottom-0 left-0 w-full z-20 text-white text-center p-8 pointer-events-auto transition-all duration-500 ${animateOut ? 'opacity-0 translate-y-16' : 'opacity-100 translate-y-0'}`}>
            <h2 className="text-2xl md:text-3xl font-semibold">Đồ gia dụng</h2>
            <button className="mt-2 px-8 py-2 text-white underline underline-offset-4 hover:no-underline hover:scale-110 hover:tracking-wider transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2" onClick={() => handleShopNow('household-goods')}>Mua ngay</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home; 