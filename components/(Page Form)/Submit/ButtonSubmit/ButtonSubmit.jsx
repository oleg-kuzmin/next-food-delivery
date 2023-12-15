import styles from './ButtonSubmit.module.scss';

export default function ButtonSubmit({ className }) {
  const classElement = className ? ` ${className}` : '';

  return (
    <button className={styles.ButtonSubmit + classElement + ' ui-green outline-focus'} type="submit">
      Оформить заказ
    </button>
  );
}
