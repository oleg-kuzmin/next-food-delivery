import styles from './InputRadio.module.scss';

export default function InputRadio({ name, id, text, defaultChecked }) {
  return (
    <>
      <input className={styles.InputRadio} name={name} id={id} type="radio" defaultChecked={defaultChecked} />
      <label className={styles.Label} name={name} htmlFor={id}>
        <span className={styles.Text}>{text}</span>
      </label>
    </>
  );
}
