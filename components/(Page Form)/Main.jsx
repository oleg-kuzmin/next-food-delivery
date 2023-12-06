import LinkBack from '@/components/LinkBack/LinkBack';
import BlockTitle from '@/components/BlockTitle/BlockTitle';
import Section from './Section/Section';
import InputContainer from './InputContainer/InputContainer';
import InputText from './InputText/InputText';
import InputTel from './InputTel/InputTel';
import styles from './Main.module.scss';

export default function Main() {
  return (
    <main className={styles.Main}>
      <LinkBack className={styles.Main__LinkBack} text="в корзину" href="/basket" />
      <BlockTitle className={styles.Main__BlockTitle}>oформление заказа</BlockTitle>
      <form className={styles.Main__Column} id="form-delivery">
        <Section>
          <InputContainer className={styles.Main__InputContainer}>
            <InputText name="userName" placeholder="Имя" required />
            <InputTel name="tel" placeholder="Телефон" required />
          </InputContainer>
        </Section>
      </form>
    </main>
  );
}
