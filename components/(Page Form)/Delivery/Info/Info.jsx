import styles from './Info.module.scss';

export default function Info() {
  return (
    <div className={styles.Info}>
      <div className={styles.Info__Icon}></div>
      <div className={styles.Info__Text}>Доставим через &nbsp;1 час 30 минут</div>
    </div>
  );
}
