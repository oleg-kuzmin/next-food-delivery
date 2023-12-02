import Logos from '@/components/Logos/Logos';
import AddressBar from './AddressBar/AddressBar';
import CallButton from './CallButton/CallButton';
import CallContacts from './CallContacts/CallContacts';
import BasketDesktop from '@/components/BasketDesktop/BasketDesktop';
import BasketMobile from './BasketMobile/BasketMobile';
import MenuMobile from './MenuMobile/MenuMobile';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.Header}>
      <h1 className={styles.Header__TitleHidden}>Доставка еды</h1>
      <Logos className={styles.Header__Logos} />
      <AddressBar className={styles.Header__AddressBar} />
      <CallButton className={styles.Header__CallButton} />
      <CallContacts className={styles.Header__CallContacts} />
      <BasketDesktop className={styles.Header__BasketDesktop} />
      <BasketMobile className={styles.Header__BasketMobile} />
      <MenuMobile className={styles.Header__MenuMobile} />
    </header>
  );
}
