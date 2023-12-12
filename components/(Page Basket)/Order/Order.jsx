'use client';
import { useDispatch } from 'react-redux';
import { deleteOrder, newOrder } from '@/redux/slices/basketSlice';
import { useState } from 'react';
import OrderImage from './OrderImage/OrderImage';
import OrderText from './OrderText/OrderText';
import OrderUi from './OrderUi/OrderUi';
import styles from './Order.module.scss';

export default function Order({ object }) {
  const [animateClass, setAnimateClass] = useState(' animate-light-speed-in-left-slow');
  const dispatch = useDispatch();

  const deleteFunction = () => {
    setAnimateClass(' animate-light-speed-out-left-slow');
    setTimeout(dispatch, 300, deleteOrder({ id: object.id }));
  };

  const handleButtonClose = () => {
    deleteFunction();
  };

  const handleButtonPlus = () => {
    dispatch(newOrder({ ...object, counter: object.counter + 1 }));
  };

  const handleButtonMinus = () => {
    if (object.counter - 1 > 0) {
      dispatch(newOrder({ ...object, counter: object.counter - 1 }));
    } else {
      deleteFunction();
    }
  };

  return (
    <div className={styles.Order + animateClass}>
      <OrderImage className={styles.Order__Image} src={object.image} />
      <OrderText className={styles.Order__Text} title={object.title} subtitle={object.description} />
      <OrderUi
        className={styles.Order__Ui}
        price={object.price}
        counter={object.counter}
        onClose={handleButtonClose}
        onPlus={handleButtonPlus}
        onMinus={handleButtonMinus}
      />
    </div>
  );
}
