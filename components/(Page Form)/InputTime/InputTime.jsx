'use client';
import { useState } from 'react';
import styles from './InputTime.module.scss';

export default function InputTime({ name, required, className }) {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const classElement = className ? ` ${className}` : '';

  const handleChangeValue = evt => {
    setValue(evt.target.value);
    if (evt.target.validity.valid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <label className={styles.Label + classElement}>
      {!isValid && required && <span className={styles.Error}>Укажите время</span>}
      <input
        className={styles.Input}
        type="time"
        name={name}
        required={required}
        onChange={handleChangeValue}
        value={value}
        autoComplete="off"
      />
    </label>
  );
}
