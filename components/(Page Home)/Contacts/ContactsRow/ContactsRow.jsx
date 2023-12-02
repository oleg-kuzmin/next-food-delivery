import styles from './ContactsRow.module.scss';

export default function ContactsRow({ title, subtitle, icon, className }) {
  const classElement = className ? ` ${className}` : '';
  const classIconModifier =
    icon === 'mail' ? ` ${styles.ContactsRow__Icon_bg_mail}` : ` ${styles.ContactsRow__Icon_bg_location}`;
  return (
    <div className={styles.ContactsRow + classElement}>
      <div className={styles.ContactsRow__Icon + classIconModifier}></div>
      <address className={styles.ContactsRow__Address}>
        <span className={styles.ContactsRow__Title}>{title}</span>
        <p className={styles.ContactsRow__Subtitle}>{subtitle}</p>
      </address>
    </div>
  );
}
