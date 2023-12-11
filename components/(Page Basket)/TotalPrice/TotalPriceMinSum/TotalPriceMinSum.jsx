import styles from './TotalPriceMinSum.module.scss';

export default function TotalPriceMinSum({ value, minSum }) {
  const classModifier = value < minSum ? ` ${styles.TotalPriceMinSum_red}` : '';

  return (
    <span className={styles.TotalPriceMinSum}>
      Минимальная сума заказа&nbsp;<span className={classModifier}>{minSum} ₽</span>
    </span>
  );
}
