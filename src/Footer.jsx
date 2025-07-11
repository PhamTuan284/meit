import React from 'react';

const Footer = () => (
  <footer className="bg-white text-black border-t border-gray-200 pt-10 pb-4 px-4 md:px-12">
    <div className="max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 pb-8 border-b border-gray-200">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">MeiT lắng nghe bạn!</h2>
          <p className="mb-4 max-w-lg">Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.</p>
          <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition">ĐÓNG GÓP Ý KIẾN →</button>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📞</span>
            <span className="font-semibold">Hotline</span>
            <span className="ml-2">1900.272737 - 028.7777.2737</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✉️</span>
            <span className="font-semibold">Email</span>
            <span className="ml-2">Cool@MeiT.me</span>
          </div>
          <div className="flex gap-3 mt-2 text-2xl">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Zalo">💬</a>
            <a href="#" aria-label="TikTok">🎵</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="YouTube">▶️</a>
          </div>
        </div>
      </div>
      {/* Middle Section: Links */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 py-8 text-sm">
        <div>
          <div className="font-bold mb-2">COOLCLUB</div>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Tài khoản CoolClub</a></li>
            <li><a href="#" className="hover:underline">Đăng kí thành viên</a></li>
            <li><a href="#" className="hover:underline">Ưu đãi & Đặc quyền</a></li>
          </ul>
          <div className="font-bold mt-4 mb-2">TÀI LIỆU - TUYỂN DỤNG</div>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Tuyển dụng</a></li>
            <li><a href="#" className="hover:underline">Đăng ký bản quyền</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-2">CHÍNH SÁCH</div>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Chính sách đổi trả 60 ngày</a></li>
            <li><a href="#" className="hover:underline">Chính sách khuyến mãi</a></li>
            <li><a href="#" className="hover:underline">Chính sách bảo mật</a></li>
            <li><a href="#" className="hover:underline">Chính sách giao hàng</a></li>
          </ul>
          <div className="font-bold mt-4 mb-2">MeiT.ME</div>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Lịch sử thay đổi website</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-2">CHĂM SÓC KHÁCH HÀNG</div>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Trải nghiệm mua sắm 100% hài lòng</a></li>
            <li><a href="#" className="hover:underline">Hỏi đáp - FAQs</a></li>
          </ul>
          <div className="font-bold mt-4 mb-2">KIẾN THỨC MẶC ĐẸP</div>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Hướng dẫn chọn size</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-2">VỀ MeiT</div>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Quy tắc ứng xử của MeiT</a></li>
            <li><a href="#" className="hover:underline">MeiT 101</a></li>
            <li><a href="#" className="hover:underline">DVKH xuất sắc</a></li>
            <li><a href="#" className="hover:underline">Câu chuyện về MeiT</a></li>
            <li><a href="#" className="hover:underline">Nhà máy</a></li>
            <li><a href="#" className="hover:underline">Care & Share</a></li>
            <li><a href="#" className="hover:underline">Cam kết bền vững</a></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="font-bold mb-2">ĐỊA CHỈ LIÊN HỆ</div>
          <ul className="space-y-1">
            <li><span className="font-semibold">Văn phòng Hà Nội:</span> Tầng 3-4, Tòa nhà BMM, Km2, Đường Phùng Hưng, Phường Hà Đông, Thành phố Hà Nội, Việt Nam</li>
            <li><span className="font-semibold">Trung tâm vận hành Hà Nội:</span> Lô C8, KCN Lại Yên, Xã Lại Yên, Huyện Hoài Đức, Thành phố Hà Nội</li>
            <li><span className="font-semibold">Văn phòng và Trung tâm vận hành TP.HCM:</span> Lô C3, đường D2, KCN Cát Lái, Thạnh Mỹ Lợi, TP. Thủ Đức, TP. Hồ Chí Minh</li>
            <li><span className="font-semibold">Trung tâm R&D:</span> T6-01, The Manhattan Vinhomes Grand Park, Long Bình, TP. Thủ Đức</li>
          </ul>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-gray-200 pt-4 mt-4 text-xs text-gray-600">
        <div className="mb-2 md:mb-0">© CÔNG TY TNHH FASTECH ASIA<br />Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 20/02/2019.</div>
        <div className="flex gap-2 flex-wrap items-center">
          {/* Placeholder certification icons */}
          <span className="bg-gray-200 rounded px-2 py-1">NCSC</span>
          <span className="bg-gray-200 rounded px-2 py-1">CO BAN</span>
          <span className="bg-gray-200 rounded px-2 py-1">DMCA</span>
          <span className="bg-gray-200 rounded px-2 py-1">KYC</span>
          <span className="bg-gray-200 rounded px-2 py-1">ĐÃ THÔNG BÁO</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 