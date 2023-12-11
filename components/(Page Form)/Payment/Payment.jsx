import Section from '../Section/Section';
import Title from '../Title/Title';
import styles from './Payment.module.scss';

export default function Payment({ className }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <Section className={styles.Payment + classElement}>
      <Title className={styles.Payment__Title} text="3. Оплатить" />
    </Section>
  );
}
