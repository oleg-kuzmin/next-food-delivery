import LinkBack from '@/components/LinkBack/LinkBack';
import BlockTitle from '@/components/BlockTitle/BlockTitle';
import Contacts from './Contacts/Contacts';
import Delivery from './Delivery/Delivery';
import Payment from './Payment/Payment';
import Time from './Time/Time';
import styles from './Main.module.scss';

export default function Main() {
  return (
    <main className={styles.Main}>
      <LinkBack className={styles.Main__LinkBack} text="в корзину" href="/basket" />
      <BlockTitle className={styles.Main__BlockTitle} text="oформление заказа" />
      <form className={styles.Main__Form}>
        <Contacts className={styles.Main__Contacts} />
        <Delivery className={styles.Main__Delivery} />
        <Payment className={styles.Main__Payment} />
        <Time className={styles.Main__Time} />
      </form>
    </main>
  );
}
