import styles from './AboutCafeGridButton.module.scss';

export default function AboutCafeGridButton({ background, text }) {
  let classModifier;

  switch (background) {
    case 'onion':
      classModifier = ` ${styles.AboutCafeGridButton_bg_onion}`;
      break;
    case 'lightning':
      classModifier = ` ${styles.AboutCafeGridButton_bg_lightning}`;
      break;
    case 'cap':
      classModifier = ` ${styles.AboutCafeGridButton_bg_cap}`;
      break;
    default:
      throw Error('Type is undefined');
  }

  return <button className={styles.AboutCafeGridButton + ' ui-grid-gray outline-focus' + classModifier}>{text}</button>;
}
