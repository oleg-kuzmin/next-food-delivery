import LinkBack from '@/components/LinkBack/LinkBack';
import BlockTitle from '@/components/BlockTitle/BlockTitle';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import DeliveryTerms from './DeliveryTerms/DeliveryTerms';
import InfoFlexContainer from './InfoFlexContainer/InfoFlexContainer';
import InfoBlock from './InfoBlock/InfoBlock';
import styles from './Main.module.scss';

export default function Main() {
  return (
    <main className={styles.Main}>
      <ScrollToTop />
      <LinkBack className={styles.Main__LinkBack} text="вернуться на главную" href="/" />
      <BlockTitle className={styles.Main__BlockTitle} text="Условия доставки" />
      <DeliveryTerms />
      <InfoFlexContainer>
        <InfoBlock title="График работы доставки:" paragraph="с 10:00-21:00" />
        <InfoBlock title="График работы кафе:" paragraph="с 08:00-21:00" />
      </InfoFlexContainer>
      <InfoFlexContainer className={styles.Main__InfoFlexContainer}>
        <InfoBlock
          gapMore
          title="Минимальный заказ:"
          paragraph="Бесплатная доставка пешим курьером при сумме заказа от 400 ₽
Доставка оператором такси от любой суммы заказа - по тарифам
перевозчика."
        />
      </InfoFlexContainer>
    </main>
  );
}
