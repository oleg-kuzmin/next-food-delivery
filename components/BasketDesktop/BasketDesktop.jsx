'use client';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import sumOrders from '@/utils/sumOrders';
import Link from 'next/link';
import Modal from '@/components/(Modal)/Modal';
import EmptyBasket from '@/components/(Modal)/EmptyBasket/EmptyBasket';
import styles from './BasketDesktop.module.scss';

export default function BasketDesktop({ className }) {
  const [showModal, setShowModal] = useState(false);
  const [documentContainer, setDocumentContainer] = useState(null);
  const reduxBasket = useSelector(state => state.basket);
  const counterOrders = sumOrders(reduxBasket.basket);
  const isValidLink = counterOrders > 0;
  const classElement = className ? ` ${className}` : '';

  useEffect(() => {
    setDocumentContainer(document.body);
  }, [documentContainer]);

  const handleClick = evt => {
    if (!isValidLink) {
      evt.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <>
      <Link
        className={styles.BasketDesktop + ' outline-focus ui-green' + classElement}
        href="/basket"
        onClick={handleClick}
      >
        <span className={styles.BasketDesktop__Text}>корзина</span>
        <div className={styles.BasketDesktop__Line}></div>
        <div className={styles.BasketDesktop__CountContainer}>
          <span className={styles.BasketDesktop__Count}>{counterOrders}</span>
        </div>
      </Link>
      {documentContainer !== null &&
        createPortal(
          <Modal isActive={showModal} setShowModal={setShowModal}>
            <EmptyBasket setShowModal={setShowModal} />
          </Modal>,
          documentContainer
        )}
    </>
  );
}
