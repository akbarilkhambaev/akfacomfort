'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact-section">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Контактная информация
        </motion.h1>

        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="contact-info">
            <h2>Способы связи</h2>
            <p>г. Ташкент, ул. Махтумкули, 1</p>
            <p>info@akfacomfort.ru</p>
            <p>+998 71 203 00 00</p>
            <p>Пн. - Сб: 9:00 до 19:00</p>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            {submitted && (
              <motion.div
                className="form-success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✓ Спасибо! Мы свяжемся с вами вскоре.
              </motion.div>
            )}
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Ваш email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Ваше сообщение"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Отправить
            </button>
          </form>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="contact-map-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Найти нас на карте</h2>
          <div className="map-container dark-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0646687642043!2d69.20024!3d41.29524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b57a1bf6789%3A0x1234567890abcdef!2z0YPQu9C80LjRgNCw0YDRgdGP!5e0!3m2!1sru!2s!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="dark-map"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
