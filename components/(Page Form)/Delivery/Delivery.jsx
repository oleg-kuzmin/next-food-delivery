import Section from '../Section/Section';
import Title from '../Title/Title';
import InputRadio from '../InputRadio/InputRadio';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import styles from './Delivery.module.scss';

export default function Delivery() {
  return (
    <Section>
      <div className={styles.Delivery}>
        <Title className={styles.Delivery__Title} text="2. Доставка" />
        <div className={styles.Delivery__FlexRow}>
          <fieldset className={styles.Delivery__Fieldset}>
            <InputRadio name="delivery" id="deliveryTrue" text="Доставка" defaultChecked />
            <InputRadio name="delivery" id="deliveryFalse" text="Самовывоз" />
          </fieldset>
          <DeliveryInfo />
        </div>
      </div>
    </Section>
  );
}
