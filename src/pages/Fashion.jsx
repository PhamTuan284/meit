import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { fashionProducts } from '../data/productData';

function Fashion() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const itemsPerPage = 21;
  const totalPages = Math.ceil(fashionProducts.length / itemsPerPage);

  // Calculate current products to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = fashionProducts.slice(startIndex, endIndex);

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
      <section className="w-full py-16 px-3 sm:px-6 md:px-[45px] mt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {currentProducts.map((product) => (
            <div 
              key={product.id} 
              className="flex flex-col items-center bg-white p-0 transition cursor-pointer hover:bg-gray-50"
              onClick={() => navigate(`/fashion/${product.id}`)}
            >
              <div 
                className="w-full aspect-[3/4] bg-gray-100 flex items-center justify-center mb-4 overflow-hidden relative group"
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
                <div className="text-lg mb-1">{product.name}</div>
                <div className="text-gray-500 mb-2">{product.price}</div>

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
          Page {currentPage} of {totalPages} • Showing {startIndex + 1}-{Math.min(endIndex, fashionProducts.length)} of {fashionProducts.length} products
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Fashion; 