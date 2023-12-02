import styles from './BlockTitle.module.scss';

export default function BlockTitle({ className, children }) {
  const classElement = className ? ` ${className}` : '';

  return (
    <div className={styles.BlockTitle + classElement}>
      <div className={styles.BlockTitle__DecorateLine}></div>
      <h2 className={styles.BlockTitle__Text}>{children}</h2>
    </div>
  );
}
