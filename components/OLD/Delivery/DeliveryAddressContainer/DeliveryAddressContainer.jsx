import InputText from '@/components/(Page Form)/InputText/InputText';
import styles from './DeliveryAddressContainer.module.scss';

export default function DeliveryAddressContainer({ className }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <div className={styles.DeliveryAddressContainer + classElement}>
      <InputText
        className={styles.DeliveryAddressContainer__Street}
        name="address-street"
        placeholder="Укажите улицу"
        required
      />
      <InputText
        className={styles.DeliveryAddressContainer__House}
        name="address-House"
        placeholder="Номер дома"
        required
      />
      <InputText
        className={styles.DeliveryAddressContainer__Appartment}
        name="address-Appartment"
        placeholder="№ квартиры/офиса"
      />
      <InputText className={styles.DeliveryAddressContainer__Entrance} name="address-Entrance" placeholder="Подъезд" />
      <InputText className={styles.DeliveryAddressContainer__Floor} name="address-Floor" placeholder="Этаж" />
      <InputText
        className={styles.DeliveryAddressContainer__Comments}
        name="address-Comments"
        placeholder="Комментарий"
      />
    </div>
  );
}
