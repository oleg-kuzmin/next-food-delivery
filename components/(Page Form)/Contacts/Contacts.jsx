import Section from '../Section/Section';
import Title from '../Title/Title';
import InputText from '../InputText/InputText';
import InputTel from '../InputTel/InputTel';
import styles from './Contacts.module.scss';

export default function Contacts() {
  return (
    <Section className={styles.Section}>
      <div className={styles.Contacts}>
        <Title className={styles.Contacts__Title} text="1. Контактная информация" />
        <fieldset className={styles.Contacts__Fieldset}>
          <InputText name="userName" placeholder="Имя" required />
          <InputTel name="tel" placeholder="Телефон" required />
        </fieldset>
      </div>
    </Section>
  );
}
