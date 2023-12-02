import { useEffect } from 'react';
import ButtonClose from './ButtonClose/ButtonClose';
import styles from './Modal.module.scss';

export default function Modal({ children, isActive, setShowModal }) {
  useEffect(() => {
    document.addEventListener('mousedown', handleClickPage);
    document.addEventListener('keydown', handleKeydownEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickPage);
      document.removeEventListener('keydown', handleKeydownEscape);
    };
  });

  const handleClickPage = evt => {
    if (evt.target.classList.contains(styles.Modal_active)) {
      setShowModal(false);
    }
  };

  const handleKeydownEscape = evt => {
    if (evt.code === 'Escape') {
      setShowModal(false);
    }
  };

  const handleClickButtonClose = () => {
    setShowModal(false);
  };

  const classActive = isActive ? ` ${styles.Modal_active}` : '';

  return (
    <div className={styles.Modal + classActive}>
      <div className={styles.Modal__Content}>
        <ButtonClose className={styles.Modal__ButtonClose} onClick={handleClickButtonClose} />
        {children}
      </div>
    </div>
  );
}
