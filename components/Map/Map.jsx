import Contacts from '../Contacts/Contacts';
import styles from './Map.module.scss';

export default function Map() {
  return (
    <div className={styles.Map}>
      <Contacts className={styles.Map__Contacts} />
    </div>
  );
}
