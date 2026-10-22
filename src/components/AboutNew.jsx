import React from 'react';
import { motion } from 'framer-motion';

const ACCENT = '#1B2D5B';

const AboutNew = () => {
  return (
    <section
      id="about"
      style={{
        fontFamily: "'Inter', sans-serif",
        background: '#fff',
        padding: '7rem 0',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Image stacked */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            <img
              src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=900&q=80"
              alt="Latio Event Team"
              style={{
                width: '100%',
                height: 480,
                objectFit: 'cover',
                borderRadius: 24,
              }}
            />
            {/* Floating badge */}
            <div
              style={{
                position: 'absolute',
                bottom: -28,
                right: -28,
                background: ACCENT,
                color: '#fff',
                borderRadius: 20,
                padding: '1.8rem 2rem',
                textAlign: 'center',
                boxShadow: '0 12px 40px rgba(27,45,91,0.3)',
              }}
            >
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: '0.3rem',
                }}
              >
                8+
              </div>
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  opacity: 0.75,
                }}
              >
                Năm kinh nghiệm
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: ACCENT,
                marginBottom: '1.2rem',
              }}
            >
              05 — Về Latio Event
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 600,
                color: '#111',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '1.8rem',
              }}
            >
              Kiến tạo sự kiện bằng tâm huyết — từ ý tưởng đến thực tế
            </h2>

            <p
              style={{
                fontSize: '1rem',
                color: '#555',
                lineHeight: 1.75,
                marginBottom: '1.5rem',
              }}
            >
              Latio Event được thành lập với sứ mệnh mang đến những trải nghiệm sự kiện đẳng cấp tại Đà Nẵng và khu vực Miền Trung. Chúng tôi tin rằng mỗi sự kiện là một câu chuyện — và chúng tôi là người kể câu chuyện đó bằng ánh sáng, âm thanh, không gian và cảm xúc.
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: '#555',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
              }}
            >
              Từ những buổi gala sang trọng, lễ khánh thành hoành tráng đến các team building sáng tạo — đội ngũ Latio Event luôn xuất hiện với năng lượng đầy đủ, sự chuẩn bị kỹ lưỡng và cam kết vượt kỳ vọng.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.8rem',
                  background: ACCENT,
                  color: '#fff',
                  borderRadius: 50,
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Tư vấn miễn phí →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutNew;
