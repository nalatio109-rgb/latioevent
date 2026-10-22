import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ACCENT = '#1B2D5B';

const services = [
  {
    num: '01',
    title: 'Year End Party & Gala Dinner',
    tags: ['Concept & Kịch bản', 'Thiết kế sân khấu', 'Vinh danh trọn gói'],
    img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '02',
    title: 'Team Building & Du Lịch Hè',
    tags: ['Hoạt động gắn kết', 'Du lịch nội bộ', 'Trò chơi vận động'],
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '03',
    title: 'Hội Nghị & Ra Mắt Sản Phẩm',
    tags: ['Hội thảo doanh nghiệp', 'Tri ân khách hàng', 'Lễ kỷ niệm thành lập'],
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '04',
    title: 'Khai Trương & Khánh Thành',
    tags: ['Thiết kế không gian', 'Trang thiết bị kỹ thuật', 'Nhân sự sự kiện'],
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '05',
    title: 'Âm Thanh, Ánh Sáng & Nhân Sự',
    tags: ['Cho thuê thiết bị', 'MC & PG/PB', 'Quay phim & Same Day Recap'],
    img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80',
  },
];

const ServicesNew = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolled = -rect.top;
      const scrollable = sectionHeight - viewportHeight;
      if (scrolled < 0 || scrollable <= 0) return;
      const progress = Math.max(0, Math.min(0.999, scrolled / scrollable));
      const index = Math.min(services.length - 1, Math.floor(progress * services.length));
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Outer: chiều cao = số dịch vụ × 100vh → tạo scroll space
    <div
      ref={sectionRef}
      id="services"
      style={{ height: `${services.length * 100}vh` }}
    >
      {/* Inner sticky: luôn chiếm 100vh, nội dung thay đổi theo scroll */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          fontFamily: "'Inter', sans-serif",
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Section label + progress dots */}
        <div
          style={{
            position: 'absolute',
            top: '2.5rem',
            left: '2.5rem',
            zIndex: 10,
          }}
        >
          <p
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.35)',
            }}
          >
            02 — Dịch Vụ Của Chúng Tôi
          </p>
        </div>

        {/* Progress indicator (top right) */}
        <div
          style={{
            position: 'absolute',
            top: '2.5rem',
            right: '2.5rem',
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
            zIndex: 10,
          }}
        >
          {services.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === activeIndex ? 24 : 6,
                height: 6,
                borderRadius: 100,
                background: i === activeIndex ? ACCENT : '#ddd',
                transition: 'all 0.4s ease',
              }}
            />
          ))}
        </div>

        {/* Main layout */}
        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            height: '100%',
          }}
        >
          {/* LEFT: text content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '6rem 4rem 4rem 2.5rem',
            }}
          >
            {/* Number */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`num-${activeIndex}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: 'rgba(0,0,0,0.3)',
                  marginBottom: '1.5rem',
                }}
              >
                {services[activeIndex].num}
              </motion.p>
            </AnimatePresence>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={`title-${activeIndex}`}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  fontWeight: 600,
                  color: '#111',
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  marginBottom: '2rem',
                }}
              >
                {services[activeIndex].title}
              </motion.h2>
            </AnimatePresence>

            {/* Tags */}
            <AnimatePresence mode="wait">
              <motion.ul
                key={`tags-${activeIndex}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.08 }}
                style={{
                  listStyle: 'disc',
                  paddingLeft: '1.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                {services[activeIndex].tags.map((tag) => (
                  <li
                    key={tag}
                    style={{
                      fontSize: '1rem',
                      color: 'rgba(0,0,0,0.5)',
                      lineHeight: 1.5,
                    }}
                  >
                    {tag}
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

          {/* RIGHT: image */}
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              margin: '2rem 2rem 2rem 0',
              borderRadius: 20,
              background: '#eee',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={`img-${activeIndex}`}
                src={services[activeIndex].img}
                alt={services[activeIndex].title}
                initial={{ opacity: 0, scale: 1.07 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  position: 'absolute',
                  inset: 0,
                }}
              />
            </AnimatePresence>

            {/* Counter badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '1.5rem',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#fff',
                background: 'rgba(0,0,0,0.45)',
                backdropFilter: 'blur(8px)',
                padding: '0.45rem 0.9rem',
                borderRadius: 100,
              }}
            >
              {services[activeIndex].num} / {String(services.length).padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesNew;
