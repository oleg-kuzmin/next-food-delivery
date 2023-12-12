'use client';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import getSum from '@/utils/getSum';
import Link from 'next/link';
import Modal from '@/components/(Modal)/Modal';
import MinOrder from '@/components/(Modal)/MinOrder/MinOrder';
import styles from './TotalPriceButton.module.scss';

export default function TotalPriceButton({ className }) {
  const [documentContainer, setDocumentContainer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setDocumentContainer(document.body);
  }, [documentContainer]);

  const classElement = className ? ` ${className}` : '';
  const reduxBasket = useSelector(state => state.basket);
  const sum = getSum(reduxBasket);

  const handleClickLink = evt => {
    if (sum < 1000) {
      evt.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <>
      <Link className={styles.TotalPriceButton + classElement + ' ui-green'} href="/form" onClick={handleClickLink}>
        Оформить заказ
      </Link>
      {documentContainer !== null &&
        createPortal(
          <Modal isActive={showModal} setShowModal={setShowModal}>
            <MinOrder setShowModal={setShowModal} />
          </Modal>,
          documentContainer
        )}
    </>
  );
}
