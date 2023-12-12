'use client';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newOrder } from '@/redux/slices/basketSlice';
import getOrderData from '@/utils/getOrderData';
import AdditionalOrderImage from './AdditionalOrderImage/AdditionalOrderImage';
import AdditionalOrderText from './AdditionalOrderText/AdditionalOrderText';
import AdditionalOrderUi from './AdditionalOrderUi/AdditionalOrderUi';
import styles from './AdditionalOrder.module.scss';

export default function AdditionalOrder({ object }) {
  const [order, setOrder] = useState({
    id: object.id,
    price: object.price,
    image: object.image,
    title: object.title,
    description: object.description,
    counter: object.counter,
  });

  const dispatch = useDispatch();
  const reduxBasket = useSelector(state => state.basket);
  const orderData = getOrderData(object.id, reduxBasket);

  useEffect(() => {
    if (orderData) {
      setOrder(orderData);
    } else {
      setOrder(object);
    }
  }, [orderData, object]);

  const handleButtonPlus = () => {
    dispatch(newOrder({ ...order, counter: order.counter + 1 }));
  };

  return (
    <div className={styles.AdditionalOrder}>
      <AdditionalOrderImage className={styles.AdditionalOrder__Image} src={object.image} />
      <AdditionalOrderText className={styles.AdditionalOrder__Text} title={object.title} />
      <AdditionalOrderUi className={styles.AdditionalOrder__Ui} price={object.price} onPlus={handleButtonPlus} />
    </div>
  );
}
