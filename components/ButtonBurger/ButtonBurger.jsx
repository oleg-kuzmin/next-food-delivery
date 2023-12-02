import ButtonBurgerLine from './ButtonBurgerLine/ButtonBurgerLine';
import styles from './ButtonBurger.module.scss';

export default function ButtonBurger({ isActive, onClick }) {
  return (
    <button className={styles.ButtonBurger + ' outline-focus'} onClick={onClick}>
      <ButtonBurgerLine
        className={styles.ButtonBurger__Line1}
        classActive={styles.ButtonBurger__Line1_active}
        isActive={isActive}
      />
      <ButtonBurgerLine
        className={styles.ButtonBurger__Line2}
        classActive={styles.ButtonBurger__Line2_active}
        isActive={isActive}
      />
      <ButtonBurgerLine
        className={styles.ButtonBurger__Line3}
        classActive={styles.ButtonBurger__Line3_active}
        isActive={isActive}
      />
    </button>
  );
}
