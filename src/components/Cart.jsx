import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { HiOutlineTrash, HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';

function Cart() {
  const navigate = useNavigate();
  const { items, totalItems, totalPrice, removeFromCart, updateQuantity, clearCart, debugCart } = useCart();

  // Debug: Log cart state on component mount
  useEffect(() => {
    console.log('Cart component mounted with items:', items.length);
    if (debugCart) {
      debugCart();
    }
  }, [items.length, debugCart]);

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <div className="w-full py-32 px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <button 
              onClick={() => navigate('/fashion')}
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Start Shopping
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="w-full py-8 px-3 sm:px-6 md:px-[45px] mt-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl md:text-3xl font-light">Shopping Cart ({totalItems} items)</h1>
            <button 
              onClick={clearCart}
              className="text-sm text-gray-500 hover:text-black underline"
            >
              Clear all
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item, index) => (
                <div key={`${item.id}-${item.size}-${index}`} className="flex gap-4 p-4 border border-gray-200">
                  {/* Product Image */}
                  <div className="w-24 h-32 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.brand}</p>
                        <p className="text-sm text-gray-500">Size: {item.size}</p>
                      </div>
                      <p className="font-medium text-gray-900">{item.price}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-gray-300">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <HiOutlineMinus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <HiOutlinePlus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-2"
                      >
                        <HiOutlineTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 sticky top-24">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>${(totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3">
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>${(totalPrice * 1.1).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors mb-4">
                  Proceed to Checkout
                </button>
                
                <button 
                  onClick={() => navigate('/fashion')}
                  className="w-full py-3 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cart; 