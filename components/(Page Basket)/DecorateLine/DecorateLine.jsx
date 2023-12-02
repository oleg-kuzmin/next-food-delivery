import styles from './DecorateLine.module.scss';

export default function DecorateLine({ className }) {
  const classElement = className ? ` ${className}` : '';
  return <div className={styles.DecorateLine + classElement}></div>;
}
