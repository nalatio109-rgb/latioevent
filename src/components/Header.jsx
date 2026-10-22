import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <Calendar className="logo-icon" size={32} />
          <span>Sự Kiện Đà Nẵng</span>
        </Link>
        
        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Trang chủ</Link></li>
            <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Dịch vụ</a></li>
            <li><a href="#events" onClick={() => setIsMobileMenuOpen(false)}>Sự kiện</a></li>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Về chúng tôi</a></li>
            <li><a href="#contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Liên hệ</a></li>
          </ul>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
