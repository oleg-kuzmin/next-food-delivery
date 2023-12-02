import styles from './AdditionalOrderPrice.module.scss';

export default function AdditionalOrderPrice({ className, price }) {
  const classElement = className ? ` ${className}` : '';
  return <span className={styles.AdditionalOrderPrice + classElement}>{price}</span>;
}
