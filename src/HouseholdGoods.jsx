import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// Generate 100 household products
const generateHouseholdProducts = () => {
  const products = [];
  const brands = ['MEIT HOME', 'LUXURY KITCHEN', 'PREMIUM LIVING', 'SMART HOME', 'ECO FRIENDLY'];
  const categories = ['Bộ nồi', 'Máy xay', 'Bộ bát đĩa', 'Tủ lạnh', 'Máy giặt', 'Lò vi sóng', 'Bình nước', 'Ghế sofa', 'Bàn ăn', 'Tủ quần áo'];
  const materials = ['Inox cao cấp', 'Sứ cao cấp', 'Gỗ tự nhiên', 'Thép không gỉ', 'Nhựa cao cấp', 'Thủy tinh', 'Gốm sứ', 'Kim loại'];
  
  // Household product images
  const householdImages = [
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop'
  ];
  
  // Hover images (completely different images for better effect)
  const householdHoverImages = [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop'
  ];
  
  for (let i = 1; i <= 100; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const material = materials[Math.floor(Math.random() * materials.length)];
    const price = Math.floor(Math.random() * 10000000) + 500000; // 500K to 10M VND
    
    // Select random images for this product
    const imageIndex = Math.floor(Math.random() * householdImages.length);
    
    products.push({
      id: i,
      name: `${category} ${material}`,
      price: `${price.toLocaleString('vi-VN')}₫`,
      image: householdImages[imageIndex],
      imageHover: householdHoverImages[imageIndex],
      brand: brand,
      preorder: Math.random() > 0.85, // 15% chance of preorder
    });
  }
  
  return products;
};

const householdProducts = generateHouseholdProducts();

function HouseholdGoods() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(householdProducts.length / itemsPerPage);

  // Calculate current products to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = householdProducts.slice(startIndex, endIndex);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is 5 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first 3 pages, ellipsis, and last page
      pages.push(1, 2, 3);
      if (currentPage > 4) {
        pages.push('...');
      }
      if (currentPage > 3 && currentPage < totalPages - 2) {
        pages.push(currentPage);
      }
      if (currentPage < totalPages - 3) {
        pages.push('...');
      }
      pages.push(totalPages - 2, totalPages - 1, totalPages);
    }
    
    return pages;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      <section className="w-full py-16 px-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <div 
              key={product.id} 
              className="flex flex-col items-center bg-white p-6 transition cursor-pointer hover:bg-gray-50"
              onClick={() => navigate(`/household-goods/${product.id}`)}
            >
              <div 
                className="w-full aspect-[3/4] bg-gray-100 flex items-center justify-center mb-4 overflow-hidden rounded relative group"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Main Image */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className={`absolute inset-0 object-cover h-full w-full transition-opacity duration-500 ease-in-out ${
                    hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                
                {/* Hover Image */}
                <img 
                  src={product.imageHover} 
                  alt={`${product.name} - Hover view`} 
                  className={`absolute inset-0 object-cover h-full w-full transition-opacity duration-500 ease-in-out ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                
                {/* Smooth gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent transition-all duration-500 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`} />
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
        
        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 space-x-2">
          {/* Previous button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 text-gray-600 hover:text-black disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            ←
          </button>
          
          {/* Page numbers */}
          {getPageNumbers().map((page, index) => (
            <React.Fragment key={index}>
              {page === '...' ? (
                <span className="px-3 py-2 text-gray-400">...</span>
              ) : (
                <button
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 rounded transition-colors ${
                    currentPage === page
                      ? 'bg-black text-white'
                      : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}
          
          {/* Next button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-gray-600 hover:text-black disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            →
          </button>
        </div>
        
        {/* Page info */}
        <div className="text-center mt-4 text-gray-500 text-sm">
          Page {currentPage} of {totalPages} • Showing {startIndex + 1}-{Math.min(endIndex, householdProducts.length)} of {householdProducts.length} products
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HouseholdGoods; 