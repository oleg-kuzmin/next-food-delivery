import styles from './OrderText.module.scss';

export default function OrderText({ className, title, subtitle }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <div className={styles.OrderText + classElement}>
      <h3 className={styles.OrderText__Title}>{title}</h3>
      <p className={styles.OrderText__SubTitle}>{subtitle}</p>
    </div>
  );
}
