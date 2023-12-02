import AddressBarOption from '../AddressBarOption/AddressBarOption';
import AddressBarDecorateLine from '../AddressBarDecorateLine/AddressBarDecorateLine';
import styles from './AddressBarOptions.module.scss';

export default function AddressBarOptions({
  classForEvt,
  isVisible,
  options,
  indexActiveOption,
  onMouseMove,
  onClick,
}) {
  const classModifier = isVisible ? ` ${styles.AddressBarOptions_active}` : '';

  const elements = options.map((element, index) => {
    return (
      <AddressBarOption
        key={element.value}
        value={index}
        indexActiveOption={indexActiveOption}
        classForEvt={classForEvt}
        onMouseMove={onMouseMove}
        onClick={onClick}
      >
        {element.value}
      </AddressBarOption>
    );
  });

  return (
    <div className={styles.AddressBarOptions + classModifier}>
      <AddressBarDecorateLine />
      <ul>{elements}</ul>
    </div>
  );
}
