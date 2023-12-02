import CardButton from '../CardButton/CardButton';
import CardPrice from '../CardPrice/CardPrice';
import styles from './CardFooter.module.scss';

export default function CardFooter({ isActive, price, onMinus, onPlus }) {
  const classModifier = isActive ? ` ${styles.CardFooter_active}` : '';
  return (
    <div className={styles.CardFooter + classModifier}>
      {isActive && <CardButton type="minus" onClick={onMinus} />}
      <CardPrice>{price}</CardPrice>
      <CardButton type={isActive ? 'plus' : 'basket'} onClick={onPlus} />
    </div>
  );
}
