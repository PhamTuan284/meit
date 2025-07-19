import React, { useState } from 'react';

function CheckoutForm({ onSubmit, onCancel, totalPrice }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    note: '',
    paymentMethod: 'cod' // cod = cash on delivery, bank = bank transfer
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Vui lòng nhập họ tên';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Vui lòng nhập địa chỉ';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const totalWithTax = (totalPrice * 1.1).toFixed(2);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-light">Thông tin đặt hàng</h2>
            <button
              onClick={onCancel}
              className="text-gray-500 hover:text-black transition-colors"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b border-gray-200 pb-2">
                Thông tin cá nhân
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Họ tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Nhập họ tên đầy đủ"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Nhập số điện thoại"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Nhập địa chỉ email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Địa chỉ <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="3"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Nhập địa chỉ giao hàng chi tiết"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ghi chú
                </label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Ghi chú thêm về đơn hàng (không bắt buộc)"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b border-gray-200 pb-2">
                Phương thức thanh toán
              </h3>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                  />
                  <div>
                    <div className="font-medium">Thanh toán khi nhận hàng (COD)</div>
                    <div className="text-sm text-gray-500">Thanh toán bằng tiền mặt khi nhận hàng</div>
                  </div>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={formData.paymentMethod === 'bank'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                  />
                  <div>
                    <div className="font-medium">Chuyển khoản ngân hàng</div>
                    <div className="text-sm text-gray-500">Chuyển khoản trước khi giao hàng</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Tóm tắt đơn hàng</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Tổng tiền hàng:</span>
                  <span>{totalPrice.toFixed(2)} VND</span>
                </div>
                <div className="flex justify-between">
                  <span>Thuế (10%):</span>
                  <span>{(totalPrice * 0.1).toFixed(2)} VND</span>
                </div>
                <div className="flex justify-between">
                  <span>Phí vận chuyển:</span>
                  <span>Miễn phí</span>
                </div>
                <div className="border-t border-gray-300 pt-2">
                  <div className="flex justify-between font-medium">
                    <span>Tổng cộng:</span>
                    <span>{totalWithTax} VND</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={onCancel}
                className="flex-1 py-3 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors rounded-md"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors rounded-md"
              >
                Xác nhận đặt hàng
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm; 