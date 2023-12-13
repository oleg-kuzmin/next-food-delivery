import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import MenuMobileElement from '../MenuMobileElement/MenuMobileElement';
import styles from './MenuMobilePanel.module.scss';

export default function MenuMobilePanel({ isActive, onClick }) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition nodeRef={nodeRef} in={isActive} classNames={{ ...styles }} timeout={500} unmountOnExit>
      <div ref={nodeRef} className={styles.MenuMobilePanel}>
        <ul>
          <MenuMobileElement title="Холодные закуски" href="#coldAppetizers" onClick={onClick} />
          <MenuMobileElement title="Горячие закуски" href="#hotAppetizers" onClick={onClick} />
          <MenuMobileElement title="Мясные блюда" href="#meatDishes" onClick={onClick} />
          <MenuMobileElement title="Супы" href="#soups" onClick={onClick} />
          <MenuMobileElement title="Рыбные блюда" href="#fishDishes" onClick={onClick} />
          <MenuMobileElement title="Гриль меню" href="#grillDishes" onClick={onClick} />
          <MenuMobileElement title="Фирменные блюда" href="#brandedDishes" onClick={onClick} />
          <MenuMobileElement title="Напитки" href="#drinks" onClick={onClick} />
        </ul>
      </div>
    </CSSTransition>
  );
}
