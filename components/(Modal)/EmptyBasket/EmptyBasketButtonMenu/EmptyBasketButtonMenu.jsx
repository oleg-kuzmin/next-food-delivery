import Link from 'next/link';
import styles from './EmptyBasketButtonMenu.module.scss';

export default function EmptyBasketButtonMenu({ onClick }) {
  return (
    <Link className={styles.EmptyBasketButtonMenu + ' outline-focus ui-green'} href="#coldAppetizers" onClick={onClick}>
      Посмотреть меню
    </Link>
  );
}
