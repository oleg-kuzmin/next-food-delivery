import styles from './AddressBarInput.module.scss';

export default function AddressBarInput({ classForEvt, isValidity, address, onChange, onClick, onKeyDown }) {
  const classModifier = isValidity
    ? ` ${styles.AddressBarInput_locationGreen}`
    : ` ${styles.AddressBarInput_locationWhite}`;

  const classElement = classForEvt ? ` ${classForEvt}` : '';

  return (
    <input
      className={styles.AddressBarInput + classModifier + classElement}
      type="text"
      placeholder="Введите адрес доставки"
      name="address"
      autoComplete="off"
      value={address}
      onChange={onChange}
      onClick={onClick}
      onKeyDown={onKeyDown}
      form="form-delivery"
    />
  );
}
