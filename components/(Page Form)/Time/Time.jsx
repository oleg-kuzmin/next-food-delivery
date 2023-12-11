'use client';
import { useState } from 'react';
import Section from '../Section/Section';
import Title from '../Title/Title';
import InputTwoRadio from '../InputTwoRadio/InputTwoRadio';
import InputTime from '../InputTime/InputTime';
import styles from './Time.module.scss';

export default function Time() {
  const [isVisibleInputTime, setIsVisibleInputTime] = useState(false);

  const handleChange = evt => {
    if (evt.target.value === 'true') {
      setIsVisibleInputTime(false);
    } else {
      setIsVisibleInputTime(true);
    }
  };

  return (
    <Section className={styles.Time}>
      <Title className={styles.Time__Title} text="4. Когда доставить" />
      <div className={styles.Time__FlexRow}>
        <InputTwoRadio
          name="fastShipping"
          value1={true}
          value2={false}
          id1="fastShippingTrue"
          id2="fastShippingFalse"
          text1="В ближайшее время"
          text2="Ко времени"
          onChange={handleChange}
        />
        {isVisibleInputTime && <InputTime className={styles.Time__InputTime} name="timeDelivery" required />}
      </div>
    </Section>
  );
}
