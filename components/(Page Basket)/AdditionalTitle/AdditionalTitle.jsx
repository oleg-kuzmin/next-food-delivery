import styles from './AdditionalTitle.module.scss';

export default function AdditionalTitle({ className }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <div className={styles.AdditionalTitle + classElement}>
      <div className={styles.AdditionalTitle__DecorateLine}></div>
      <h3 className={styles.AdditionalTitle__Text}>добавить к заказу</h3>
    </div>
  );
}
