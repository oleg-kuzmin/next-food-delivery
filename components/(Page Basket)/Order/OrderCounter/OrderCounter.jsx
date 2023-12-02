import styles from './OrderCounter.module.scss';

export default function OrderCounter({ counter }) {
  return <span className={styles.OrderCounter}>{counter}</span>;
}
