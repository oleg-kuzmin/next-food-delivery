import Section from '../Section/Section';
import Title from '../Title/Title';
import ContactsInputContainer from './ContactsInputContainer/ContactsInputContainer';
import styles from './Contacts.module.scss';

export default function Contacts() {
  return (
    <Section className={styles.Section}>
      <div className={styles.Contacts}>
        <Title className={styles.Contacts__Title} text="1. Контактная информация" />
        <ContactsInputContainer className={styles.Contacts__InputContainer} />
      </div>
    </Section>
  );
}
