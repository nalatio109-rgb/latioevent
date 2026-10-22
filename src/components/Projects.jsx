import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ACCENT = '#1B2D5B';

const projects = [
  {
    id: 1,
    title: 'Đại Hội Đại Biểu Toàn Quốc',
    type: 'Sự kiện doanh nghiệp',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    size: 'large',
  },
  {
    id: 2,
    title: 'Gala Dinner Sun Group',
    type: 'Gala Dinner',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80',
    size: 'small',
  },
  {
    id: 3,
    title: 'Khai Trương Vincom Đà Nẵng',
    type: 'Khai trương',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    size: 'small',
  },
  {
    id: 4,
    title: 'Team Building Đà Nẵng Mùa Hè',
    type: 'Team Building',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    size: 'large',
  },
  {
    id: 5,
    title: 'Hội Nghị Thường Niên FPT',
    type: 'Hội nghị',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    size: 'small',
  },
  {
    id: 6,
    title: 'Lễ Hội Âm Nhạc Đà Nẵng',
    type: 'Lễ hội',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80',
    size: 'small',
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay: index * 0.07 }}
    style={{
      position: 'relative',
      borderRadius: 20,
      overflow: 'hidden',
      background: '#111',
      cursor: 'pointer',
      gridColumn: project.size === 'large' ? 'span 2' : 'span 1',
      height: project.size === 'large' ? 420 : 300,
    }}
    className="project-card-hover"
  >
    <img
      src={project.img}
      alt={project.title}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0.75,
        transition: 'transform 0.6s ease, opacity 0.4s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.opacity = '0.6';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.opacity = '0.75';
      }}
    />
    {/* Gradient overlay */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)',
      }}
    />
    {/* Info */}
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: '1.8rem 2rem',
      }}
    >
      <p
        style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.6)',
          marginBottom: '0.4rem',
        }}
      >
        {project.type} · {project.year}
      </p>
      <h3
        style={{
          fontSize: project.size === 'large' ? '1.5rem' : '1.15rem',
          fontWeight: 600,
          color: '#fff',
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
        }}
      >
        {project.title}
      </h3>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        fontFamily: "'Inter', sans-serif",
        background: '#f8f9fc',
        padding: '7rem 0',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '3.5rem',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
              03 — Dự Án Tiêu Biểu
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
              Những sự kiện chúng tôi đã kiến tạo
            </h2>
          </motion.div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: ACCENT,
              textDecoration: 'none',
            }}
          >
            Xem tất cả →
          </motion.a>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.2rem',
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
