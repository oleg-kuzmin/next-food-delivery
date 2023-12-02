import Link from 'next/link';
import styles from './NavigationLink.module.scss';

export default function NavigationLink({ children, href, onClick, isActive }) {
  const classModifier = isActive ? ` ${styles.NavigationLink_active}` : '';

  return (
    <Link
      className={styles.NavigationLink + ' outline-focus' + classModifier}
      href={href}
      onClick={() => {
        onClick(href);
      }}
    >
      {children}
    </Link>
  );
}
