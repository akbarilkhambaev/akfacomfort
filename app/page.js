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

export default function Home() {
  return (
    <>
      <section className="hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source
            src="/Caliente_RUS_effects.webm"
            type="video/webm"
          />
        </video>
        <div className="hero-overlay"></div>
        {/* <div className="hero-content">
          <div className="container">
            <h1>AKFA COMFORT</h1>
            <p>Премиум-качество для вашего комфорта</p>
            <Link
              href="/products"
              className="btn btn-primary"
            >
              Смотреть каталог
            </Link>
          </div>
        </div> */}
      </section>

      <section className="solutions-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            Отопительные решения
          </motion.h2>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Надёжные и эффективные решения для дома и бизнеса: секционные и
            панельные радиаторы, газовые котлы и комплектующие.
          </motion.p>

          <motion.div
            className="solutions-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.article className="solution-card" variants={itemVariants}>
              <h3>01. Секционные радиаторы</h3>
              <p>
                Оптимальное соотношение надёжности и теплоотдачи. Подходит для
                жилых и коммерческих помещений.
              </p>
              <ul>
                <li>
                  <Link href="/radiators/sectional">MONZA</Link>
                </li>
                <li>
                  <Link href="/radiators/sectional">AVANGARD</Link>
                </li>
                <li>
                  <Link href="/radiators/sectional">CLASSIC 350</Link>
                </li>
                <li>
                  <Link href="/radiators/sectional">CLASSIC 500</Link>
                </li>
              </ul>
              <p className="small">
                <Link href="/radiators/sectional">
                  Подробнее о секционных радиаторах →
                </Link>
              </p>
            </motion.article>

            <motion.article className="solution-card" variants={itemVariants}>
              <h3>02. Панельные радиаторы</h3>
              <p>
                Высокая теплоотдача и надёжная конструкция — идеальны для
                современных систем отопления.
              </p>
              <p className="small">
                <Link href="/radiators/panel">
                  Подробнее о панельных радиаторах →
                </Link>
              </p>
            </motion.article>

            <motion.article className="solution-card" variants={itemVariants}>
              <h3>03. Газовые котлы</h3>
              <p>
                Комплексные решения для автономного и централизованного
                отопления — надёжность и безопасность эксплуатации.
              </p>
              <p className="small">
                <Link href="/boilers">Подробнее о котлах AKFA →</Link>
              </p>
            </motion.article>
          </motion.div>

          <motion.div
            className="cta-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>
              Нужна помощь с выбором? Наши специалисты помогут подобрать
              оптимальное решение под ваш проект.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Связаться с нами
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="additional-links container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Полезные материалы
        </motion.h2>
        <motion.div
          className="links-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants}>
            <Link
              href="/radiators"
              className="link-card"
            >
              Радиаторы отопления
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              href="/boilers"
              className="link-card"
            >
              Газовые котлы
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              href="/contact"
              className="link-card"
            >
              Контакты
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              href="/products"
              className="link-card"
            >
              Весь каталог
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
