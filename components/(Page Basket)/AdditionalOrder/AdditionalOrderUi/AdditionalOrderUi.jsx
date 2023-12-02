import AdditionalOrderPrice from '../AdditionalOrderPrice/AdditionalOrderPrice';
import AdditionalOrderButtonCapture from '../AdditionalOrderButtonCapture/AdditionalOrderButtonCapture';
import RoundButton from '../../RoundButton/RoundButton';
import styles from './AdditionalOrderUi.module.scss';

export default function AdditionalOrderUi({ price, onPlus }) {
  return (
    <div className={styles.AdditionalOrderUi}>
      <div className={styles.AdditionalOrderUi__ButtonContainer}>
        <AdditionalOrderButtonCapture />
        <RoundButton type="plus" onClick={onPlus} />
      </div>
      <AdditionalOrderPrice className={styles.AdditionalOrderUi__Price} price={price} />
    </div>
  );
}
