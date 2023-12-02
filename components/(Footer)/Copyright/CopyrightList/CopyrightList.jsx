import styles from './CopyrightList.module.scss';

export default function CopyrightList({ children }) {
  return <ul className={styles.CopyrightList}>{children}</ul>;
}
