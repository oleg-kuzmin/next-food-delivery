import styles from './DeliveryInfo.module.scss';

export default function DeliveryInfo() {
  return (
    <div className={styles.DeliveryInfo}>
      <div className={styles.DeliveryInfo__Icon}></div>
      <div className={styles.DeliveryInfo__Text}>Доставим через &nbsp;1 час 30 минут</div>
    </div>
  );
}
