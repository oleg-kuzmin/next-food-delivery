import styles from './NavigationUnderline.module.scss';

export default function NavigationUnderline({ isActive }) {
  const classModifier = isActive ? ` ${styles.NavigationUnderline_active}` : '';
  return <div className={styles.NavigationUnderline + classModifier}></div>;
}
