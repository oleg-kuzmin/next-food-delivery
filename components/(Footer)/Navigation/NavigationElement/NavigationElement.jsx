import Link from 'next/link';
import styles from './NavigationElement.module.scss';

export default function NavigationElement({ href, text }) {
  return (
    <li>
      <Link className={styles.NavigationElement + ' outline-focus'} href={href}>
        {text}
      </Link>
    </li>
  );
}
