'use client';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import BasketMobileIcon from './BasketMobileIcon/BasketMobileIcon';
import BasketMobileLine from './BasketMobileLine/BasketMobileLine';
import BasketMobileText from './BasketMobileText/BasketMobileText';
import Modal from '@/components/(Modal)/Modal';
import EmptyBasket from '@/components/(Modal)/EmptyBasket/EmptyBasket';
import styles from './BasketMobile.module.scss';

export default function BasketMobile({ className }) {
  const [showModal, setShowModal] = useState(false);
  const [documentContainer, setDocumentContainer] = useState(null);
  const reduxBasket = useSelector(state => state.basket);
  const isValidLink = reduxBasket.length > 0;
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
        className={styles.BasketMobile + ' ui-green outline-focus' + classElement}
        href="/basket"
        onClick={handleClick}
      >
        <BasketMobileIcon />
        <BasketMobileLine />
        <BasketMobileText />
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
