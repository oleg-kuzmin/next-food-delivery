import Input from './Input/Input';
import Label from './Label/Label';
import DecorateLine from './DecorateLine/DecorateLine';
import styles from './InputThreeRadio.module.scss';

export default function InputThreeRadio({
  className,
  name,
  value1,
  value2,
  value3,
  id1,
  id2,
  id3,
  text1,
  text2,
  text3,
  onChange,
}) {
  const classElement = className ? ` ${className}` : '';
  return (
    <div className={styles.InputThreeRadio + classElement}>
      <Input className={styles.Input} name={name} value={value1} id={id1} onChange={onChange} />
      <Label className={styles.Label} htmlFor={id1} text={text1} />
      <DecorateLine />
      <Input className={styles.Input} name={name} value={value2} id={id2} onChange={onChange} />
      <Label className={styles.Label} htmlFor={id2} text={text2} />
      <DecorateLine />
      <Input className={styles.Input} name={name} value={value3} id={id3} onChange={onChange} defaultChecked />
      <Label className={styles.Label} htmlFor={id3} text={text3} />
    </div>
  );
}
