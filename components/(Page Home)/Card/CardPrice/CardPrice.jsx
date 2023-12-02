import styles from './CardPrice.module.scss';

export default function CardPrice({ children }) {
  return <span className={styles.CardPrice}>{children}</span>;
}
