'use client';
import { useSelector } from 'react-redux';
import LinkBack from '@/components/LinkBack/LinkBack';
import BlockTitle from '@/components/BlockTitle/BlockTitle';
import SucсessContent from './SucсessContent/SucсessContent';
import styles from './Main.module.scss';

export default function Main() {
  const reduxBasket = useSelector(state => state.basket);
  const reduxUser = useSelector(state => state.user);
  const result = { ...reduxUser };
  if (reduxBasket.length > 0) {
    result.basket = reduxBasket;
  }

  return (
    <main className={styles.Main}>
      <LinkBack className={styles.Main__LinkBack} text="вернуться на главную" href="/" />
      <BlockTitle className={styles.Main__BlockTitle} text="Ваш заказ создан" />
      <SucсessContent className={styles.Main__SucсessContent} object={result} />
    </main>
  );
}
