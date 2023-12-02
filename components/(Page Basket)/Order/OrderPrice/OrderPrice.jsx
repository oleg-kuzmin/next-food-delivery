import styles from './OrderPrice.module.scss';

export default function OrderPrice({ className, price }) {
  const classElement = className ? ` ${className}` : '';
  return <span className={styles.OrderPrice + classElement}>{price}</span>;
}
