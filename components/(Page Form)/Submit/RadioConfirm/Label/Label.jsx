import Link from 'next/link';
import styles from './Label.module.scss';

export default function Label({ className }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <label className={styles.Label + classElement} htmlFor="confirmPersonal">
      <span>
        Я согласен на обработку моих перс. данных в соответствии с{' '}
        <Link href="/" className={styles.Label__Link}>
          Условиями
        </Link>
      </span>
    </label>
  );
}
