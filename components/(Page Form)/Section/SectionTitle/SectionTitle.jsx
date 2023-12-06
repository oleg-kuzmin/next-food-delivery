import styles from './SectionTitle.module.scss';

export default function SectionTitle({ className }) {
  const classElement = className ? ` ${className}` : '';
  return <h3 className={styles.SectionTitle + classElement}>1. Контактная информация</h3>;
}
