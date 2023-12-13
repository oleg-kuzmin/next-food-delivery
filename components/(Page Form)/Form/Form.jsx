'use client';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { saveUser } from '@/redux/slices/userSlice';
import Contacts from '../Contacts/Contacts';
import Delivery from '../Delivery/Delivery';
import Payment from '../Payment/Payment';
import Time from '../Time/Time';
import Submit from '../Submit/Submit';
import styles from './Form.module.scss';

export default function Form() {
  const reduxBasket = useSelector(state => state.basket);
  const isValidBasket = reduxBasket.length > 0;
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    if (isValidBasket) {
      const result = {};
      const form = document.querySelector('form');
      const inputList = form.querySelectorAll(
        'input[type=text], input[type=tel], input[type=radio]:checked, input[type=time], input[type=number], input[type=checkbox]:checked'
      );
      inputList.forEach(input => {
        result[input.name] = input.value;
      });
      dispatch(saveUser(result));
      router.push('/success');
    }
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <Contacts className={styles.Form__Contacts} />
      <Delivery className={styles.Form__Delivery} />
      <Payment className={styles.Form__Payment} />
      <Time className={styles.Form__Time} />
      <Submit className={styles.Form__Time} />
    </form>
  );
}
