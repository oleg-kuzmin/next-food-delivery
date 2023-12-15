'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Modal from '@/components/(Modal)/Modal';
import Сonditions from '@/components/(Modal)/Сonditions/Сonditions';
import Link from 'next/link';
import styles from './Label.module.scss';

export default function Label({ className, htmlFor }) {
  const [showModal, setShowModal] = useState(false);
  const [documentContainer, setDocumentContainer] = useState(null);
  const classElement = className ? ` ${className}` : '';

  useEffect(() => {
    setDocumentContainer(document.body);
  }, [documentContainer]);

  const handleClick = evt => {
    evt.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <label className={styles.Label + classElement} htmlFor={htmlFor}>
        <span>
          Я согласен на обработку моих перс. данных в соответствии с&nbsp;
          <Link href="/" className={styles.Label__Link + ' outline-focus'} onClick={handleClick}>
            Условиями
          </Link>
        </span>
      </label>
      {documentContainer !== null &&
        createPortal(
          <Modal className={styles.Modal} isActive={showModal} setShowModal={setShowModal}>
            <Сonditions />
          </Modal>,
          documentContainer
        )}
    </>
  );
}
