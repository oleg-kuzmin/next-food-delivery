import LinkBack from '@/components/LinkBack/LinkBack';
import BlockTitle from '@/components/BlockTitle/BlockTitle';
import Form from './Form/Form';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import styles from './Main.module.scss';

export default function Main() {
  return (
    <main className={styles.Main}>
      <ScrollToTop />
      <LinkBack className={styles.Main__LinkBack} text="в корзину" href="/basket" />
      <BlockTitle className={styles.Main__BlockTitle} text="oформление заказа" />
      <Form />
    </main>
  );
}
