'use client';
import { useState } from 'react';
import Section from '../Section/Section';
import Title from '../Title/Title';
import PaymentRadioContainer from './PaymentRadioContainer/PaymentRadioContainer';
import InputText from '@/components/(Page Form)/InputText/InputText';
import styles from './Payment.module.scss';

export default function Payment() {
  const [isVisiblePaymentAmount, setIsVisiblePaymentAmount] = useState(true);

  const handleChangeRadio = evt => {
    if (evt.target.value === 'cash') {
      setIsVisiblePaymentAmount(true);
    } else {
      setIsVisiblePaymentAmount(false);
    }
  };

  return (
    <Section className={styles.Section}>
      <div className={styles.Payment}>
        <Title className={styles.Payment__Title} text="3. Оплатить" />
        <PaymentRadioContainer className={styles.Payment__RadioContainer} onChange={handleChangeRadio} />
        {!isVisiblePaymentAmount && <div className={styles.Payment__Empty}></div>}
        {isVisiblePaymentAmount && (
          <InputText className={styles.Payment__InputText} name="payment-amount" placeholder="Сдача с" />
        )}
      </div>
    </Section>
  );
}
