'use client';
import { useState } from 'react';
import Section from '../Section/Section';
import Title from '../Title/Title';
import InputTwoRadio from '../InputTwoRadio/InputTwoRadio';
import InputTime from '../InputTime/InputTime';
import InputNumberPersons from '../InputNumberPersons/InputNumberPersons';
import TitleSmall from '../TitleSmall/TitleSmall';
import InputCallRadio from '../InputCallRadio/InputCallRadio';
import styles from './Time.module.scss';

export default function Time({ className }) {
  const [isVisibleInputTime, setIsVisibleInputTime] = useState(false);
  const classElement = className ? ` ${className}` : '';

  const handleChange = evt => {
    if (evt.target.value === 'true') {
      setIsVisibleInputTime(false);
    } else {
      setIsVisibleInputTime(true);
    }
  };

  return (
    <Section className={styles.Time + classElement}>
      <Title className={styles.Time__Title} text="4. Когда доставить" />
      <div className={styles.Time__FlexRow}>
        <InputTwoRadio
          name="shippingFast"
          value1={true}
          value2={false}
          id1="fastShippingTrue"
          id2="fastShippingFalse"
          text1="В ближайшее время"
          text2="Ко времени"
          onChange={handleChange}
        />
        {isVisibleInputTime && <InputTime className={styles.Time__InputTime} name="shippingTime" required />}
      </div>
      <InputNumberPersons className={styles.Time__InputNumberPersons} />
      <TitleSmall className={styles.Time__TitleSmall} text="Хотите мы позвоним?" />
      <InputCallRadio
        className={styles.Time__InputCallRadio}
        name="callMe"
        value1={false}
        value2={true}
        id1="callMeFalse"
        id2="callMeTrue"
        text1="Не перезванивать"
        text2="Потребуется звонок оператора"
      />
    </Section>
  );
}
