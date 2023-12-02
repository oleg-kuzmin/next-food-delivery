import styles from './CallContactsTitle.module.scss';

export default function CallContactsTitle({ children }) {
  return <span className={styles.CallContactsTitle}>{children}</span>;
}
