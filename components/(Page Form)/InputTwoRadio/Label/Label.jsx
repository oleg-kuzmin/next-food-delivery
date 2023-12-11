import styles from './Label.module.scss';

export default function Label({ className, htmlFor, text }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <label className={styles.Label + classElement} htmlFor={htmlFor}>
      <span className={styles.Label__Text}>{text}</span>
    </label>
  );
}
