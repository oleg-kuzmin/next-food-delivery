import styles from './CardTitle.module.scss';

export default function CardTitle({ children }) {
  return <h3 className={styles.CardTitle}>{children}</h3>;
}
