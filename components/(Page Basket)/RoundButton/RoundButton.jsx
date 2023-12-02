import styles from './RoundButton.module.scss';

export default function RoundButton({ type, onClick }) {
  let classModifier;

  switch (type) {
    case 'minus':
      classModifier = ` ${styles.RoundButton__Icon_type_minus}`;
      break;
    case 'plus':
      classModifier = ` ${styles.RoundButton__Icon_type_plus}`;
      break;
    case 'close':
      classModifier = ` ${styles.RoundButton__Icon_type_close}`;
      break;
    default:
      throw Error('Type is undefined');
  }

  return (
    <button className={styles.RoundButton + ' ui-green outline-focus'} onClick={onClick}>
      <div className={styles.RoundButton__Icon + classModifier}></div>
    </button>
  );
}
