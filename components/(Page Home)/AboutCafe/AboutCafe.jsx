import AboutCafeColumnContainer from './AboutCafeColumnContainer/AboutCafeColumnContainer';
import AboutCafeTitle from './AboutCafeTitle/AboutCafeTitle';
import AboutCafeSubtitle from './AboutCafeSubtitle/AboutCafeSubtitle';
import AboutCafeMenuButton from './AboutCafeMenuButton/AboutCafeMenuButton';
import AboutCafeGridContainer from './AboutCafeGridContainer/AboutCafeGridContainer';
import AboutCafeGridButton from './AboutCafeGridButton/AboutCafeGridButton';
import styles from './AboutCafe.module.scss';

export default function AboutCafe() {
  return (
    <div className={styles.AboutCafe}>
      <div className={styles.AboutCafe__Content}>
        <AboutCafeColumnContainer>
          <AboutCafeTitle />
          <AboutCafeSubtitle />
          <AboutCafeMenuButton />
        </AboutCafeColumnContainer>
        <AboutCafeGridContainer>
          <AboutCafeGridButton background="onion" text="Свежайшие продукты" />
          <AboutCafeGridButton background="lightning" text="Быстрая доставка" />
          <AboutCafeGridButton background="cap" text="Лучшие повара" />
          <AboutCafeGridButton background="onion" text="Свежайшие продукты" />
        </AboutCafeGridContainer>
      </div>
    </div>
  );
}
