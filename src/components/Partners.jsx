import React from 'react';
import { motion } from 'framer-motion';

const ACCENT = '#1B2D5B';

const partners = [
  { name: 'Sun Group', logo: null },
  { name: 'Vingroup', logo: null },
  { name: 'FPT Software', logo: null },
  { name: 'Marriott', logo: null },
  { name: 'BIDV', logo: null },
  { name: 'Hyatt', logo: null },
  { name: 'Vietinbank', logo: null },
  { name: 'Samsung', logo: null },
];

const testimonials = [
  {
    quote: 'Latio Event đã tổ chức Gala Dinner cho chúng tôi với hơn 500 khách mời. Mọi thứ diễn ra hoàn hảo từ khâu chuẩn bị đến vận hành. Ấn tượng và chuyên nghiệp!',
    name: 'Nguyễn Minh Tuấn',
    role: 'Giám đốc điều hành, Sun Group Đà Nẵng',
  },
  {
    quote: 'Chúng tôi đã hợp tác với Latio Event cho 3 năm liên tiếp. Sự sáng tạo và tính chuyên nghiệp của đội ngũ luôn vượt kỳ vọng của ban lãnh đạo.',
    name: 'Trần Thị Hương',
    role: 'Trưởng phòng Marketing, FPT Software',
  },
  {
    quote: 'Lễ khánh thành chi nhánh mới của chúng tôi được Latio Event thực hiện xuất sắc. Khách hàng và đối tác đều khen ngợi không gian và kịch bản rất ấn tượng.',
    name: 'Lê Văn Hải',
    role: 'Giám đốc chi nhánh, BIDV Đà Nẵng',
  },
];

const Partners = () => {
  return (
    <section
      id="partners"
      style={{
        fontFamily: "'Inter', sans-serif",
        background: '#f8f9fc',
        padding: '7rem 0',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '4rem' }}
        >
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: ACCENT,
              marginBottom: '1rem',
            }}
          >
            06 — Khách Hàng & Đối Tác
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 600,
              color: '#111',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              maxWidth: 560,
            }}
          >
            Được tin tưởng bởi những thương hiệu hàng đầu
          </h2>
        </motion.div>

        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: '#e5e7eb',
            border: '1px solid #e5e7eb',
            borderRadius: 20,
            overflow: 'hidden',
            marginBottom: '5rem',
          }}
        >
          {partners.map((p, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2.5rem',
                minHeight: 100,
              }}
            >
              <span
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#bbb',
                  letterSpacing: '-0.01em',
                }}
              >
                {p.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: '#fff',
                borderRadius: 20,
                padding: '2rem',
                border: '1px solid #e5e7eb',
              }}
            >
              {/* Quote marks */}
              <div
                style={{
                  fontSize: '3rem',
                  lineHeight: 1,
                  color: ACCENT,
                  opacity: 0.15,
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                }}
              >
                "
              </div>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#444',
                  lineHeight: 1.7,
                  margin: '0 0 1.5rem',
                  fontStyle: 'italic',
                }}
              >
                {t.quote}
              </p>
              <div
                style={{
                  borderTop: '1px solid #f0f0f0',
                  paddingTop: '1rem',
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: '#111',
                    marginBottom: '0.2rem',
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: '#888',
                    letterSpacing: '0.02em',
                  }}
                >
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
