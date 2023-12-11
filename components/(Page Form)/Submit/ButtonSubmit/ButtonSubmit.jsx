'use client';
import Link from 'next/link';
import styles from './ButtonSubmit.module.scss';

export default function ButtonSubmit({ className }) {
  const classElement = className ? ` ${className}` : '';
  const handleClick = () => {
    console.log(123);
  };

  return (
    <Link className={styles.ButtonSubmit + classElement + ' ui-green'} href="/" onClick={handleClick}>
      Оформить заказ
    </Link>
  );
}
