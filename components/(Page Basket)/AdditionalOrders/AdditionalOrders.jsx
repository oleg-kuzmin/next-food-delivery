import { additionOrders } from '@/data/additionOrders';
import AdditionalOrder from '../AdditionalOrder/AdditionalOrder';
import styles from './AdditionalOrders.module.scss';

export default function AdditionalOrders({ className }) {
  const classElement = className ? ` ${className}` : '';
  const elements = additionOrders.map(item => {
    return <AdditionalOrder key={item.id} object={item} />;
  });
  return <div className={styles.AdditionalOrders + classElement}>{elements}</div>;
}
