import InputRadio from '@/components/(Page Form)/InputRadio/InputRadio';
import PaymentDecorateLine from '../PaymentDecorateLine/PaymentDecorateLine';
import styles from './PaymentRadioContainer.module.scss';

export default function PaymentRadioContainer({ className, onChange }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <div className={styles.PaymentRadioContainer + classElement}>
      <InputRadio name="payment" id="paymentOnline" text="Оплата онлайн" value="online" onChange={onChange} />
      <PaymentDecorateLine />
      <InputRadio name="payment" id="paymentCard" text="Курьеру картой" value="card" onChange={onChange} />
      <PaymentDecorateLine />
      <InputRadio name="payment" id="paymentCash" text="Наличными" value="cash" onChange={onChange} defaultChecked />
    </div>
  );
}
