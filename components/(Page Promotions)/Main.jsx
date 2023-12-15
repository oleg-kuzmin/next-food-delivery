import LinkBack from '@/components/LinkBack/LinkBack';
import BlockTitle from '@/components/BlockTitle/BlockTitle';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import PromotionsGrid from './PromotionsGrid/PromotionsGrid';
import PromotionsCard from './PromotionsCard/PromotionsCard';
import Map from '@/components/Map/Map';
import styles from './Main.module.scss';

export default function Main() {
  return (
    <main className={styles.Main}>
      <ScrollToTop />
      <LinkBack className={styles.Main__LinkBack} text="вернуться на главную" href="/" />
      <BlockTitle className={styles.Main__BlockTitle} text="Акции" />
      <PromotionsGrid>
        <PromotionsCard
          image="/images/promotions/promotions-01.jpg"
          title="Без мяса? Здесь!"
          text="Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат.
            Выберите свой вкус!"
          term="до 31 июля."
        />
        <PromotionsCard
          image="/images/promotions/promotions-02.jpg"
          title="Выгодное комбо c напитками"
          text="Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный
            суп с гренками, Грибной Стартер, Рулетики с сыром,   Картофель из печи, Картофельные оладьи или Греческий
            салат. Выберите свой вкус!"
          term="до 31 июля."
        />
        <PromotionsCard
          image="/images/promotions/promotions-03.jpg"
          title="Сырный бортик"
          text="Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный
            суп с гренками, Грибной Стартер, Рулетики с сыром,   Картофель из печи, Картофельные оладьи или Греческий
            салат. Выберите свой вкус!"
          term="до 31 июля."
        />
        <PromotionsCard
          image="/images/promotions/promotions-02.jpg"
          title="Выгодное комбо c напитками"
          text="Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный
            суп с гренками, Грибной Стартер, Рулетики с сыром,   Картофель из печи, Картофельные оладьи или Греческий
            салат. Выберите свой вкус!"
          term="до 31 июля."
        />
        <PromotionsCard
          image="/images/promotions/promotions-03.jpg"
          title="Сырный бортик"
          text="Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный
            суп с гренками, Грибной Стартер, Рулетики с сыром,   Картофель из печи, Картофельные оладьи или Греческий
            салат. Выберите свой вкус!"
          term="до 31 июля."
        />
        <PromotionsCard
          image="/images/promotions/promotions-01.jpg"
          title="Без мяса? Здесь!"
          text="Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат.
            Выберите свой вкус!"
          term="до 31 июля."
        />
        <PromotionsCard
          image="/images/promotions/promotions-03.jpg"
          title="Сырный бортик"
          text="Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный
            суп с гренками, Грибной Стартер, Рулетики с сыром,   Картофель из печи, Картофельные оладьи или Греческий
            салат. Выберите свой вкус!"
          term="до 31 июля."
        />
        <PromotionsCard
          image="/images/promotions/promotions-01.jpg"
          title="Без мяса? Здесь!"
          text="Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат.
            Выберите свой вкус!"
          term="до 31 июля."
        />
        <PromotionsCard
          image="/images/promotions/promotions-02.jpg"
          title="Выгодное комбо c напитками"
          text="Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный
            суп с гренками, Грибной Стартер, Рулетики с сыром,   Картофель из печи, Картофельные оладьи или Греческий
            салат. Выберите свой вкус!"
          term="до 31 июля."
        />
      </PromotionsGrid>
      <Map />
    </main>
  );
}
