import Section from '../Section/Section';
import RadioConfirm from './RadioConfirm/RadioConfirm';
import ButtonSubmit from './ButtonSubmit/ButtonSubmit';
import styles from './Submit.module.scss';

export default function Submit() {
  return (
    <Section className={styles.Submit}>
      <RadioConfirm className={styles.Submit__RadioConfirm} />
      <ButtonSubmit className={styles.Submit__Button} />
    </Section>
  );
}
