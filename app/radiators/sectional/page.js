'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa';
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

const infoContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const infoItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const benefitRows = [
  {
    left: '01',
    title: 'Высокая теплоотдача',
    desc: 'При относительно малых размерах секций и оптимальной конструкции.',
  },
  {
    left: '02',
    title: 'Гибкость монтажа',
    desc: 'Лёгкий вес и возможность менять количество секций на месте.',
  },
  {
    left: '03',
    title: 'Чистый контур',
    desc: 'Большое сечение межсекционных трубок снижает риск засорения.',
  },
  {
    left: '04',
    title: 'Быстрый отклик',
    desc: 'Моментально реагируют на изменение температуры теплоносителя.',
  },
  {
    left: '05',
    title: 'Выгодное соотношение',
    desc: 'Сбалансированы по цене и тепловой мощности для разных задач.',
  },
  {
    left: '06',
    title: 'Долговечность',
    desc: 'Стойкое порошковое покрытие и современный внешний вид.',
  },
];

const products = [
  {
    id: 1,
    name: 'MONZA',
    description:
      'Алюминиевые радиаторы отопления Monza идеально подойдут для отопления частного дома или коттеджа. Отличные показатели теплоотдачи секций, компактность и универсальный дизайн гарантируют комфорт и уют в вашем доме.',
    specs: [
      'Высота секции: 575 мм',
      'Длина секции: 81 мм',
      'Масса секции:	1200гр',
      'Рабочее давление:	24 бар',
      'Номинальный тепловой поток:	201 w',
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
    description:
      'Радиаторы Avangard отличаются не только отличной теплоотдачей, но и лаконичным строгим дизайном, благодаря которому они органично впишутся в интерьер вашего помещения.',
    specs: [
      'Высота секции:	550 мм',
      'Длина секции:	80 мм',
      'Масса секции:	1760гр',
      'Рабочее давление:	30 бар',
      'Номинальный тепловой поток:	178 w',
    ],
    images: [
      '/avangard/1.avif',
      '/avangard/2.avif',
      '/avangard/3.avif',
      '/avangard/4.avif',
    ],
  },
  {
    id: 3,
    name: 'CLASSIC 350',
    description: `Алюминиевые радиаторы Classic 350 разработаны в 2 размерах, это удобно для домов или коттеджей с большими окнами.
Радиаторы AKFA создадут теплую атмосферу в вашем доме и подойдут практически к любому интерьеру`,
    specs: [
      'Высота секции:	422 мм',
      'Длина секции:	80 мм',
      'Масса секции:	900 гр',
      'Рабочее давление:	24 бар',
      'Номинальный тепловой поток:	162 w',
    ],
    images: [
      '/classic350/1.avif',
      '/classic350/2.avif',
      '/classic350/3.avif',
      '/classic350/4.avif',
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
      '/classic500/1.avif',
      '/classic500/2.avif',
      '/classic500/3.avif',
      '/classic500/4.avif',
    ],
  },
  {
    id: 5,
    name: 'CALIENTE',
    description:
      'Алюминиевый радиатор CALIENTE – новое предложение в сегменте радиаторов отопления на рынке Узбекистана. Модель CALIENTE выделяется среди аналогов уникальным аэродинамическим дизайном и повышенной теплоотдачей.\n\nВысокое качество и надёжность прибора подтверждаются фирменной гарантией – 10 лет.',
    specs: [
      'Высота секции: 500мм',
      'Длина секции: 80мм',
      'Масса секции: 1200гр',
      'Рабочее давление: 24 бар',
      'Номинальный тепловой поток: 200 w',
    ],
    images: [
      '/classic500/1.avif',
      '/classic500/2.avif',
      '/classic500/3.avif',
      '/classic500/4.avif',
    ],
  },
  {
    id: 6,
    name: 'BENEVENTO',
    description:
      'Биметаллический радиатор Benevento предназначен для использования, особенно, в многоэтажных сооружениях, благодаря способности работать при более высоком рабочем давлении и при более высоком pH теплоносителя, по сравнению с алюминиевым радиатором.',
    specs: [
      'Высота секции:	550 мм',
      'Длина секции: 80мм',
      'Масса секции: 1.5кг',
      'Рабочее давление: 24 бар',
      'Номинальный тепловой поток: 190 w',
    ],
    images: ['/benevento/1.avif'],
  },
  {
    id: 7,
    name: 'BENEVENTO LITE',
    description:
      'Новый радиатор Benevento Lite отличается высокой теплоотдачей и простотой установки благодаря своей легкой алюминиевой конструкции. Он также экономичен в использовании и имеет современный дизайн, который легко вписывается в любой интерьер.',
    specs: [
      'Высота секции:	550 мм',
      'Длина секции: 80мм',
      'Масса секции: 800 гр',
      'Рабочее давление: 24 бар',
      'Номинальный тепловой поток: 165 w',
    ],
    images: ['/benevento/2.avif'],
  },
  {
    id: 8,
    name: 'ETERNO',
    description:
      'Алюминиевый радиатор для любых систем отопления с уникальным аэродинамическим дизайном и высокой теплоотдачей. Полностью алюминиевый коллектор нового поколения.',
    specs: [
      'Высота секции:	575 мм',
      'Длина секции: 80мм',
      'Масса секции: 1 кг',
      'Рабочее давление: 24 бар',
      'Номинальный тепловой поток: 195 w',
    ],
    images: ['/benevento/3.avif'],
  },
  {
    id: 9,
    name: 'ETERNO LITE',
    description:
      'Биметаллический радиатор Eterno lite – это полностью биметаллический дизайн-радиатор для создания собственного неповторимого интерьера. \n\nУникальная конструкция расположенных секций обеспечивает эффект конвекции, увеличивая теплоотдачу радиатора, а воздух при движении вдоль секции нагревается максимально эффективно.',
    specs: [
      'Высота секции:	550 мм',
      'Длина секции: 80мм',
      'Масса секции: 1 кг',
      'Рабочее давление: 30 бар',
      'Номинальный тепловой поток: 165 w',
    ],
    images: ['/benevento/4.avif'],
  },
  {
    id: 10,
    name: 'ANDROMEDA',
    description:
      'Усиливая современный декор, современные дизайнерские радиаторы отопления также добавляют стильный штрих к традиционным домам.\n Используя новейшие технологии обогрева, а также стильный дизайн, современные отопительные приборы предназначены для воздействия на окружающую среду.',
    specs: [
      'Высота секции:	575 мм',
      'Длина секции: 81 мм',
      'Масса секции: 1.2 кг',
      'Рабочее давление: 24 бар',
      'Номинальный тепловой поток: 201 w',
    ],
    images: ['/andromeda/1.avif'],
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
    <>
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
            Оптимальное соотношение надёжности и теплоотдачи. Подходит для жилых
            и коммерческих помещений.
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
                {(() => {
                  const isExpanded = expandedId === product.id;
                  return (
                    <button
                      className="product-header-button"
                      onClick={() => toggleExpand(product.id)}
                    >
                      <div className="product-title-row">
                        <h3>{product.name}</h3>
                        <div className="product-title-meta">
                          <span
                            className={`product-toggle-hint ${
                              isExpanded ? 'active' : ''
                            }`}
                          >
                            {isExpanded ? 'Свернуть' : 'Раскрыть'}
                          </span>
                          <FaChevronDown
                            className={`product-toggle-icon ${
                              isExpanded ? 'rotated' : ''
                            }`}
                          />
                          <span className="product-number">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })()}

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
                  {(() => {
                    const descriptionLines = product.description.split('\n');
                    return (
                      <p className="description">
                        {descriptionLines.map((line, idx) => (
                          <span key={idx}>
                            {line}
                            {idx < descriptionLines.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    );
                  })()}

                  <ul className="specs">
                    {product.specs.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                  <button
                    className="btn btn-secondary"
                    onClick={() => openModal(product.name)}
                  >
                    Свяжитесь с нами
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

      <motion.section
        className="sectional-info"
        variants={infoContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-120px 0px -120px 0px' }}
      >
        <div className="container">
          <motion.div
            className="sectional-info__eyebrow-row"
            variants={infoItemVariants}
          >
            <h2 className="sectional-info__eyebrow">Секционный радиатор</h2>
          </motion.div>

          <motion.p
            className="sectional-info__intro"
            variants={infoItemVariants}
          >
            Если вы являетесь владельцем частного дома, то алюминиевые
            секционные радиаторы будут лучшим решением для отопления дома.
            Легкие и красивые, они органично впишутся в любой интерьер, наполнив
            дом теплом в пять раз быстрее, чем радиаторы другого типа.
          </motion.p>

          <motion.h3
            className="sectional-info__title"
            variants={infoItemVariants}
          >
            Среди главных преимуществ алюминиевых секционных радиаторов:
          </motion.h3>

          <motion.ul
            className="sectional-info__list"
            variants={infoItemVariants}
          >
            {[
              'Высокая теплоотдача при относительно малых размерах;',
              'Малый вес, обеспечивающий возможность самостоятельного монтажа;',
              'Возможность изменения количества секций прямо на месте монтажа;',
              'Большое сечение межсекционных трубок, предотвращающих засорение радиатора;',
              'Быстрый отклик на изменение температуры теплоносителя;',
              'Оптимальное соотношение цены и тепловой мощности;',
              'Современный внешний вид;',
              'Стойкое порошковое покрытие;',
              'Отсутствие скопления пыли между секциями.',
            ].map((point) => (
              <motion.li
                key={point}
                variants={infoItemVariants}
              >
                {point}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            className="sectional-info__note"
            variants={infoItemVariants}
          >
            Алюминиевые секционные радиаторы восприимчивы к гидроударам и
            недостаточно высокому качеству теплоносителя, которые наблюдаются в
            многоквартирных домах. Поэтому они более подходят для автономных
            систем отопления частных домов. При этом в процессе эксплуатации
            необходимо поддерживать уровень pH теплоносителя на уровне от 7,0 до
            8,0.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        className="sectional-stats"
        variants={infoContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-120px 0px -120px 0px' }}
      ></motion.section>
    </>
  );
}
