import styles from './TotalPriceFreeShipping.module.scss';

export default function TotalPriceFreeShipping({ value, minFree }) {
  if (value >= minFree) {
    return (
      <div className={styles.TotalPriceFreeShipping}>
        <span className={styles.TotalPriceFreeShipping__Span}>Доставка бесплатная!</span>
      </div>
    );
  } else {
    return (
      <div className={styles.TotalPriceFreeShipping}>
        <span className={styles.TotalPriceFreeShipping__Span}>До бесплатной доставки не хватает: </span>
        <span className={styles.TotalPriceFreeShipping__Value}>{2000 - value}</span>
      </div>
    );
  }
}
