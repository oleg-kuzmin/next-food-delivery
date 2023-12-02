import styles from './CopyrightInfo.module.scss';

export default function CopyrightInfo({ children }) {
  return <div className={styles.CopyrightInfo}>{children}</div>;
}
