import LinkBack from '@/components/LinkBack/LinkBack';
import styles from './Main.module.scss';

export default function Main() {
  return (
    <main className={styles.Main}>
      <LinkBack className={styles.Main__LinkBack} text="в корзину" href="/basket" />
    </main>
  );
}
