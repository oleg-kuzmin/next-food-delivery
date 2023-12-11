import styles from './TitleSmall.module.scss';

export default function TitleSmall({ text, className }) {
  const classElement = className ? ` ${className}` : '';
  return <h4 className={styles.TitleSmall + classElement}>{text}</h4>;
}
