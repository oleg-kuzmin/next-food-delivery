import Contacts from '../Contacts/Contacts';
import Delivery from '../Delivery/Delivery';
import Payment from '../Payment/Payment';
import styles from './Form.module.scss';

export default function Form() {
  return (
    <form className={styles.Form} id="form-delivery">
      <Contacts />
      <Delivery />
      <Payment />
    </form>
  );
}