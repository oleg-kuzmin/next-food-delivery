'use client';
import { useState } from 'react';
import ButtonBurger from '@/components/ButtonBurger/ButtonBurger';
import MenuMobileButtonContainer from './MenuMobileButtonContainer/MenuMobileButtonContainer';
import MenuMobileText from './MenuMobileText/MenuMobileText';
import MenuMobilePanel from './MenuMobilePanel/MenuMobilePanel';
import styles from './MenuMobile.module.scss';

export default function MenuMobile({ className }) {
  const [activePanel, setActivePanel] = useState(false);
  const classElement = className ? ` ${className}` : '';
  const handleClick = () => {
    setActivePanel(!activePanel);
  };
  return (
    <div className={styles.MenuMobile + classElement}>
      <MenuMobileButtonContainer>
        <ButtonBurger isActive={activePanel} onClick={handleClick} />
        <MenuMobileText />
      </MenuMobileButtonContainer>
      <MenuMobilePanel isActive={activePanel} onClick={handleClick} />
    </div>
  );
}
