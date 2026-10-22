import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="VelaEvents Team" />
          <div className="experience-badge">
            <span className="years">10+</span>
            <span className="text">Năm Kinh Nghiệm</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-title" style={{ textAlign: 'left' }}>
            <h2>Về Tổ Chức Sự Kiện Đà Nẵng</h2>
          </div>
          <p className="lead">Chúng tôi là đối tác đáng tin cậy của bạn trong việc tạo ra những trải nghiệm sự kiện độc đáo và ấn tượng tại khu vực Miền Trung.</p>
          <p>Với đội ngũ chuyên gia am hiểu địa phương, sáng tạo và nhiệt huyết, chúng tôi cam kết mang đến những giải pháp tối ưu nhất cho mỗi sự kiện tại Đà Nẵng. Chúng tôi tin rằng mỗi sự kiện không chỉ là một buổi lễ, mà là một câu chuyện mang đậm dấu ấn miền Trung cần được kể một cách tinh tế nhất.</p>
          
          <ul className="features-list">
            <li><CheckCircle className="feature-icon" size={20} /> Sáng tạo không giới hạn, kịch bản độc quyền.</li>
            <li><CheckCircle className="feature-icon" size={20} /> Quy trình tổ chức chuyên nghiệp, bài bản.</li>
            <li><CheckCircle className="feature-icon" size={20} /> Tối ưu chi phí, hiệu quả vượt trội.</li>
            <li><CheckCircle className="feature-icon" size={20} /> Hỗ trợ khách hàng 24/7.</li>
          </ul>
          
          <a href="#contact" className="btn btn-primary">Tư vấn miễn phí</a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
