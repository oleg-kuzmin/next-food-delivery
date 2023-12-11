'use client';
import { useState } from 'react';
import Section from '../Section/Section';
import Title from '../Title/Title';
import InputThreeRadio from '../InputThreeRadio/InputThreeRadio';
import InputText from '../InputText/InputText';
import styles from './Payment.module.scss';

export default function Payment({ className }) {
  const [isVisibleInputAmount, setIsVisibleInputAmount] = useState(true);

  const classElement = className ? ` ${className}` : '';
  const handleChange = evt => {
    if (evt.target.value === 'cash') {
      setIsVisibleInputAmount(true);
    } else {
      setIsVisibleInputAmount(false);
    }
  };
  return (
    <Section className={styles.Payment + classElement}>
      <Title className={styles.Payment__Title} text="3. Оплатить" />
      <InputThreeRadio
        className={styles.Payment__InputThreeRadio}
        name="payment"
        value1="online"
        value2="card"
        value3="cash"
        id1="paymentOnline"
        id2="paymentCard"
        id3="paymentCash"
        text1="Онлайн"
        text2="Картой"
        text3="Наличными"
        onChange={handleChange}
      />
      {!isVisibleInputAmount && <div className={styles.Payment__EmptyBlock}></div>}
      {isVisibleInputAmount && (
        <InputText className={styles.Payment__InputAmount} name="amount" placeholder="Сдача с" />
      )}
    </Section>
  );
}
