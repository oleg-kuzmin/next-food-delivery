import styles from './InputContainer.module.scss';

export default function InputContainer({ children, className }) {
  const classElement = className ? ` ${className}` : '';
  return <div className={styles.InputContainer + classElement}>{children}</div>;
}
