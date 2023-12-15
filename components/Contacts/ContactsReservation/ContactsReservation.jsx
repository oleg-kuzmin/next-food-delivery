import Link from 'next/link';
import styles from './ContactsReservation.module.scss';

export default function ContactsReservation() {
  return (
    <div className={styles.ContactsReservation}>
      <Link className={styles.ContactsReservation__Button + ' ui-green outline-focus'} href="#body">
        забронировать стол
      </Link>
      <Link className={styles.ContactsReservation__Button + ' ui-gray outline-focus'} href="#body">
        проложить маршрут
      </Link>
      <address className={styles.ContactsReservation__Address}>
        <span className={styles.ContactsReservation__Number}>+7 (917) 510-57-59</span>
        <span className={styles.ContactsReservation__Caption}>Звоните или оставляйте заявку</span>
      </address>
    </div>
  );
}
