import styles from './CardButton.module.scss';

export default function CardButton({ onClick, type }) {
  let classModifier;

  const handleClick = () => {
    onClick();
  };

  switch (type) {
    case 'basket':
      classModifier = ` ${styles.CardButton_type_basket}`;
      break;
    case 'plus':
      classModifier = ` ${styles.CardButton_type_plus}`;
      break;
    case 'minus':
      classModifier = ` ${styles.CardButton_type_minus}` + ' animate-light-speed-in-left';
      break;
    default:
      throw Error('Type is undefined');
  }

  return (
    <button className={styles.CardButton + ' ui-green outline-focus' + classModifier} onClick={handleClick}></button>
  );
}
