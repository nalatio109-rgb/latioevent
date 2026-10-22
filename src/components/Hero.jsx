import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

const ACCENT = '#1B2D5B';

const ease = [0.22, 1, 0.36, 1];

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease },
  }),
};

const navLinks = ['Giới thiệu', 'Dịch vụ', 'Dự án', 'Liên hệ'];

const stats = [
  { value: '300', label: 'SỰ\nKIỆN', index: 2 },
  { value: '200', label: 'KHÁCH\nHÀNG', index: 3 },
  { value: '100', label: 'ĐỐI\nTÁC', index: 4 },
];

const words = ['TỔ CHỨC', 'SỰ KIỆN', 'ĐÀ NẴNG'];

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Video Background ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'hue-rotate(-70deg)' }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* slight white overlay so black text stays readable */}
      <div className="absolute inset-0 bg-white/30" />

      {/* ── NAVIGATION ── */}
      <nav className="relative z-10 flex items-center justify-between px-5 sm:px-8 md:px-12 pt-5 md:pt-6">
        {/* Logo */}
        <motion.div
          custom={0}
          variants={fadeDown}
          initial="hidden"
          animate="visible"
          className="flex items-center"
        >
          <img src="/logo.png" alt="Latio Event" className="h-10 sm:h-14 w-auto object-contain" />
        </motion.div>

        {/* Center links (md+) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href="#"
              custom={i + 1}
              variants={fadeDown}
              initial="hidden"
              animate="visible"
              className="text-[14px] font-semibold tracking-widest uppercase text-black hover:opacity-60 transition-opacity"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Hamburger */}
        <motion.button
          custom={5}
          variants={fadeDown}
          initial="hidden"
          animate="visible"
          onClick={() => setMenuOpen(true)}
          className="w-9 h-9 rounded-full bg-black flex flex-col items-center justify-center gap-1"
          aria-label="Open menu"
        >
          <span className="w-4 h-0.5 bg-white block" />
          <span className="w-4 h-0.5 bg-white block" />
          <span className="w-4 h-0.5 bg-white block" />
        </motion.button>
      </nav>

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-white flex flex-col px-5 sm:px-8 pt-5 pb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <img src="/logo.png" alt="Latio Event" className="h-10 sm:h-14 w-auto object-contain" />
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-black flex items-center justify-center"
                aria-label="Close menu"
              >
                <X size={18} color="white" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col gap-8 mt-16">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-semibold tracking-widest uppercase text-black hover:opacity-60 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto">
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-xl font-semibold tracking-widest uppercase"
                style={{ color: ACCENT }}
              >
                Liên Hệ
                <ArrowUpRight size={22} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── STATS ROW (flex-1, vertically centered, right-aligned) ── */}
      <div className="relative z-10 flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-8 md:py-0">
        <div className="flex flex-row gap-5 sm:gap-8 md:gap-10">
          {stats.map(({ value, label, index }) => (
            <motion.div
              key={value}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-end"
            >
              {/* Number */}
              <div
                className="font-semibold leading-none"
                style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)' }}
              >
                <span
                  style={{
                    color: ACCENT,
                    fontSize: '0.5em',
                    fontWeight: 600,
                  }}
                >
                  +
                </span>
                <span style={{ color: '#000' }}>{value}</span>
              </div>
              {/* Label */}
              <p
                className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black whitespace-pre-line leading-tight text-right mt-1"
                style={{ marginBottom: 0 }}
              >
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM SECTION ── */}
      <div className="relative z-10 px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-6 md:gap-12">
        {/* Row: description + heading */}
        <div className="flex flex-row items-end justify-between gap-3 sm:gap-4">
          {/* Description */}
          <motion.div
            custom={7}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="shrink-0"
          >
            <p
              className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black text-left leading-tight whitespace-nowrap"
              style={{ marginBottom: 0 }}
            >
              Tổ Chức Chuyên Nghiệp<br />
              Ý Tưởng Độc Đáo<br />
              Dịch Vụ Trọn Gói<br />
              Cam Kết Chất Lượng
            </p>
          </motion.div>

          {/* Right column: CTA + Main Heading */}
          <div className="flex flex-col items-end">
            {/* CTA Link */}
            <motion.a
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              href="#"
              className="flex items-center gap-1.5 font-semibold tracking-widest uppercase whitespace-nowrap text-base sm:text-xl md:text-2xl hover:opacity-70 transition-opacity mb-3 sm:mb-4"
              style={{ color: ACCENT }}
            >
              Liên Hệ
              <ArrowUpRight size={18} className="sm:hidden" />
              <ArrowUpRight size={22} className="hidden sm:inline" />
            </motion.a>

            {/* Main Heading */}
            {words.map((word, i) => (
              <motion.h1
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4 + i * 0.14,
                  duration: 0.7,
                  ease,
                }}
                className="font-normal text-black/100 text-right"
                style={{
                  fontSize: 'clamp(1.8rem, 7vw, 7rem)',
                  lineHeight: 1.3,
                  fontWeight: 350,
                }}
              >
                {word}
              </motion.h1>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
