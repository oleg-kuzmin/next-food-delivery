import Link from 'next/link';
import styles from './CopyrightElement.module.scss';

export default function CopyrightElement({ text, href }) {
  return (
    <li>
      <Link className={styles.CopyrightElement + ' outline-focus'} href={href}>
        {text}
      </Link>
    </li>
  );
}
