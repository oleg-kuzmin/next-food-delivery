import Link from 'next/link';
import styles from './ButtonMenu.module.scss';

export default function ButtonMenu({ onClick }) {
  return (
    <Link className={styles.ButtonMenu + ' outline-focus ui-green'} href="/#coldAppetizers" onClick={onClick}>
      Посмотреть меню
    </Link>
  );
}
