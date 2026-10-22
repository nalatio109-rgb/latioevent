import React from 'react';
import { motion } from 'framer-motion';

const ACCENT = '#1B2D5B';

const steps = [
  {
    num: '01',
    title: 'Tiếp Nhận & Lắng Nghe',
    desc: 'Gặp gỡ, lắng nghe nhu cầu, mục tiêu và ngân sách. Tư vấn định hướng phù hợp ngay từ đầu.',
  },
  {
    num: '02',
    title: 'Lên Ý Tưởng & Kịch Bản',
    desc: 'Xây dựng concept sáng tạo, kịch bản chi tiết, moodboard thiết kế và timeline tổng thể.',
  },
  {
    num: '03',
    title: 'Sản Xuất & Chuẩn Bị',
    desc: 'Triển khai thiết kế, chuẩn bị sân khấu, âm thanh ánh sáng, in ấn, nhân sự phục vụ.',
  },
  {
    num: '04',
    title: 'Vận Hành Sự Kiện',
    desc: 'Đội ngũ có mặt từ sớm, điều phối từng khâu, xử lý tình huống linh hoạt, đảm bảo sự kiện diễn ra hoàn hảo.',
  },
];

const highlights = [
  { value: '300+', label: 'Sự kiện đã tổ chức' },
  { value: '200+', label: 'Khách hàng tin tưởng' },
  { value: '100+', label: 'Đối tác chiến lược' },
  { value: '8+', label: 'Năm kinh nghiệm' },
];

const Capability = () => {
  return (
    <section
      id="capability"
      style={{
        fontFamily: "'Inter', sans-serif",
        background: '#111',
        padding: '7rem 0',
        color: '#fff',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '5rem' }}
        >
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '1rem',
            }}
          >
            04 — Năng Lực Tổ Chức
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontWeight: 600,
              color: '#fff',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              maxWidth: 680,
            }}
          >
            Không chỉ có ý tưởng — chúng tôi có khả năng triển khai thực tế
          </h2>
        </motion.div>

        {/* Two columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Steps */}
          <div>
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  paddingBottom: '2.5rem',
                  borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  marginBottom: i < steps.length - 1 ? '2.5rem' : 0,
                }}
              >
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: 'rgba(255,255,255,0.3)',
                    paddingTop: '0.2rem',
                    flexShrink: 0,
                  }}
                >
                  {step.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: '#fff',
                      marginBottom: '0.6rem',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.5)',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Stats + image */}
          <div>
            <motion.img
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80"
              alt="Hậu trường sự kiện"
              style={{
                width: '100%',
                height: 300,
                objectFit: 'cover',
                borderRadius: 20,
                marginBottom: '2.5rem',
              }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
              }}
            >
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  style={{
                    padding: '1.5rem',
                    borderRadius: 16,
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.04)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: 600,
                      color: '#fff',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                      marginBottom: '0.4rem',
                    }}
                  >
                    {h.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {h.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capability;
