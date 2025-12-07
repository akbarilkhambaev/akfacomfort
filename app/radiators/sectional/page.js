'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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

const products = [
  {
    id: 1,
    name: 'MONZA',
    description: 'Надёжный секционный радиатор с оптимальной теплоотдачей',
    specs: [
      'Материал: Алюминий',
      'Тепловая мощность: до 185 Вт',
      'Секции: переменное количество',
      'Высота секции: 575 мм',
      'Длина секции	81 мм',
      'Масса секции	1200гр',
      'Рабочее давление	24 бар',
      'Номинальный тепловой поток	201 w',
    ],
    images: [
      '/monza/monza1.png',
      '/monza/monza2.png',
      '/monza/monza3.png',
      '/monza/monza4.png',
    ],
  },
  {
    id: 2,
    name: 'AVANGARD',
    description: 'Современный дизайн с высокой эффективностью теплоотдачи',
    specs: [
      'Материал: Алюминий',
      'Тепловая мощность: до 200 Вт',
      'Покрытие: эпоксидная краска',
    ],
    images: [
      '/monza/monza1.png',
      '/monza/monza2.png',
      '/monza/monza3.png',
      '/monza/monza4.png',
    ],
  },
  {
    id: 3,
    name: 'CLASSIC 350',
    description: 'Классический вариант для жилых помещений',
    specs: [
      'Материал: Сталь',
      'Тепловая мощность: до 175 Вт',
      'Высота: 350 мм',
    ],
    images: [
      '/monza/monza1.png',
      '/monza/monza2.png',
      '/monza/monza3.png',
      '/monza/monza4.png',
    ],
  },
  {
    id: 4,
    name: 'CLASSIC 500',
    description: 'Мощный радиатор для больших помещений',
    specs: [
      'Материал: Сталь',
      'Тепловая мощность: до 250 Вт',
      'Высота: 500 мм',
    ],
    images: [
      '/monza/monza1.png',
      '/monza/monza2.png',
      '/monza/monza3.png',
      '/monza/monza4.png',
    ],
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

export default function SectionalRadiators() {
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
          Секционные радиаторы
        </motion.h1>
        <motion.p
          className="lead"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Оптимальное соотношение надёжности и теплоотдачи. Подходит для жилых и
          коммерческих помещений.
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
              <button
                className="product-header-button"
                onClick={() => toggleExpand(product.id)}
              >
                <div className="product-title-row">
                  <h3>{product.name}</h3>
                  <span className="product-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </button>

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
                <p className="description">{product.description}</p>

                <ul className="specs">
                  {product.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
                <button
                  className="btn btn-secondary"
                  onClick={() => openModal(product.name)}
                >
                  Узнать цену
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
