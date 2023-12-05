import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import styles from './CardCounter.module.scss';

export default function CardCounter({ isActive, counter }) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition nodeRef={nodeRef} in={isActive} classNames={{ ...styles }} timeout={200} unmountOnExit>
      <div ref={nodeRef} className={styles.CardCounter}>
        <span className={styles.CardCounter__Span}>{counter}</span>
      </div>
    </CSSTransition>
  );
}
