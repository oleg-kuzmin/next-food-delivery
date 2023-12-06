import SectionTitle from './SectionTitle/SectionTitle';
import styles from './Section.module.scss';

export default function Section({ className, children }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <div className={styles.Section + classElement}>
      <SectionTitle className={styles.Section__Title} />
      {children}
    </div>
  );
}
