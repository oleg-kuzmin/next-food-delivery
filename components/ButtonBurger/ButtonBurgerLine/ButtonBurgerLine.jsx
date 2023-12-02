import styles from './ButtonBurgerLine.module.scss';

export default function ButtonBurgerLine({ className, classActive, isActive }) {
  const classElement = className ? ` ${className}` : '';
  const classModifier = isActive ? ` ${classActive}` : '';
  return <div className={styles.ButtonBurgerLine + classElement + classModifier}></div>;
}
