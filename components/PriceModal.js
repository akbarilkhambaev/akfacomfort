'use client';

import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function PriceModal({ isOpen, onClose, productName }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить отправку формы на сервер
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Закрыть форму через 2 секунды
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <div className="modal-header">
          <h2>Узнать цену</h2>
          {productName && <p className="product-name">{productName}</p>}
        </div>

        {submitted ? (
          <motion.div
            className="modal-success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="success-icon">✓</div>
            <h3>Спасибо за запрос!</h3>
            <p>Мы свяжемся с вами в ближайшее время</p>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="price-form"
          >
            <div className="form-group">
              <label htmlFor="name">Ваше имя *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Иван Петров"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Телефон *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@mail.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Сообщение</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Расскажите о ваших требованиях..."
                rows="4"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Отправить запрос
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
