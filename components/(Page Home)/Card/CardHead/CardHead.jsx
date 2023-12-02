import CardTitle from '../CardTitle/CardTitle';
import CardWeight from '../CardWeight/CardWeight';
import styles from './CardHead.module.scss';

export default function CardHead({ title, weight }) {
  return (
    <div className={styles.CardHead}>
      <CardTitle>{title}</CardTitle>
      <CardWeight>{weight}</CardWeight>
    </div>
  );
}
