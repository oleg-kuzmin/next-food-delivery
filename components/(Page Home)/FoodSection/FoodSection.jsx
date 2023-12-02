'use client';
import { useEffect, useState } from 'react';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import BlockTitle from '@/components/BlockTitle/BlockTitle';
import Card from '../Card/Card';
import styles from './FoodSection.module.scss';

export default function FoodSection({ title, id, data, priority }) {
  const [documentContainer, setDocumentContainer] = useState(null);

  useEffect(() => {
    setDocumentContainer(document.body);
  }, [documentContainer]);

  const swiperConfigDesktop = {
    className: styles.FoodSection__Swiper,
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    modules: [FreeMode],
  };

  const swiperConfigMobile = {
    className: styles.FoodSection__Swiper,
    slidesPerView: 'auto',
    spaceBetween: 0,
    slidesPerGroup: 1,
    centeredSlides: true,
    pagination: true,
    modules: [Pagination],
    breakpoints: {
      690: {
        slidesPerView: 'auto',
        slidesPerGroup: 2,
        centeredSlides: false,
      },
    },
  };

  const getSwiperConfig = width => (width >= 1024 ? swiperConfigDesktop : swiperConfigMobile);
  const swiperConfig = documentContainer !== null ? getSwiperConfig(documentContainer.clientWidth) : '';

  const cardsArray = data.map(objectCard => {
    return (
      <SwiperSlide className={styles.FoodSection__SwiperSlide} key={objectCard.id}>
        <Card objectCard={objectCard} priority={priority} />
      </SwiperSlide>
    );
  });

  return (
    documentContainer !== null && (
      <section className={styles.FoodSection} id={id}>
        <BlockTitle className={styles.FoodSection__Title}>{title}</BlockTitle>
        <Swiper {...swiperConfig}>{cardsArray}</Swiper>
      </section>
    )
  );
}
