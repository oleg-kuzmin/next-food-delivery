import styles from './AdditionalOrderText.module.scss';

export default function AdditionalOrderText({ className, title }) {
  const classElement = className ? ` ${className}` : '';
  return <h4 className={styles.AdditionalOrderText + classElement}>{title}</h4>;
}
