'use client';
import { useEffect, useState } from 'react';
import styles from './InputText.module.scss';

export default function InputText({ name, placeholder, required, className, initialValue }) {
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
      {!isValid && required && <span className={styles.Error}>Заполните поле</span>}
      {!value && (
        <span className={styles.Text}>
          {placeholder}
          {required && <span className={styles.Required}>*</span>}
        </span>
      )}
      <input
        className={styles.Input}
        type="text"
        name={name}
        required={required}
        onChange={handleChangeValue}
        value={value}
        autoComplete="on"
      />
    </label>
  );
}
