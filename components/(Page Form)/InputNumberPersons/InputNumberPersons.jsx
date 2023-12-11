'use client';
import { useState } from 'react';
import styles from './InputNumberPersons.module.scss';

function InputNumberPersons({ className }) {
  const [value, setValue] = useState(1);

  const classElement = className ? ` ${className}` : '';

  const handleChangeValue = evt => {
    setValue(evt.target.value);
  };

  const addPerson = () => {
    setValue(value + 1);
  };

  const deletePerson = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <div className={styles.Container + classElement}>
      <span className={styles.Text}>Кол-во персон</span>
      <button
        className={styles.Button + ' outline-focus ' + styles.Button_type_minus}
        type="button"
        onClick={deletePerson}
      />
      <input
        className={styles.Input}
        type="number"
        name="persons"
        onChange={handleChangeValue}
        value={value}
        min={value}
        tabIndex="-1"
        readOnly
        autoComplete="off"
      />
      <button
        className={styles.Button + ' outline-focus ' + styles.Button_type_plus}
        type="button"
        onClick={addPerson}
      />
    </div>
  );
}

export default InputNumberPersons;
