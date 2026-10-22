import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ACCENT = '#1B2D5B';

const CTA = () => {
  return (
    <section
      id="contact"
      style={{
        fontFamily: "'Inter', sans-serif",
        background: ACCENT,
        padding: '8rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 60%),
                            radial-gradient(circle at 80% 50%, rgba(255,255,255,0.04) 0%, transparent 60%)`,
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
          }}
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
                marginBottom: '1.5rem',
              }}
            >
              07 — Cùng Latio Tạo Nên Sự Kiện
            </p>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                fontWeight: 600,
                color: '#fff',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
              }}
            >
              Hãy cùng chúng tôi kiến tạo sự kiện của bạn
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.7,
                maxWidth: 440,
                marginBottom: '2.5rem',
              }}
            >
              Từ Year End Party, Team Building đến Khai trương hoành tráng — Latio Event sẵn sàng đồng hành từ ý tưởng đến khoảnh khắc cuối cùng. Liên hệ ngay để được tư vấn và báo giá miễn phí.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="tel:0868651224"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.9rem 2rem',
                  background: '#fff',
                  color: ACCENT,
                  borderRadius: 50,
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Gọi ngay
                <ArrowUpRight size={16} />
              </a>
              <a
                href="mailto:latiodigital@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.9rem 2rem',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  borderRadius: 50,
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              >
                Gửi yêu cầu báo giá
              </a>
            </div>
          </motion.div>

          {/* Right: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.06)',
                borderRadius: 24,
                padding: '2.5rem',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {[
                { label: 'Hotline / Zalo', value: '0868 651 224 (Mr. Thạnh)' },
                { label: 'Email', value: 'latiodigital@gmail.com' },
                { label: 'Website', value: 'latio.vn' },
                { label: 'Địa chỉ', value: '86 Đoàn Văn Cừ, Hòa Khánh, Đà Nẵng' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.2rem 0',
                    borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    gap: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#fff',
                      textAlign: 'right',
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
