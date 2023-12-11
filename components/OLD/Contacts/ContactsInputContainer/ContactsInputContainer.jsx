import InputText from '@/components/(Page Form)/InputText/InputText';
import InputTel from '@/components/(Page Form)/InputTel/InputTel';
import styles from './ContactsInputContainer.module.scss';

export default function ContactsInputContainer({ className }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <div className={styles.ContactsInputContainer + classElement}>
      <InputText name="userName" placeholder="Имя" required />
      <InputTel name="tel" placeholder="Телефон" required />
    </div>
  );
}
