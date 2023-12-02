import BlockTitle from '@/components/BlockTitle/BlockTitle';
import TitleCounter from './TitleCounter/TitleCounter';
import styles from './Title.module.scss';

export default function Title({ className }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <div className={styles.Title + classElement}>
      <BlockTitle>корзина</BlockTitle>
      <TitleCounter className={styles.Title__Counter} />
    </div>
  );
}
