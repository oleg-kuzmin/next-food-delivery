'use client';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Section from '../Section/Section';
import Title from '../Title/Title';
import InputTwoRadio from '../InputTwoRadio/InputTwoRadio';
import Info from './Info/Info';
import TitleSmall from '../TitleSmall/TitleSmall';
import Address from './Address/Address';
import styles from './Delivery.module.scss';

export default function Delivery({ className }) {
  const [isVisibleAddress, setIsVisibleAddress] = useState(true);

  const handleChange = evt => {
    if (evt.target.value === 'true') {
      setIsVisibleAddress(true);
    } else {
      setIsVisibleAddress(false);
    }
  };

  const classElement = className ? ` ${className}` : '';
  return (
    <Section className={styles.Delivery + classElement}>
      <Title className={styles.Delivery__Title} text="2. Доставка" />
      <div className={styles.Delivery__FlexRow}>
        <InputTwoRadio
          name="delivery"
          value1={true}
          value2={false}
          id1="deliveryTrue"
          id2="deliveryFalse"
          text1="Доставка"
          text2="Самовывоз"
          onChange={handleChange}
        />
        {isVisibleAddress && <Info />}
      </div>
      {isVisibleAddress && <TitleSmall className={styles.Delivery__TitleSmall} text="Адрес доставки" />}
      {isVisibleAddress && <Address className={styles.Delivery__Address} />}
    </Section>
  );
}
