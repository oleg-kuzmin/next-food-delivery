import styles from './TotalPriceResultSum.module.scss';

export default function TotalPriceResultSum({ value, minSum }) {
  const classModifier = value < minSum ? ` ${styles.TotalPriceResultSum__Value_red}` : '';

  return (
    <div className={styles.TotalPriceResultSum}>
      <span className={styles.TotalPriceResultSum__Span}>Итого: </span>
      <span className={styles.TotalPriceResultSum__Value + classModifier}>{value}</span>
    </div>
  );
}
