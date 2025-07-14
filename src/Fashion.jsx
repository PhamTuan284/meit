import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const fashionProducts = [
  {
    name: 'Revolution Hoodie',
    price: '13.742.000₫',
    image: '//fearofgod.com/cdn/shop/files/192SP256480F_MERINO_SHORT_SLEEVE_TEE-HOMESTEAD_HEATHER_2_x800.jpg?v=1749617316',
    brand: 'FEAR OF GOD',
  },
  {
    name: 'Straight Revolution Jean',
    price: '23.874.000₫',
    image: '//fearofgod.com/cdn/shop/files/192SP256480F_MERINO_SHORT_SLEEVE_TEE-HOMESTEAD_HEATHER_2_x800.jpg?v=1749617316',
    brand: 'FEAR OF GOD',
    preorder: true,
  },
  {
    name: 'FU Snapback',
    price: '3.609.000₫',
    image: '//fearofgod.com/cdn/shop/files/192SP256480F_MERINO_SHORT_SLEEVE_TEE-HOMESTEAD_HEATHER_2_x800.jpg?v=1749617316',
    brand: 'FEAR OF GOD',
  },
];

function Fashion() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section className="max-w-6xl mx-auto py-16 px-4">
        <button 
          className="mb-8 px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition" 
          onClick={() => navigate('/')}
        >
          Back
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fashionProducts.map((product, idx) => (
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
    </>
  );
}

export default Fashion; 