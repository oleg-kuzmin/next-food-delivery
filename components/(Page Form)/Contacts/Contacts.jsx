import Section from '../Section/Section';
import Title from '../Title/Title';
import InputContainer from './InputContainer/InputContainer';
import InputText from '../InputText/InputText';
import InputTel from '../InputTel/InputTel';
import styles from './Contacts.module.scss';

export default function Contacts({ className, userName, tel }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <Section className={styles.Contacts + classElement}>
      <Title className={styles.Contacts__Title} text="1. Контактная информация" />
      <InputContainer className={styles.Contacts__InputContainer}>
        <InputText name="userName" placeholder="Имя" required initialValue={userName} />
        <InputTel name="tel" placeholder="Телефон" required initialValue={tel} />
      </InputContainer>
    </Section>
  );
}
