'use client';
import { useSelector } from 'react-redux';
import Order from '../Order/Order';
import styles from './Orders.module.scss';

export default function Orders({ className }) {
  const classElement = className ? ` ${className}` : '';
  const reduxBasket = useSelector(state => state.basket);
  const reduxOrders = reduxBasket.basket.map(item => {
    return <Order key={item.id} object={item} />;
  });
  return <div className={styles.Orders + classElement}>{reduxOrders}</div>;
}
