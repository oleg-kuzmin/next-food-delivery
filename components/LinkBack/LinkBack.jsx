import Link from 'next/link';
import styles from './LinkBack.module.scss';

export default function LinkBack({ className, text, href, onClick }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <Link href={href} className={styles.LinkBack + ' outline-focus' + classElement} onClick={onClick}>
      <div className={styles.LinkBack__Icon}></div>
      <span className={styles.LinkBack__Text}>{text}</span>
    </Link>
  );
}
