import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// Generate product data (same as in Fashion and HouseholdGoods)
const generateFashionProducts = () => {
  const products = [];
  const brands = ['FEAR OF GOD', 'ESSENTIALS', 'MEIT FASHION', 'LUXURY COLLECTION', 'STREET STYLE'];
  const categories = ['Hoodie', 'T-Shirt', 'Jeans', 'Jacket', 'Sweater', 'Pants', 'Shirt', 'Dress', 'Skirt', 'Coat'];
  const colors = ['Black', 'White', 'Gray', 'Navy', 'Brown', 'Beige', 'Olive', 'Burgundy'];
  
  for (let i = 1; i <= 100; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const price = Math.floor(Math.random() * 50000000) + 1000000;
    
    products.push({
      id: i,
      name: `${category} ${color}`,
      price: `${price.toLocaleString('vi-VN')}₫`,
      image: `//fearofgod.com/cdn/shop/files/192SP256480F_MERINO_SHORT_SLEEVE_TEE-HOMESTEAD_HEATHER_2_x800.jpg?v=1749617316&id=${i}`,
      imageHover: `//fearofgod.com/cdn/shop/files/192SP256480F_MERINO_SHORT_SLEEVE_TEE-HOMESTEAD_HEATHER_2_x800.jpg?v=1749617316&id=${i}&hover=1`,
      brand: brand,
      preorder: Math.random() > 0.8,
      description: `Premium ${category.toLowerCase()} in ${color.toLowerCase()} color. Made with high-quality materials for ultimate comfort and style. Perfect for everyday wear and special occasions.`,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      inStock: Math.random() > 0.3,
    });
  }
  
  return products;
};

const generateHouseholdProducts = () => {
  const products = [];
  const brands = ['MEIT HOME', 'LUXURY KITCHEN', 'PREMIUM LIVING', 'SMART HOME', 'ECO FRIENDLY'];
  const categories = ['Bộ nồi', 'Máy xay', 'Bộ bát đĩa', 'Tủ lạnh', 'Máy giặt', 'Lò vi sóng', 'Bình nước', 'Ghế sofa', 'Bàn ăn', 'Tủ quần áo'];
  const materials = ['Inox cao cấp', 'Sứ cao cấp', 'Gỗ tự nhiên', 'Thép không gỉ', 'Nhựa cao cấp', 'Thủy tinh', 'Gốm sứ', 'Kim loại'];
  
  for (let i = 1; i <= 100; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const material = materials[Math.floor(Math.random() * materials.length)];
    const price = Math.floor(Math.random() * 10000000) + 500000;
    
    products.push({
      id: i,
      name: `${category} ${material}`,
      price: `${price.toLocaleString('vi-VN')}₫`,
      image: `//fearofgod.com/cdn/shop/files/192SP256480F_MERINO_SHORT_SLEEVE_TEE-HOMESTEAD_HEATHER_2_x800.jpg?v=1749617316&id=${i}`,
      imageHover: `//fearofgod.com/cdn/shop/files/192SP256480F_MERINO_SHORT_SLEEVE_TEE-HOMESTEAD_HEATHER_2_x800.jpg?v=1749617316&id=${i}&hover=1`,
      brand: brand,
      preorder: Math.random() > 0.85,
      description: `Chất lượng cao ${category.toLowerCase()} làm từ ${material.toLowerCase()}. Thiết kế hiện đại, bền bỉ và an toàn cho gia đình.`,
      sizes: ['Nhỏ', 'Vừa', 'Lớn', 'Đặc biệt'],
      inStock: Math.random() > 0.3,
    });
  }
  
  return products;
};

const fashionProducts = generateFashionProducts();
const householdProducts = generateHouseholdProducts();

function ProductDetail() {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState('main');

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
        <div className="w-full py-16 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Back to Home
          </button>
        </div>
      </>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    alert(`Added ${quantity} ${product.name} (${selectedSize}) to cart`);
  };

  return (
    <>
      <Navbar />
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <button 
            onClick={() => navigate(-1)}
            className="mb-8 px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
          >
            ← Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="w-full h-96 bg-gray-100 rounded overflow-hidden">
                <img 
                  src={currentImage === 'hover' ? product.imageHover : product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => setCurrentImage('main')}
                  className={`w-20 h-20 bg-gray-100 rounded overflow-hidden ${
                    currentImage === 'main' ? 'ring-2 ring-black' : ''
                  }`}
                >
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </button>
                <button
                  onClick={() => setCurrentImage('hover')}
                  className={`w-20 h-20 bg-gray-100 rounded overflow-hidden ${
                    currentImage === 'hover' ? 'ring-2 ring-black' : ''
                  }`}
                >
                  <img src={product.imageHover} alt={product.name} className="w-full h-full object-cover" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="uppercase text-sm text-gray-500 tracking-widest mb-2">{product.brand}</div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <div className="text-2xl font-semibold mb-4">{product.price}</div>
                {!product.inStock && (
                  <div className="text-red-500 font-semibold mb-4">Out of Stock</div>
                )}
                {product.preorder && (
                  <div className="text-orange-500 font-semibold mb-4">PREORDER</div>
                )}
              </div>

              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="font-semibold mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 hover:border-black'
                      } transition-colors`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="font-semibold mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:border-black"
                  >
                    -
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:border-black"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full py-4 bg-black text-white font-semibold hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductDetail; 