'use client';
import { useState } from 'react';
import styles from './InputText.module.scss';

export default function InputText({ name, placeholder, required }) {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChangeValue = evt => {
    setValue(evt.target.value);
    if (evt.target.validity.valid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className={styles.Label}>
      {!isValid && <span className={styles.Error}>Заполните это поле</span>}
      {!value && (
        <span className={styles.Text}>
          {placeholder}
          {required && <span className={styles.Required}>*</span>}
        </span>
      )}
      <input
        className={styles.Input + ' outline-focus'}
        type="text"
        name={name}
        required={required}
        onChange={handleChangeValue}
        value={value}
        autoComplete="on"
      />
    </div>
  );
}
