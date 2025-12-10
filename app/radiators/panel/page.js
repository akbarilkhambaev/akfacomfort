'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa';
import PriceModal from '@/components/PriceModal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const formatDescription = (text) =>
  text.replace(/\n\s*\n/g, '<br /><br />').replace(/\n/g, '<br />');

const products = [
  {
    id: 1,
    name: 'AKFA',
    description:
      '<b>Надёжность в эксплуатации</b> \n Эксплуатационные характеристики панельных радиаторов отопления просто замечательны: высокая степень теплоотдачи при низкой теплопроводной инерции, что позволяет легко выполнять регулировку температуры в помещении. \n\n <b>Современное оборудование</b> \n Стальные панельные радиаторы отопления производятся различных размеров. Компании, выпускающие отопительное оборудование, уделяют большое внимание современному дизайну и простоте монтажа радиаторов отопления.',
    specs: [
      'Объём воды: 5 л',
      'Высота радиаторов: 300, 400, 500, 600 мм',
      'Длина радиаторов: от 400 мм до 2000 мм',
      'Масса радиатора: 7 - 60 кг',
      'Рабочее давление: 6 бар',
      'Максимальное давление: 10 Бар',
    ],
    images: ['/panel/1.jpg', '/panel/2.jpg'],
  },
];

// Компонент микрослайдера для каждого товара
function ProductImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="product-image-slider">
      <div className="slider-main-image">
        <button
          className="slider-arrow slider-arrow-left"
          onClick={prevImage}
          aria-label="Previous image"
        >
          <FaChevronLeft />
        </button>

        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Product image"
          className="main-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        <button
          className="slider-arrow slider-arrow-right"
          onClick={nextImage}
          aria-label="Next image"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="slider-thumbnails-mini">
        {images.map((image, index) => (
          <button
            key={index}
            className={`thumbnail-mini ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`View image ${index + 1}`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function PanelRadiators() {
  const [expandedId, setExpandedId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const openModal = (productName) => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };
  return (
    <section className="products-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/radiators"
            className="btn-back"
          >
            ← Назад к радиаторам
          </Link>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Панельные радиаторы
        </motion.h1>
        <motion.p
          className="lead"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Компактные и мощные радиаторы для современных систем отопления. Серия
          LIDERLINE отличается надёжностью и высокой теплоотдачей.
        </motion.p>

        {/* Product Details */}
        <motion.div
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={`product-detail-card ${
                expandedId === product.id ? 'expanded' : 'collapsed'
              }`}
              variants={itemVariants}
            >
              {(() => {
                const isExpanded = expandedId === product.id;
                return (
                  <button
                    className="product-header-button"
                    onClick={() => toggleExpand(product.id)}
                  >
                    <div className="product-title-row">
                      <h3>{product.name}</h3>
                      <div className="product-title-meta">
                        <span
                          className={`product-toggle-hint ${
                            isExpanded ? 'active' : ''
                          }`}
                        >
                          {isExpanded ? 'Свернуть' : 'Раскрыть'}
                        </span>
                        <FaChevronDown
                          className={`product-toggle-icon ${
                            isExpanded ? 'rotated' : ''
                          }`}
                        />
                        <span className="product-number">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })()}

              <motion.div
                className="product-content"
                initial={{ opacity: 0, height: 0 }}
                animate={
                  expandedId === product.id
                    ? { opacity: 1, height: 'auto' }
                    : { opacity: 0, height: 0 }
                }
                transition={{ duration: 0.3 }}
              >
                {/* Микрослайдер с фотографиями */}
                <ProductImageSlider images={product.images} />

                <p
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: formatDescription(product.description),
                  }}
                />
                <ul className="specs">
                  {product.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
                <button
                  className="btn btn-secondary"
                  onClick={() => openModal(product.name)}
                >
                  Свяжитесь с нами
                </button>
              </motion.div>

              <div className="product-footer"></div>
            </motion.div>
          ))}
        </motion.div>

        <PriceModal
          isOpen={modalOpen}
          onClose={closeModal}
          productName={selectedProduct}
        />
      </div>
    </section>
  );
}
