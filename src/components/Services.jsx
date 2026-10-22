import React from 'react';
import { motion } from 'framer-motion';
import { Music, Mic2, MonitorPlay, Users, Presentation, GlassWater } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Music size={40} />,
    title: 'Lễ Hội Âm Nhạc',
    description: 'Thiết kế và tổ chức các lễ hội âm nhạc quy mô lớn với âm thanh ánh sáng đỉnh cao.'
  },
  {
    icon: <Mic2 size={40} />,
    title: 'Sự Kiện Doanh Nghiệp',
    description: 'Hội nghị, hội thảo, lễ ra mắt sản phẩm chuyên nghiệp và ấn tượng.'
  },
  {
    icon: <MonitorPlay size={40} />,
    title: 'Triển Lãm & Kích Hoạt',
    description: 'Thiết kế gian hàng sáng tạo, tổ chức các chiến dịch kích hoạt thương hiệu hiệu quả.'
  },
  {
    icon: <Users size={40} />,
    title: 'Team Building',
    description: 'Các hoạt động gắn kết tập thể độc đáo, ý nghĩa tại nhiều địa điểm đa dạng.'
  },
  {
    icon: <Presentation size={40} />,
    title: 'Tiệc Tất Niên / Tân Niên',
    description: 'Tổ chức các buổi tiệc cuối năm, đầu năm với kịch bản hấp dẫn và không gian sang trọng.'
  },
  {
    icon: <GlassWater size={40} />,
    title: 'Tiệc Cưới Cao Cấp',
    description: 'Biến ngày trọng đại của bạn thành một câu chuyện cổ tích với phong cách riêng biệt.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section services-section bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Dịch Vụ Của Chúng Tôi</h2>
          <p>Khám phá các giải pháp tổ chức sự kiện toàn diện tại Đà Nẵng mà chúng tôi mang lại.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
