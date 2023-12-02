'use client';
import { useSelector } from 'react-redux';
import getSum from '@/utils/getSum';
import TotalPriceResultSum from '../TotalPriceResultSum/TotalPriceResultSum';
import TotalPriceFreeShipping from '../TotalPriceFreeShipping/TotalPriceFreeShipping';
import TotalPriceMinSum from '../TotalPriceMinSum/TotalPriceMinSum';
import styles from './TotalPriceInfo.module.scss';

export default function TotalPriceInfo({ className }) {
  const classElement = className ? ` ${className}` : '';
  const reduxBasket = useSelector(state => state.basket);
  const sum = getSum(reduxBasket.basket);

  return (
    <div className={styles.TotalPriceInfo + classElement}>
      <TotalPriceResultSum value={sum} minSum={1000} />
      <TotalPriceFreeShipping value={sum} minFree={2000} />
      <TotalPriceMinSum value={sum} minSum={1000} />
    </div>
  );
}
