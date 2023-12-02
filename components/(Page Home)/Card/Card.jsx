'use client';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newOrder, deleteOrder } from '@/redux/slices/basketSlice';
import getOrderData from '@/utils/getOrderData';
import insertSpacesInSum from '@/utils/insertSpacesInSum';
import CardImage from './CardImage/CardImage';
import CardHead from './CardHead/CardHead';
import CardDescription from './CardDescription/CardDescription';
import CardFooter from './CardFooter/CardFooter';
import CardCounter from './CardCounter/CardCounter';
import styles from './Card.module.scss';

export default function Card({ objectCard, priority = false }) {
  const [cardOrder, setCardOrder] = useState({
    id: objectCard.id,
    price: objectCard.price,
    image: objectCard.image,
    title: objectCard.title,
    description: objectCard.description,
    counter: objectCard.counter,
    weight: objectCard.weight,
    type: objectCard.type,
  });

  const dispatch = useDispatch();
  const reduxBasket = useSelector(state => state.basket);
  const orderData = getOrderData(cardOrder.id, reduxBasket.basket);

  useEffect(() => {
    if (orderData) {
      setCardOrder(orderData);
    } else {
      setCardOrder(objectCard);
    }
  }, [orderData, objectCard]);

  const handleButtonPlus = () => {
    dispatch(newOrder({ ...cardOrder, counter: cardOrder.counter + 1 }));
  };

  const handleButtonMinus = () => {
    if (cardOrder.counter - 1 > 0) {
      dispatch(newOrder({ ...cardOrder, counter: cardOrder.counter - 1 }));
    } else {
      dispatch(deleteOrder({ id: cardOrder.id }));
    }
  };

  const isActive = cardOrder.counter > 0;
  const price = isActive ? objectCard.price * cardOrder.counter : objectCard.price;
  const priceText = insertSpacesInSum(price);

  return (
    <article className={styles.Card}>
      <CardImage src={cardOrder.image} priority={priority} alt={cardOrder.title} />
      <CardHead title={cardOrder.title} weight={cardOrder.weight} />
      <CardDescription description={cardOrder.description} />
      <CardFooter price={priceText} isActive={isActive} onPlus={handleButtonPlus} onMinus={handleButtonMinus} />
      <CardCounter counter={cardOrder.counter} isActive={isActive} />
    </article>
  );
}
