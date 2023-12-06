'use client';
import { useState } from 'react';
import styles from './InputTel.module.scss';

export default function InputTel({ name, placeholder, required }) {
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
      {!isValid && <span className={styles.Error}>Заполните это поле в формате +79175105759</span>}
      {!value && (
        <span className={styles.Text}>
          {placeholder}
          {required && <span className={styles.Required}>*</span>}
        </span>
      )}
      <input
        className={styles.Input + ' outline-focus'}
        type="tel"
        name={name}
        required={required}
        onChange={handleChangeValue}
        value={value}
        pattern="^\+7[0-9]{10}"
        autoComplete="on"
      />
    </div>
  );
}
