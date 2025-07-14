import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  const [animateOut, setAnimateOut] = useState(false);
  const fashionVideoRef = useRef(null);
  const beautyVideoRef = useRef(null);
  const navigate = useNavigate();

  // Handler for Shop Now buttons
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
        {/* Fashion & Accessories Banner */}
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
            onMouseEnter={() => fashionVideoRef.current && fashionVideoRef.current.play()}
            onMouseLeave={() => fashionVideoRef.current && fashionVideoRef.current.pause()}
          />
          <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
          <div className={`absolute bottom-0 left-0 w-full z-20 text-white text-center p-8 pointer-events-auto transition-all duration-500 ${animateOut ? 'opacity-0 translate-y-16' : 'opacity-100 translate-y-0'}`}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Fashion & Accessories</h2>
            <button className="mt-2 px-8 py-2 bg-black/60 text-white rounded-full shadow-lg transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2" onClick={() => handleShopNow('fashion')}>Shop now</button>
          </div>
        </div>
        {/* Fragrance & Beauty Banner */}
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
            onMouseEnter={() => beautyVideoRef.current && beautyVideoRef.current.play()}
            onMouseLeave={() => beautyVideoRef.current && beautyVideoRef.current.pause()}
          />
          <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
          <div className={`absolute bottom-0 left-0 w-full z-20 text-white text-center p-8 pointer-events-auto transition-all duration-500 ${animateOut ? 'opacity-0 translate-y-16' : 'opacity-100 translate-y-0'}`}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Fragrance & Beauty</h2>
            <button className="mt-2 px-8 py-2 bg-black/60 text-white rounded-full shadow-lg transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2" onClick={() => handleShopNow('fragrance')}>Shop now</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home; 