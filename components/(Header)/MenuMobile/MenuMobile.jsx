'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import ButtonBurger from '@/components/ButtonBurger/ButtonBurger';
import MenuMobileButtonContainer from './MenuMobileButtonContainer/MenuMobileButtonContainer';
import MenuMobileText from './MenuMobileText/MenuMobileText';
import MenuMobilePanel from './MenuMobilePanel/MenuMobilePanel';
import styles from './MenuMobile.module.scss';

export default function MenuMobile({ className }) {
  const [activePanel, setActivePanel] = useState(false);
  const classElement = className ? ` ${className}` : '';
  const router = useRouter();
  const pathname = usePathname();

  const recursion = id => {
    const section = document.querySelector(`#${id}`);
    setTimeout(() => {
      if (section === null) {
        recursion(id);
      } else {
        router.push(`/#${id}`);
      }
    }, 100);
  };

  const handleClick = evt => {
    evt.preventDefault();
    setActivePanel(!activePanel);
    if (evt.target.href !== undefined) {
      const id = evt.target.href.split('#')[1];
      if (pathname !== '/') {
        router.push(`/`);
      }
      recursion(id);
    }
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
