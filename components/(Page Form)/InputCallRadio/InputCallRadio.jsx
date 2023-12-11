import Input from './Input/Input';
import Label from './Label/Label';
import styles from './InputCallRadio.module.scss';

export default function InputCallRadio({ className, name, value1, value2, id1, id2, text1, text2 }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <div className={styles.Container + classElement}>
      <Input className={styles.Input} name={name} value={value1} id={id1} defaultChecked />
      <Label className={styles.Label} htmlFor={id1} text={text1} />
      <Input className={styles.Input} name={name} value={value2} id={id2} />
      <Label className={styles.Label} htmlFor={id2} text={text2} />
    </div>
  );
}
