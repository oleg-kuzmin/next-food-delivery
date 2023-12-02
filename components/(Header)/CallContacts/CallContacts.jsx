import CallContactsTitle from './CallContactsTitle/CallContactsTitle';
import CallContactsNumber from './CallContactsNumber/CallContactsNumber';
import styles from './CallContacts.module.scss';

export default function CallContacts({ className }) {
  const classElement = className ? ` ${className}` : '';

  return (
    <address className={styles.CallContacts + classElement}>
      <CallContactsTitle>Контакты:</CallContactsTitle>
      <CallContactsNumber>+7 (917) 510-57-59</CallContactsNumber>
    </address>
  );
}
