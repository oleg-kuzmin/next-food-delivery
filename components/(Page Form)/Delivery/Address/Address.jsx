import InputText from '@/components/(Page Form)/InputText/InputText';
import styles from './Address.module.scss';

export default function Address({ className }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <div className={styles.Address + classElement}>
      <InputText className={styles.Address__Street} name="addressStreet" placeholder="Укажите улицу" required />
      <InputText className={styles.Address__House} name="addressHouse" placeholder="Номер дома" required />
      <InputText className={styles.Address__Appartment} name="addressAppartment" placeholder="№ квартиры/офиса" />
      <InputText className={styles.Address__Entrance} name="addressEntrance" placeholder="Подъезд" />
      <InputText className={styles.Address__Floor} name="addressFloor" placeholder="Этаж" />
      <InputText className={styles.Address__Comments} name="addressComments" placeholder="Комментарий" />
    </div>
  );
}
