import Icon from './Icon/Icon';
import Title from './Title/Title';
import ButtonMenu from './ButtonMenu/ButtonMenu';
import styles from './MinOrder.module.scss';

export default function MinOrder({ setShowModal }) {
  const handleClickButtonMenu = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.MinOrder}>
      <Icon />
      <Title />
      <ButtonMenu onClick={handleClickButtonMenu} />
    </div>
  );
}
