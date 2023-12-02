import ContactsTitle from './ContactsTitle/ContactsTitle';
import ContactsDecorateLine from './ContactsDecorateLine/ContactsDecorateLine';
import ContactsRow from './ContactsRow/ContactsRow';
import ContactsReservation from './ContactsReservation/ContactsReservation';
import ContactsSocial from './ContactsSocial/ContactsSocial';
import styles from './Contacts.module.scss';

//# Contacts
export default function Contacts({ className }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <div className={styles.Contacts + classElement}>
      <ContactsTitle />
      <ContactsDecorateLine />
      <ContactsRow
        className={styles.Contacts__FirstRow}
        title="Наш адрес:"
        subtitle="МО, городской округ Красногорск, село Ильинкое, Экспериментальная улица, 10"
      />
      <ContactsRow
        className={styles.Contacts__SecondRow}
        title="Наша почта:"
        subtitle="auto.wash@gmail.com"
        icon="mail"
      />
      <ContactsDecorateLine />
      <ContactsReservation />
      <ContactsSocial />
    </div>
  );
}
