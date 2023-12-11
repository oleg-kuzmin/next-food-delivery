'use client';
import { useState } from 'react';
import Section from '../Section/Section';
import Title from '../Title/Title';
import TitleSmall from '../TitleSmall/TitleSmall';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import DeliveryRadioContainer from './DeliveryRadioContainer/DeliveryRadioContainer';
import DeliveryAddressContainer from './DeliveryAddressContainer/DeliveryAddressContainer';
import styles from './Delivery.module.scss';

export default function Delivery() {
  const [isVisibleInfo, setIsVisibleInfo] = useState(true);

  const handleChangeRadio = evt => {
    if (evt.target.value === 'true') {
      setIsVisibleInfo(true);
    } else {
      setIsVisibleInfo(false);
    }
  };

  return (
    <Section className={styles.Section}>
      <div className={styles.Delivery}>
        <Title className={styles.Delivery__Title} text="2. Доставка" />
        <div className={styles.Delivery__FlexRow}>
          <DeliveryRadioContainer className={styles.Delivery__RadioContainer} onChange={handleChangeRadio} />
          {isVisibleInfo && <DeliveryInfo />}
        </div>
        {isVisibleInfo && <TitleSmall className={styles.Delivery__TitleSmall} text="Адрес доставки" />}
        {isVisibleInfo && <DeliveryAddressContainer className={styles.Delivery__AddressContainer} />}
      </div>
    </Section>
  );
}
