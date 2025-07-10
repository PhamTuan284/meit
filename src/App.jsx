import { useState, useRef } from 'react';
import './index.css';

const fashionProducts = [
  {
    name: 'Revolution Hoodie',
    price: '13.742.000₫',
    image: './assets/QP.jpg',
    brand: 'FEAR OF GOD',
  },
  {
    name: 'Straight Revolution Jean',
    price: '23.874.000₫',
    image: 'https://picsum.photos/200/300',
    brand: 'FEAR OF GOD',
    preorder: true,
  },
  {
    name: 'FU Snapback',
    price: '3.609.000₫',
    image: 'https://picsum.photos/200/300',
    brand: 'FEAR OF GOD',
  },
];

const beautyProducts = [
  {
    name: 'Dioriviera Eau de Parfum',
    price: '5.000.000₫',
    image: 'https://picsum.photos/200/300',
    brand: 'CHRISTIAN DIOR',
  },
  {
    name: 'Miss Dior Blooming Bouquet',
    price: '4.200.000₫',
    image: 'https://picsum.photos/200/300',
    brand: 'CHRISTIAN DIOR',
  },
  {
    name: 'Dior Addict Lip Glow',
    price: '1.200.000₫',
    image: 'https://picsum.photos/200/300',
    brand: 'CHRISTIAN DIOR',
  },
];

function App() {
  const [view, setView] = useState('hero'); // 'hero', 'fashion', 'beauty'
  const [loading, setLoading] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [meitBlack, setMeitBlack] = useState(false); // for color change
  const fashionVideoRef = useRef(null);
  const beautyVideoRef = useRef(null);

  // Handler for Shop Now buttons
  const handleShopNow = (target) => {
    setAnimateOut(true);
    setTimeout(() => {
      setLoading(true);
      setTimeout(() => {
        setMeitBlack(true); // change color after 1s
      }, 200);
      setTimeout(() => {
        setLoading(false);
        setView(target);
        setAnimateOut(false);
        setMeitBlack(false);
      }, 1200);
    }, 400); // let the text/button animate out first
  };

  let content;
  if (view === 'hero') {
    content = (
      <section className="relative flex flex-col md:flex-row h-screen min-h-[400px]">
        {/* Fashion & Accessories Banner */}
        <div className="flex-1 relative flex items-end justify-center overflow-hidden group bg-black">
          <video
            ref={fashionVideoRef}
            className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            poster="https://www.dior.com/couture/var/dior/storage/images/horizon/homepage/2024/6/27/diormain/diormain-1/diormain-1_16_9/38928213-1-eng-GB/diormain-1_16_9.jpg"
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
            src="https://www.w3schools.com/html/movie.mp4"
            poster="https://www.dior.com/couture/var/dior/storage/images/horizon/homepage/2024/6/27/diormain/diormain-2/diormain-2_16_9/38928215-1-eng-GB/diormain-2_16_9.jpg"
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
            <button className="mt-2 px-8 py-2 bg-black/60 text-white rounded-full shadow-lg transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2" onClick={() => handleShopNow('beauty')}>Shop now</button>
          </div>
        </div>
      </section>
    );
  } else {
    const products = view === 'fashion' ? fashionProducts : beautyProducts;
    const sectionTitle = view === 'fashion' ? 'Fashion & Accessories' : 'Fragrance & Beauty';
    content = (
      <section className="max-w-6xl mx-auto py-16 px-4">
        <button className="mb-8 px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition" onClick={() => setView('hero')}>Back</button>
        <h2 className="text-3xl font-bold mb-8 text-center">{sectionTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
              <div className="w-full h-96 bg-gray-100 flex items-center justify-center mb-4 overflow-hidden rounded">
                <img src={product.image} alt={product.name} className="object-cover h-full w-full" />
              </div>
              <div className="text-center">
                <div className="uppercase text-xs text-gray-500 tracking-widest mb-1">{product.brand}</div>
                <div className="font-semibold text-lg mb-1">{product.name}</div>
                <div className="text-gray-700 mb-2">{product.price}</div>
                {product.preorder && <span className="text-xs text-orange-500 font-bold">PREORDER</span>}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-white font-serif relative overflow-hidden">
      {/* Single MeiT brand text, always centered, highest z-index, animates on loading and color transitions with overlay */}
      {(view === 'hero' || loading) && (
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
      {content}
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-end">
          <div className="w-full h-0 animate-rise bg-white flex items-center justify-center relative" />
        </div>
      )}
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
  );
}

export default App;
