import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-light section">
      <div className="container footer-container">
        <div className="footer-col">
          <h3>Latio Event</h3>
          <p>Công ty TNHH Truyền thông và Công nghệ LATIO — đơn vị tổ chức sự kiện chuyên nghiệp, sáng tạo và uy tín hàng đầu tại Đà Nẵng & Miền Trung.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/tochucsukiendanang" target="_blank" rel="noreferrer">FB</a>
            <a href="https://latio.vn" target="_blank" rel="noreferrer">Web</a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Dịch vụ</h4>
          <ul>
            <li><a href="#services">Year End Party & Gala Dinner</a></li>
            <li><a href="#services">Team Building & Du Lịch Hè</a></li>
            <li><a href="#services">Hội Nghị & Ra Mắt Sản Phẩm</a></li>
            <li><a href="#services">Khai Trương & Khánh Thành</a></li>
            <li><a href="#services">Âm Thanh, Ánh Sáng & Nhân Sự</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Liên hệ</h4>
          <ul className="contact-info">
            <li><MapPin size={18} /> <span>86 Đoàn Văn Cừ, Hòa Khánh, Đà Nẵng</span></li>
            <li><Phone size={18} /> <span>0868 651 224 (Mr. Thạnh)</span></li>
            <li><Mail size={18} /> <span>latiodigital@gmail.com</span></li>
            <li><Globe size={18} /> <span>latio.vn</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Latio Event — Công ty TNHH Truyền thông và Công nghệ LATIO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
