'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

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
    name: 'Секционные радиаторы',
    description:
      'Надёжные секционные радиаторы MONZA, AVANGARD, CLASSIC. Оптимальное соотношение надёжности и теплоотдачи.',
    image: '/section-rad.webp',
    href: '/radiators/sectional',
    count: '4 модели',
  },
  {
    id: 2,
    name: 'Панельные радиаторы',
    description:
      'Компактные панельные радиаторы серии LIDERLINE. Высокая теплоотдача и современный дизайн.',
    image: '/panel-rad.webp',
    href: '/radiators/panel',
    count: '2 модели',
  },
  {
    id: 3,
    name: 'Газовые котлы',
    description:
      'Мощные газовые котлы AKFA Comfort и AKFA Pro. Надёжное решение для отопления любого объёма.',
    image: '/gas-boiler.png',
    href: '/boilers',
    count: '2 модели',
  },
];

export default function ProductsPage() {
  return (
    <main className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <motion.div
          className="products-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1>Каталог товаров AKFA COMFORT</h1>
          <p>Полный спектр систем отопления для вашего комфорта</p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <motion.div
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
            >
              <Link
                href={product.href}
                className="product-category-card"
              >
                <div className="product-card-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-card-image"
                  />
                  <div className="product-card-overlay"></div>
                </div>

                <div className="product-card-content">
                  <div className="product-card-header">
                    <h3>{product.name}</h3>
                    <span className="product-count">{product.count}</span>
                  </div>

                  <p className="product-card-description">
                    {product.description}
                  </p>

                  <div className="product-card-footer">
                    <span className="product-card-link">
                      Подробнее
                      <span className="product-card-arrow">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <motion.div
          className="products-cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Не нашли нужный товар?</h2>
          <p>Свяжитесь с нашими специалистами для консультации</p>
          <Link
            href="/contact"
            className="cta-button"
          >
            Связаться
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
