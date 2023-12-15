'use client';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBasket } from '@/redux/slices/basketSlice';
import { deleteUser } from '@/redux/slices/userSlice';
import LinkBack from '@/components/LinkBack/LinkBack';
import BlockTitle from '@/components/BlockTitle/BlockTitle';
import SucсessContent from './SucсessContent/SucсessContent';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import styles from './Main.module.scss';

export default function Main() {
  const reduxBasket = useSelector(state => state.basket);
  const reduxUser = useSelector(state => state.user);
  const result = { ...reduxUser };
  if (reduxBasket.length > 0) {
    result.basket = reduxBasket;
  }
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBasket());
    dispatch(deleteUser());
  };

  return (
    <main className={styles.Main}>
      <ScrollToTop />
      <LinkBack className={styles.Main__LinkBack} text="вернуться на главную" href="/" onClick={handleClick} />
      <BlockTitle className={styles.Main__BlockTitle} text="Ваш заказ создан" />
      <SucсessContent className={styles.Main__SucсessContent} object={result} />
    </main>
  );
}
