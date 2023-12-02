import Link from 'next/link';
import styles from './AboutCafeMenuButton.module.scss';

export default function AboutCafeMenuButton() {
  return (
    <Link className={styles.AboutCafeMenuButton + ' ui-gray outline-focus'} href="/#coldAppetizers">
      посмотреть меню
    </Link>
  );
}
