'use client';
import { useState, useEffect } from 'react';
import styles from './InputTel.module.scss';

export default function InputTel({ name, placeholder, required, className, initialValue }) {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const classElement = className ? ` ${className}` : '';

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
      setIsValid(true);
    }
  }, [initialValue]);

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
      {!isValid && required && <span className={styles.Error}>Заполните поле в формате +79175105759</span>}
      {!value && (
        <span className={styles.Text}>
          {placeholder}
          {required && <span className={styles.Required}>*</span>}
        </span>
      )}
      <input
        className={styles.Input}
        type="tel"
        name={name}
        required={required}
        onChange={handleChangeValue}
        value={value}
        pattern="^\+7[0-9]{10}"
        autoComplete="on"
      />
    </label>
  );
}
