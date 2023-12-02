import Link from 'next/link';
import styles from './UpLink.module.scss';

export default function UpLink() {
  return (
    <Link href="#body" className={styles.UpLink + ' outline-focus'}>
      Вернуться в начало сайта
    </Link>
  );
}
