import styles from './CardDescription.module.scss';

export default function CardDescription({ description }) {
  return <p className={styles.CardDescription}>{description}</p>;
}
