'use client';
import Link from 'next/link';
import styles from './LinkHome.module.scss';

export default function LinkHome({ className }) {
  const classElement = className ? ` ${className}` : '';

  // onClick={(e) => {e.preventDefault(); document.getElementById("faqs").scrollIntoView({ behavior: "smooth" })}>

  return (
    <Link href="/#navigation" className={styles.LinkHome + ' outline-focus' + classElement}>
      <div className={styles.LinkHome__Icon}></div>
      <span className={styles.LinkHome__Text}>к выбору блюда</span>
    </Link>
  );
}
