import styles from './OrderUi.module.scss';
import RoundButton from '../../RoundButton/RoundButton';
import OrderCounter from '../OrderCounter/OrderCounter';
import OrderPrice from '../OrderPrice/OrderPrice';

export default function OrderUi({ className, price, counter, onClose, onPlus, onMinus }) {
  const classElement = className ? ` ${className}` : '';
  const priseResult = counter * price;

  return (
    <div className={styles.OrderUi + classElement}>
      <RoundButton type="minus" onClick={onMinus} />
      <OrderCounter className={styles.OrderUi__Counter} counter={counter} />
      <RoundButton type="plus" onClick={onPlus} />
      <OrderPrice className={styles.OrderUi__Price} price={priseResult} />
      <RoundButton type="close" onClick={onClose} />
    </div>
  );
}
