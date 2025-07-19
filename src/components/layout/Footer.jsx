import React from "react";
import {
  FaFacebook,
  FaTiktok,
  FaBuilding,
  FaPhone,
  FaEnvelope,
  FaStore,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-white text-black pt-10 pb-4 px-4 md:px-12">
    <div className="w-full">
      {/* Full width border line */}
      <div className="w-full border-t border-gray-200 mb-10"></div>
      {/* Top Section */}
      {/* <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 pb-8 border-b border-gray-200">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Slogan</h2>
        </div>
        <div className="flex items-center">
          <div className="text-4xl font-bold text-gray-800">
            <span className="text-6xl">MeiT With Logo</span>
          </div>
        </div>
      </div> */}

      {/* Bottom Section: Four Columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
        {/* Column 1: Contact Information */}
        <div className="pr-4 md:pr-8">
          <h3 className="font-bold text-lg mb-4 text-gray-800">
            Thông tin liên hệ
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <FaBuilding className="text-gray-500 mt-0.5 flex-shrink-0" />
              <span>Công Ty TNHH MEITVN</span>
            </li>
            <li className="flex items-start gap-2">
              <FaBuilding className="text-gray-500 mt-0.5 flex-shrink-0" />
              <span>Số ĐKKD: 0109961467 Sở Kế hoạch và Đầu tư TP Hà Nội</span>
            </li>
            <li className="flex items-start gap-2">
              <FaBuilding className="text-gray-500 mt-0.5 flex-shrink-0" />
              <span>Số 145 Nguyễn Văn Cừ, Bồ Đề, Hà Nội</span>
            </li>
            <li className="flex items-start gap-2">
              <FaPhone className="text-gray-500 mt-0.5 flex-shrink-0" />
              <span>036 771 0579</span>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="text-gray-500 mt-0.5 flex-shrink-0" />
              <span>marketing.meit@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Column 2: Store System */}
        <div className="px-0 md:px-4">
          <h3 className="font-bold text-lg mb-4 text-gray-800">
            Hệ thống cửa hàng
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <FaStore className="text-gray-500 mt-0.5 flex-shrink-0" />
              <span>Cửa hàng 1</span>
            </li>
            <li className="flex items-start gap-2">
              <FaStore className="text-gray-500 mt-0.5 flex-shrink-0" />
              <span>Cửa hàng 2</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Customer Care */}
        <div className="px-0 md:px-4">
          <h3 className="font-bold text-lg mb-4 text-gray-800">
            Chăm sóc khách hàng
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:underline">
                Câu hỏi thường gặp (FAQ)
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Chính sách thanh toán
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Chính sách đổi trả, kiểm hàng
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Chính sách bảo hành
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Chính sách bảo mật
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social media */}
        <div className="px-0 md:px-4">
          <h3 className="font-bold text-lg mb-4 text-gray-800">
            Theo dõi MeiT
          </h3>
          <div className="flex gap-4 text-sm text-gray-600">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaFacebook className="w-8 h-8" />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <FaTiktok className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
