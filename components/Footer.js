'use client';

import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <footer>
      <div className="footer-content">
        <motion.div
          className="footer-section"
          custom={0}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3>О компании</h3>
          <p>
            За годы существования компания AKFA зарекомендовала себя как
            надежного и ответственного производителя.
          </p>
          <div className="social-links">
            {[
              { icon: FaFacebookF, label: 'Facebook' },
              { icon: FaTelegram, label: 'Telegram' },
              { icon: FaInstagram, label: 'Instagram' },
              { icon: FaWhatsapp, label: 'WhatsApp' },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href="#"
                aria-label={social.label}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="footer-section"
          custom={1}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3>Услуги</h3>
          <ul>
            {[
              'Светопрозрачные конструкции',
              'Строительный сектор',
              'Решения для комфорта',
            ].map((item, i) => (
              <motion.li
                key={item}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <a href="#">{item}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="footer-section"
          custom={2}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3>Полезные ссылки</h3>
          <ul>
            {['О компании', 'Наши работы', 'Новости', 'Карьера'].map(
              (item, i) => (
                <motion.li
                  key={item}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <a href="#">{item}</a>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        <motion.div
          className="footer-section"
          custom={3}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3>Контактные данные</h3>
          <p> г. Ташкент, ул. Махтумкули, 1</p>
          <p>
            <a href="mailto:info@akfagroup.com">info@akfagroup.com</a>
          </p>
          <p>
            <a href="tel:+998712030000">+998 71 203 00 00</a>
          </p>
          <p> Пн. - Сб: 9:00 до 19:00</p>
        </motion.div>
      </div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p>&copy; AKFA Group © Все права защищены</p>
        <p>
          <a href="#">Условия обработки персональных данных</a>
        </p>
      </motion.div>
    </footer>
  );
}
