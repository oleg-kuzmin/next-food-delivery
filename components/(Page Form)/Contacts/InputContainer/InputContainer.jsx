import styles from './InputContainer.module.scss';

export default function InputContainer({ className, children }) {
  const classElement = className ? ` ${className}` : '';
  return <div className={styles.InputContainer + classElement}>{children}</div>;
}
