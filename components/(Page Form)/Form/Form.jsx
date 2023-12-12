import Contacts from '../Contacts/Contacts';
import Delivery from '../Delivery/Delivery';
import Payment from '../Payment/Payment';
import Time from '../Time/Time';
import Submit from '../Submit/Submit';
import styles from './Form.module.scss';

export default function Form() {
  return (
    <form className={styles.Form}>
      <Contacts className={styles.Form__Contacts} />
      <Delivery className={styles.Form__Delivery} />
      <Payment className={styles.Form__Payment} />
      <Time className={styles.Form__Time} />
      <Submit className={styles.Form__Time} />
    </form>
  );
}
