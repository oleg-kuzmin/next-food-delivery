import LinkBack from '@/components/LinkBack/LinkBack';
import Title from './Title/Title';
import Orders from './Orders/Orders';
import AdditionalTitle from './AdditionalTitle/AdditionalTitle';
import AdditionalOrders from './AdditionalOrders/AdditionalOrders';
import DecorateLine from './DecorateLine/DecorateLine';
import TotalPrice from './TotalPrice/TotalPrice';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import styles from './Main.module.scss';

export default function Main() {
  return (
    <main className={styles.Main}>
      <ScrollToTop />
      <LinkBack className={styles.Main__LinkBack} text="к выбору блюда" href="/#navigation" />
      <Title className={styles.Main__Title} />
      <Orders className={styles.Main__Orders} />
      <AdditionalTitle className={styles.Main__AdditionalTitle} />
      <AdditionalOrders className={styles.Main__AdditionalOrders} />
      <DecorateLine className={styles.Main__DecorateLine} />
      <TotalPrice className={styles.Main__TotalPrice} />
    </main>
  );
}
