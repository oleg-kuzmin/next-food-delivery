import TotalPriceInfo from './TotalPriceInfo/TotalPriceInfo';
import TotalPriceButton from './TotalPriceButton/TotalPriceButton';
import styles from './TotalPrice.module.scss';

export default function TotalPrice({ className }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <div className={styles.TotalPrice + classElement}>
      <TotalPriceInfo className={styles.TotalPrice__Info} />
      <TotalPriceButton className={styles.TotalPrice__Button} />
    </div>
  );
}
