import styles from './CallButton.module.scss';

export default function CallButton({ className }) {
  const classElement = className ? ` ${className}` : '';

  return (
    <a href="tel:+79218994062" className={styles.CallButton + ' ui-green outline-focus' + classElement}>
      <div className={styles.CallButton__Icon}></div>
    </a>
  );
}
