import EmptyBasketIcon from './EmptyBasketIcon/EmptyBasketIcon';
import EmptyBasketTitle from './EmptyBasketTitle/EmptyBasketTitle';
import EmptyBasketButtonMenu from './EmptyBasketButtonMenu/EmptyBasketButtonMenu';
import styles from './EmptyBasket.module.scss';

export default function EmptyBasket({ setShowModal }) {
  const handleClickButtonMenu = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.EmptyBasket}>
      <EmptyBasketIcon />
      <EmptyBasketTitle />
      <EmptyBasketButtonMenu onClick={handleClickButtonMenu} />
    </div>
  );
}
