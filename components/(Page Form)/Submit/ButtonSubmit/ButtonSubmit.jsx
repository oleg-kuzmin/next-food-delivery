'use client';
// import { useSelector } from 'react-redux';
// import Link from 'next/link';
import styles from './ButtonSubmit.module.scss';

export default function ButtonSubmit({ className }) {
  // const reduxBasket = useSelector(state => state.basket);
  // const isValidLink = reduxBasket.basket.length > 0;
  const classElement = className ? ` ${className}` : '';
  // const handleClick = evt => {};

  return (
    <button className={styles.ButtonSubmit + classElement + ' ui-green'} type="submit">
      Оформить заказ
    </button>
  );
}
