'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <header className="header">
      <div className="header-container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Link
            href="/"
            className="logo"
          >
            <Image
              src="/logo-w.svg"
              alt="AKFA Comfort Logo"
              width={150}
              height={40}
            />
          </Link>
        </motion.div>

        {!mobileMenuOpen && (
          <button
            className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}

        <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
          <button
            type="button"
            className="mobile-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Закрыть меню"
          >
            ×
          </button>
          {['Главная', 'Радиаторы', 'Котлы', 'Каталог', 'Контакты'].map(
            (item, i) => {
              const href = [
                '/',
                '/radiators',
                '/boilers',
                '/products',
                '/contact',
              ][i];
              const isCTA = item === 'Контакты';

              return (
                <motion.div
                  key={item}
                  custom={i}
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={href}
                    className={`nav-link ${isCTA ? 'nav-link-cta' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              );
            }
          )}
        </nav>
      </div>
    </header>
  );
}
