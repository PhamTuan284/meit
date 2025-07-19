import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { fashionProducts, householdProducts } from '../data/productData';
import { useCart } from '../contexts/CartContext';
import Notification from '../components/ui/Notification';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [currentImage, setCurrentImage] = useState(0); // Index of current image
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });

  // Extract category from URL pathname
  const pathname = window.location.pathname;
  const category = pathname.includes('/fashion/') ? 'fashion' : 
                  pathname.includes('/household-goods/') ? 'household-goods' : null;

  // Get product data based on category
  const getProduct = () => {
    const productId = parseInt(id);
    if (category === 'fashion') {
      return fashionProducts.find(p => p.id === productId);
    } else if (category === 'household-goods') {
      return householdProducts.find(p => p.id === productId);
    }
    return null;
  };

  const product = getProduct();

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="w-full py-32 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy sản phẩm {category} {id}</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Về trang chủ
          </button>
        </div>
      </>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setNotification({
        show: true,
        message: 'Vui lòng chọn kích thước',
        type: 'error'
      });
      return;
    }
    addToCart(product, selectedSize, 1);
    setNotification({
      show: true,
      message: `Đã thêm 1 ${product.name} (${selectedSize}) vào giỏ hàng`,
      type: 'success'
    });
  };

  const closeNotification = () => {
    setNotification({ show: false, message: '', type: 'success' });
  };

  return (
    <>
      <Navbar />
      <Notification 
        message={notification.message}
        isVisible={notification.show}
        onClose={closeNotification}
        type={notification.type}
      />
      <section className="w-full py-8 px-3 sm:px-6 md:px-[45px]">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <button 
            onClick={() => navigate(-1)}
            className="mb-8 text-sm text-gray-600 hover:text-black transition-colors"
          >
            ← Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Product Images - Left Side */}
            <div className="relative">
              {/* Main Image */}
              <div className="w-full aspect-[4/5] bg-gray-50 overflow-hidden mb-4">
                <img 
                  src={product.images[currentImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Thumbnails */}
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`aspect-square overflow-hidden border-2 transition-colors ${
                      currentImage === index ? 'border-black' : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`${product.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              
              {/* "New" tag for fashion items */}
              {category === 'fashion' && (
                <div className="absolute bottom-4 left-4 text-xs text-gray-500">
                  Mới
                </div>
              )}
            </div>

            {/* Product Info - Right Side */}
            <div className="space-y-8">
              {/* Product Header */}
              <div>
                <div className="uppercase text-xs text-gray-500 tracking-widest mb-3">{product.brand}</div>
                <div className="flex items-start justify-between mb-4">
                  <h1 className="text-2xl md:text-3xl font-light leading-tight">{product.name}</h1>
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium">Kích thước</label>
                  <button className="text-xs text-gray-500 underline hover:text-black">
                    Hưỡng dẫn chọn size
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-2 text-sm border transition-colors ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full py-4 bg-gray-900 text-white font-medium hover:bg-black disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-between px-6"
                >
                  <span>{product.inStock ? 'Thêm vào giỏ' : 'Hết hàng'}</span>
                  <span className="font-semibold">{product.price}</span>
                </button>
              </div>

              {/* Information Tabs */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex space-x-8 text-sm">
                  <button className="text-black border-b-2 border-black pb-2 font-medium">Mô tả sản phẩm</button>
                </div>
                
                {/* Description Content */}
                <div className="mt-6 text-sm text-gray-600 leading-relaxed">
                  <p>{product.description}</p>
                  <button className="text-black underline mt-2 hover:no-underline">
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductDetail; 