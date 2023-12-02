import Image from 'next/image';
import styles from './CardImage.module.scss';

export default function CardImage({ src, priority, alt }) {
  return <Image className={styles.CardImage} src={src} alt={alt} priority={priority} />;
}
