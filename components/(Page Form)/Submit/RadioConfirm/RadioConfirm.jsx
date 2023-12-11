import Input from './Input/Input';
import Label from './Label/Label';
import styles from './RadioConfirm.module.scss';

export default function RadioConfirm({ className }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <div className={styles.Container + classElement}>
      <Input className={styles.Input} name="confirmPersonal" value={true} id="confirmPersonal" />
      <Label className={styles.Label} htmlFor="confirmPersonal" />
    </div>
  );
}
