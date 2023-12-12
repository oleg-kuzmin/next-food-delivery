'use client';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import sumOrders from '@/utils/sumOrders';
import NavigationContainer from './NavigationContainer/NavigationContainer';
import NavigationElement from './NavigationElement/NavigationElement';
import NavigationCover from './NavigationCover/NavigationCover';
import styles from './Navigation.module.scss';

export default function Navigation() {
  const [nameActiveLink, setNameActiveLink] = useState('');
  const [visibleBasketDesktop, setVisibleBasketDesktop] = useState(false);
  const reduxState = useSelector(state => state.basket);
  const counterOrders = sumOrders(reduxState);

  useEffect(() => {
    if (counterOrders > 0 && document.documentElement.scrollTop >= 99) {
      setVisibleBasketDesktop(true);
    } else if (counterOrders === 0) {
      setVisibleBasketDesktop(false);
    }
    const handleScroll = () => {
      if (counterOrders > 0 && document.documentElement.scrollTop >= 99) {
        setVisibleBasketDesktop(true);
      } else {
        setVisibleBasketDesktop(false);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [counterOrders]);

  const handleClickLink = href => {
    setNameActiveLink(href);
  };

  const swiperConfig = {
    className: styles.Navigation__Swiper,
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    modules: [FreeMode],
  };

  return (
    <NavigationContainer visibleBasketDesktop={visibleBasketDesktop}>
      <nav className={styles.Navigation} id="navigation">
        <Swiper {...swiperConfig}>
          <SwiperSlide className={styles.Navigation__SwiperSlide}>
            <NavigationElement href="/#coldAppetizers" onClick={handleClickLink} nameActiveLink={nameActiveLink}>
              Холодные закуски
            </NavigationElement>
          </SwiperSlide>
          <SwiperSlide className={styles.Navigation__SwiperSlide}>
            <NavigationElement href="/#hotAppetizers" onClick={handleClickLink} nameActiveLink={nameActiveLink}>
              Горячие закуски
            </NavigationElement>
          </SwiperSlide>
          <SwiperSlide className={styles.Navigation__SwiperSlide}>
            <NavigationElement href="/#meatDishes" onClick={handleClickLink} nameActiveLink={nameActiveLink}>
              Мясные блюда
            </NavigationElement>
          </SwiperSlide>
          <SwiperSlide className={styles.Navigation__SwiperSlide}>
            <NavigationElement href="/#soups" onClick={handleClickLink} nameActiveLink={nameActiveLink}>
              Супы
            </NavigationElement>
          </SwiperSlide>
          <SwiperSlide className={styles.Navigation__SwiperSlide}>
            <NavigationElement href="/#fishDishes" onClick={handleClickLink} nameActiveLink={nameActiveLink}>
              Рыбные блюда
            </NavigationElement>
          </SwiperSlide>
          <SwiperSlide className={styles.Navigation__SwiperSlide}>
            <NavigationElement href="/#grillDishes" onClick={handleClickLink} nameActiveLink={nameActiveLink}>
              Гриль меню
            </NavigationElement>
          </SwiperSlide>
          <SwiperSlide className={styles.Navigation__SwiperSlide}>
            <NavigationElement href="/#brandedDishes" onClick={handleClickLink} nameActiveLink={nameActiveLink}>
              Фирменные блюда
            </NavigationElement>
          </SwiperSlide>
          <SwiperSlide className={styles.Navigation__SwiperSlide}>
            <NavigationElement href="/#drinks" onClick={handleClickLink} nameActiveLink={nameActiveLink}>
              Напитки
            </NavigationElement>
          </SwiperSlide>
        </Swiper>
        <NavigationCover />
      </nav>
    </NavigationContainer>
  );
}
