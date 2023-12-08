import styles from './Title.module.scss';

export default function Title({ text, className }) {
  const classElement = className ? ` ${className}` : '';
  return <h3 className={styles.Title + classElement}>{text}</h3>;
}
