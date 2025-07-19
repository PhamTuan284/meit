import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import CheckoutForm from './CheckoutForm';
import Notification from '../ui/Notification';
import { HiOutlineTrash, HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';

function Cart() {
  const navigate = useNavigate();
  const { items, totalItems, totalPrice, removeFromCart, updateQuantity, clearCart, debugCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });

  // Debug: Log cart state on component mount
  useEffect(() => {
    console.log('Cart component mounted with items:', items.length);
    if (debugCart) {
      debugCart();
    }
  }, [items.length, debugCart]);

  const handleCheckout = (formData) => {
    // Prepare order data
    const orderData = {
      customerInfo: {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        note: formData.note
      },
      paymentMethod: formData.paymentMethod,
      items: items,
      totalPrice: totalPrice,
      totalWithTax: totalPrice * 1.1,
      orderDate: new Date().toISOString()
    };

    // Send order to server (replace with your actual API endpoint)
    console.log('Sending order to server:', orderData);
    
    // Simulate API call
    setTimeout(() => {
      setNotification({
        show: true,
        message: 'Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.',
        type: 'success'
      });
      setShowCheckout(false);
      clearCart();
    }, 1000);
  };

  const closeNotification = () => {
    setNotification({ show: false, message: '', type: 'success' });
  };

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <div className="w-full py-32 px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-2xl font-bold mb-4">Giỏ hàng trống</h1>
            <p className="text-gray-600 mb-8">Chưa có sản phẩm nào trong giỏ hàng</p>
            <button 
              onClick={() => navigate('/')}
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Bắt đầu mua sắm
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
      <Notification 
        message={notification.message}
        isVisible={notification.show}
        onClose={closeNotification}
        type={notification.type}
      />
      {showCheckout && (
        <CheckoutForm
          onSubmit={handleCheckout}
          onCancel={() => setShowCheckout(false)}
          totalPrice={totalPrice}
        />
      )}
      <section className="w-full py-8 px-3 sm:px-6 md:px-[45px] mt-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl md:text-3xl font-light">Giỏ hàng</h1>
            <button 
              onClick={clearCart}
              className="text-sm text-gray-500 hover:text-black underline"
            >
              Xóa tất cả
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
                        <p className="text-sm text-gray-500">Kích thước: {item.size}</p>
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
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>{totalItems} sản phẩm</span>
                    <span>{totalPrice.toFixed(2)} VND</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Phí vận chuyển</span>
                    <span>Miễn phí</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Thuế</span>
                    <span>{(totalPrice * 0.1).toFixed(2)} VND</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3">
                    <div className="flex justify-between font-medium">
                      <span>Thành tiền</span>
                      <span>{(totalPrice * 1.1).toFixed(2)} VND</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setShowCheckout(true)}
                  className="w-full py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors mb-4"
                >
                  Đặt hàng
                </button>
                
                <button 
                  onClick={() => navigate('/')}
                  className="w-full py-3 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors"
                >
                  Tiếp tục mua hàng
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