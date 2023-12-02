import styles from './AddressBarOption.module.scss';

export default function AddressBarOption({ children, onMouseMove, onClick, value, indexActiveOption, classForEvt }) {
  const classModifier = indexActiveOption === value ? ` ${styles.AddressBarOption_active}` : '';
  const classElement = classForEvt ? ` ${classForEvt}` : '';

  return (
    <li
      className={styles.AddressBarOption + classModifier + classElement}
      value={value}
      onMouseMove={onMouseMove}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
