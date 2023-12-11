import Input from './Input/Input';
import Label from './Label/Label';
import styles from './InputTwoRadio.module.scss';

export default function InputTwoRadio({ name, value1, value2, id1, id2, text1, text2, onChange }) {
  return (
    <div className={styles.InputTwoRadio}>
      <Input className={styles.Input} name={name} value={value1} id={id1} onChange={onChange} defaultChecked />
      <Label className={styles.Label} htmlFor={id1} text={text1} />
      <Input className={styles.Input} name={name} value={value2} id={id2} onChange={onChange} />
      <Label className={styles.Label} htmlFor={id2} text={text2} />
    </div>
  );
}
