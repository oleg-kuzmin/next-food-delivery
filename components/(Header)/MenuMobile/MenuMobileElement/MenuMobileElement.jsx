import Link from 'next/link';
import styles from './MenuMobileElement.module.scss';

export default function MenuMobileElement({ title, href, onClick }) {
  return (
    <li className={styles.MenuMobileElement}>
      <Link className={styles.MenuMobileElement__Link + ' outline-focus'} href={href} onClick={onClick}>
        {title}
      </Link>
    </li>
  );
}
