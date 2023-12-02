import styles from './ButtonClose.module.scss';

export default function ButtonClose({ onClick, className }) {
  const classElement = className ? ` ${className}` : '';
  return <button className={styles.ButtonClose + ' outline-focus' + classElement} onClick={onClick}></button>;
}
