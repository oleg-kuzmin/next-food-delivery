import Image from 'next/image';
import styles from './OrderImage.module.scss';

export default function OrderImage({ className, src }) {
  const classElement = className ? ` ${className}` : '';
  return <Image className={styles.OrderImage + classElement} src={src} alt="Доставка" priority />;
}
