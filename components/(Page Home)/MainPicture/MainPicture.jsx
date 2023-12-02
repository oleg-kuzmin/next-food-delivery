import Image from 'next/image';
import styles from './MainPicture.module.scss';

export default function MainPicture() {
  return (
    <picture>
      <source srcSet="/images/main-picture/main-picture-mobile.jpg" media="(max-width: 480px)" />
      <Image
        className={styles.MainPicture}
        src="/images/main-picture/main-picture-desktop.jpg"
        alt="Доставка вкуснейших блюд за 60 минут! Еще не пробовали?"
        width={1440}
        height={484}
        priority
        // unoptimized //!
      />
    </picture>
  );
}
