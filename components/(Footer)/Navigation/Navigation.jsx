import NavigationElement from './NavigationElement/NavigationElement';
import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav>
      <ul className={styles.Navigation}>
        <NavigationElement href="#body" text="О ресторане" />
        <NavigationElement href="#body" text="Условия доставки" />
        <NavigationElement href="#body" text="Возврат товара" />
        <NavigationElement href="#body" text="Акции" />
      </ul>
    </nav>
  );
}