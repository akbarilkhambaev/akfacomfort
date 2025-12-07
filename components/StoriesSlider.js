'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const stories = [
  {
    id: 'andromeda',
    title: 'ANDROMEDA',
    tagline: 'Дизайнерские решения',
    image: '/Storis/Andromeda.jpg',
    summary:
      'Премиальная интеграция дизайнерских радиаторов в жилой комплекс бизнес-класса.',
    description:
      'Мы обеспечили проект Andromeda полноценным теплотехническим сопровождением: подобрали радиаторы под архитектурную концепцию, рассчитали теплопотери и выстроили сервисную поддержку для управляющей компании.',
    ctaLabel: 'Посмотреть радиаторы',
    href: '/radiators',
  },
  {
    id: 'avangard',
    title: 'AVANGARD',
    tagline: 'Секционные радиаторы',
    image: '/Storis/Avangard.jpg',
    summary:
      'Флагманские секционные модели для систем центрального и автономного отопления.',
    description:
      'AKFA AVANGARD сочетает высокую теплоотдачу и стойкость к перепадам давления. Алюминиево-биметаллическая конструкция обеспечивает долгий срок службы даже в сложных сетях.',
    ctaLabel: 'Перейти к AVANGARD',
    href: '/radiators/sectional',
  },
  {
    id: 'bimetall',
    title: 'BIMETALL',
    tagline: 'Решение для высоток',
    image: '/Storis/Bimetall.jpg',
    summary:
      'Радиаторы с усиленной внутренней стальной колбой для высотного строительства.',
    description:
      'Серия BIMETALL выдерживает высокое рабочее давление и обеспечивает комфортную температуру в квартирах с централизованными системами отопления. Комплектуется защитным покрытием от коррозии.',
    ctaLabel: 'Выбрать радиатор',
    href: '/radiators',
  },
  {
    id: 'caliente',
    title: 'CALIENTE',
    tagline: 'Сервис и монтаж',
    image: '/Storis/Caliente.jpg',
    summary:
      'Комплексное сопровождение котельного оборудования для частных резиденций.',
    description:
      'Команда AKFA Comfort спроектировала котельную CALIENTE под индивидуальные требования заказчика: подобрали котлы, настроили автоматику и обучили эксплуатационную службу.',
    ctaLabel: 'Связаться со специалистами',
    href: '/contact',
  },
  {
    id: 'andromeda',
    title: 'ANDROMEDA',
    tagline: 'Дизайнерские решения',
    image: '/Storis/Andromeda.jpg',
    summary:
      'Премиальная интеграция дизайнерских радиаторов в жилой комплекс бизнес-класса.',
    description:
      'Мы обеспечили проект Andromeda полноценным теплотехническим сопровождением: подобрали радиаторы под архитектурную концепцию, рассчитали теплопотери и выстроили сервисную поддержку для управляющей компании.',
    ctaLabel: 'Посмотреть радиаторы',
    href: '/radiators',
  },
  {
    id: 'avangard',
    title: 'AVANGARD',
    tagline: 'Секционные радиаторы',
    image: '/Storis/Avangard.jpg',
    summary:
      'Флагманские секционные модели для систем центрального и автономного отопления.',
    description:
      'AKFA AVANGARD сочетает высокую теплоотдачу и стойкость к перепадам давления. Алюминиево-биметаллическая конструкция обеспечивает долгий срок службы даже в сложных сетях.',
    ctaLabel: 'Перейти к AVANGARD',
    href: '/radiators/sectional',
  },
  {
    id: 'bimetall',
    title: 'BIMETALL',
    tagline: 'Решение для высоток',
    image: '/Storis/Bimetall.jpg',
    summary:
      'Радиаторы с усиленной внутренней стальной колбой для высотного строительства.',
    description:
      'Серия BIMETALL выдерживает высокое рабочее давление и обеспечивает комфортную температуру в квартирах с централизованными системами отопления. Комплектуется защитным покрытием от коррозии.',
    ctaLabel: 'Выбрать радиатор',
    href: '/radiators',
  },
];

export default function StoriesSlider() {
  const [activeStory, setActiveStory] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const sliderRef = useRef(null);

  const openStory = (story) => {
    setActiveStory(story);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveStory(null);
  };

  const scrollStories = (direction) => {
    const node = sliderRef.current;
    if (!node) return;

    const scrollAmount = node.clientWidth * 0.8;
    node.scrollTo({
      left: node.scrollLeft + scrollAmount * direction,
      behavior: 'smooth',
    });
  };

  return (
    <section className="stories-section">
      <div className="container stories-wrapper">
        <div className="stories-header">
          <div>
            <span className="stories-eyebrow">#Сторис</span>
            <h2>АКТУАЛЬНЫЕ НОВОСТИ</h2>
          </div>
          <div className="stories-controls">
            <button
              type="button"
              className="stories-arrow stories-arrow-left"
              onClick={() => scrollStories(-1)}
              aria-label="Прокрутить назад"
            >
              ←
            </button>
            <button
              type="button"
              className="stories-arrow stories-arrow-right"
              onClick={() => scrollStories(1)}
              aria-label="Прокрутить вперёд"
            >
              →
            </button>
          </div>
        </div>

        <div
          className="stories-slider"
          ref={sliderRef}
        >
          {stories.map((story) => (
            <motion.button
              key={story.id}
              type="button"
              className="story-card"
              onClick={() => openStory(story)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="story-image-wrapper">
                <img
                  src={story.image}
                  alt={story.title}
                />
                <div className="story-card-overlay">
                  <span className="story-title">{story.title}</span>
                  <span className="story-tagline">{story.tagline}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && activeStory && (
          <motion.div
            className="story-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="story-modal"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="story-modal-close"
                onClick={closeModal}
                aria-label="Закрыть сторис"
              >
                ×
              </button>

              <div className="story-modal-image">
                <img
                  src={activeStory.image}
                  alt={activeStory.title}
                />
              </div>

              <div className="story-modal-content">
                <span className="story-modal-tagline">
                  {activeStory.tagline}
                </span>
                <h3>{activeStory.title}</h3>
                <p className="story-modal-summary">{activeStory.summary}</p>
                <p className="story-modal-description">
                  {activeStory.description}
                </p>
                <Link
                  href={activeStory.href}
                  className="story-modal-link"
                >
                  {activeStory.ctaLabel}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
