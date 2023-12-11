import InputText from '@/components/(Page Form)/InputText/InputText';
import styles from './Address.module.scss';

export default function Address({ className }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <div className={styles.Address + classElement}>
      <InputText className={styles.Address__Street} name="address-street" placeholder="Укажите улицу" required />
      <InputText className={styles.Address__House} name="address-House" placeholder="Номер дома" required />
      <InputText className={styles.Address__Appartment} name="address-Appartment" placeholder="№ квартиры/офиса" />
      <InputText className={styles.Address__Entrance} name="address-Entrance" placeholder="Подъезд" />
      <InputText className={styles.Address__Floor} name="address-Floor" placeholder="Этаж" />
      <InputText className={styles.Address__Comments} name="address-Comments" placeholder="Комментарий" />
    </div>
  );
}
