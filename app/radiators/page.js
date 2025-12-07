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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Radiators() {
  return (
    <section className="products-section">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Радиаторы отопления
        </motion.h1>
        <motion.p
          className="lead"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Выберите тип радиатора, который подходит для вашего проекта
        </motion.p>

        <motion.div
          className="solutions-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.article
            className="solution-card"
            variants={itemVariants}
          >
            <div className="card-image">
              <img src="/section-rad.webp" alt="Секционные радиаторы" />
            </div>
            <h3>Секционные радиаторы</h3>
            <p>
              Оптимальное соотношение надёжности и теплоотдачи. Модели: MONZA,
              AVANGARD, CLASSIC 350/500 и другие.
            </p>
            <Link
              href="/radiators/sectional"
              className="btn btn-primary"
            >
              Подробнее
            </Link>
          </motion.article>

          <motion.article
            className="solution-card"
            variants={itemVariants}
          >
            <div className="card-image">
              <img src="/panel-rad.webp" alt="Панельные радиаторы" />
            </div>
            <h3>Панельные радиаторы</h3>
            <p>
              Высокая теплоотдача и компактный размер. Серия LIDERLINE для
              современных систем отопления.
            </p>
            <Link
              href="/radiators/panel"
              className="btn btn-primary"
            >
              Подробнее
            </Link>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
