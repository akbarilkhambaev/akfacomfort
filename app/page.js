'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import StoriesSlider from '@/components/StoriesSlider';

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
  hidden: { opacity: 0, y: '-18vh' },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: index * 0.25,
    },
  }),
};

const showcaseVisualVariants = {
  hidden: { opacity: 0, x: '-65vw' },
  visible: (index = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 + index * 0.25 },
  }),
};

const showcaseContentVariants = {
  hidden: { opacity: 0, x: '55vw' },
  visible: (index = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.35 + index * 0.25,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  }),
};

const showcaseContentChildVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const showcaseListVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
      delay: index * 0.25,
      staggerChildren: 0.08,
    },
  }),
};

const showcaseListItemVariants = {
  hidden: { opacity: 0, x: '18vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const solutions = [
  {
    index: '01',
    eyebrow: 'СЕКЦИОННЫЕ РАДИАТОРЫ',
    title: 'Соотношение надёжности и теплоотдачи',
    image: '/section-rad.webp',
    leftColumn: ['MONZA', 'AVANGARD', 'CLASSIC 350', 'CLASSIC 500', 'CALIENTE'],
    rightColumn: [
      'BENEVENTO',
      'BENEVENTO LITE',
      'ETERNO',
      'ETERNO LITE',
      'ANDROMEDA',
    ],
    href: '/radiators/sectional',
  },
  {
    index: '02',
    eyebrow: 'ПАНЕЛЬНЫЕ РАДИАТОРЫ',
    title: 'Высокая теплоотдача, надёжная конструкция',
    image: '/panel-rad.webp',
    leftColumn: [],
    rightColumn: [],
    href: '/radiators/panel',
  },
  {
    index: '03',
    eyebrow: 'ГАЗОВЫЕ КОТЛЫ',
    title: 'Надёжное отопление вашего дома',
    image: '/gas-boiler.png',
    leftColumn: [],
    rightColumn: [],
    href: '/boilers',
  },
];

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
      </section>

      <StoriesSlider />

      <section className="solutions-section">
        <div className="container">
          <motion.span
            className="solution-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            #НАШИ РЕШЕНИЯ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            ОТОПИТЕЛЬНЫЕ РЕШЕНИЯ
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
            className="solutions-showcase"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {solutions.map((solution, solutionIndex) => (
              <motion.article
                key={solution.index}
                className="solutions-showcase-card"
                variants={itemVariants}
                custom={solutionIndex}
              >
                <motion.div
                  className="solutions-showcase-visual"
                  variants={showcaseVisualVariants}
                  custom={solutionIndex}
                >
                  <div className="solutions-showcase-frame">
                    <img
                      src={solution.image}
                      alt={solution.eyebrow}
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="solutions-showcase-content"
                  data-index={solution.index}
                  variants={showcaseContentVariants}
                  custom={solutionIndex}
                >
                  <motion.span
                    className="solutions-showcase-eyebrow"
                    variants={showcaseContentChildVariants}
                  >
                    {solution.eyebrow}
                  </motion.span>
                  <motion.h3 variants={showcaseContentChildVariants}>
                    {solution.title}
                  </motion.h3>
                  <motion.div
                    className="solutions-showcase-lists"
                    variants={showcaseContentChildVariants}
                  >
                    <motion.ul
                      variants={showcaseListVariants}
                      custom={0}
                    >
                      {solution.leftColumn.map((item) => (
                        <motion.li
                          key={item}
                          variants={showcaseListItemVariants}
                        >
                          <Link href={solution.href}>{item}</Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                    <motion.ul
                      variants={showcaseListVariants}
                      custom={1}
                    >
                      {solution.rightColumn.map((item) => (
                        <motion.li
                          key={item}
                          variants={showcaseListItemVariants}
                        >
                          <Link href={solution.href}>{item}</Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                  <motion.div variants={showcaseContentChildVariants}>
                    <Link
                      href={solution.href}
                      className="solutions-showcase-link"
                    >
                      Подробнее →
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.article>
            ))}
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
