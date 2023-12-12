'use client';
import { useSelector } from 'react-redux';
import sumOrders from '@/utils/sumOrders';
import styles from './TitleCounter.module.scss';

export default function TitleCounter({ className }) {
  const classElement = className ? ` ${className}` : '';
  const reduxBasket = useSelector(state => state.basket);
  const counterOrders = sumOrders(reduxBasket);
  const isActive = counterOrders > 0;

  const getTextContent = number => {
    if (number === 1) {
      return `(в корзине ${number} товар)`;
    } else if (number > 4) {
      return `(в корзине ${number} товаров)`;
    } else {
      return `(в корзине ${number} товара)`;
    }
  };

  return isActive && <span className={styles.TitleCounter + classElement}>{getTextContent(counterOrders)}</span>;
}
