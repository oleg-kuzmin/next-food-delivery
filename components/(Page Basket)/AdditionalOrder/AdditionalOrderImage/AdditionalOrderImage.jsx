import Image from 'next/image';
import styles from './AdditionalOrderImage.module.scss';

export default function AdditionalOrderImage({ className, src }) {
  const classElement = className ? ` ${className}` : '';
  return <Image className={styles.AdditionalOrderImage + classElement} src={src} alt="Доставка" priority />;
}
