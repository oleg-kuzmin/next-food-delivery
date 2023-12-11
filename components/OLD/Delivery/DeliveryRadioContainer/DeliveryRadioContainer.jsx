import InputRadio from '@/components/(Page Form)/InputRadio/InputRadio';
import styles from './DeliveryRadioContainer.module.scss';

export default function DeliveryRadioContainer({ className, onChange }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <div className={styles.DeliveryRadioContainer + classElement}>
      <InputRadio name="delivery" id="deliveryTrue" text="Доставка" value={true} defaultChecked onChange={onChange} />
      <InputRadio name="delivery" id="deliveryFalse" text="Самовывоз" value={false} onChange={onChange} />
    </div>
  );
}
