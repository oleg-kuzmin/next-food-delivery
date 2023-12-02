'use client';
import { useState, useEffect } from 'react';
import apiAddOptions from '@/components/(Api)/apiAddOptions';
import AddressBarInput from './AddressBarInput/AddressBarInput';
import AddressBarOptions from './AddressBarOptions/AddressBarOptions';
import styles from './AddressBar.module.scss';

export default function AddressBar({ className }) {
  const [isVisibleAddressBar, setIsVisibleAddressBar] = useState(true);
  const [address, setAddress] = useState('');
  const [isValidity, setIsValidity] = useState(false);
  const [options, setOptions] = useState([]);
  const [isVisibleOptions, setIsVisibleOptions] = useState(false);
  const [indexActiveOption, setIndexActiveOption] = useState(-1);
  const classElement = className ? ` ${className}` : '';
  const classModifier = isVisibleAddressBar ? '' : ` ${styles.AddressBar_invisible}`;

  useEffect(() => {
    document.addEventListener('mousedown', handleClickPage);
    document.addEventListener('scroll', handleScrollPage);
    if (document.documentElement.scrollTop >= 142) {
      setIsVisibleAddressBar(false);
    } else {
      setIsVisibleAddressBar(true);
    }
    if (address) {
      apiAddOptions(address).then(res => {
        setOptions(res);
        setIsVisibleOptions(true);
      });
    }
    return () => {
      document.removeEventListener('mousedown', handleClickPage);
      document.removeEventListener('scroll', handleScrollPage);
    };
  }, [address]);

  const handleChangeAddress = evt => {
    setAddress(evt.target.value);
    setIsValidity(false);
    setIsVisibleOptions(false);
    setIndexActiveOption(-1);
  };
  const handleMouseMoveOption = evt => {
    setIndexActiveOption(evt.target.value);
  };
  const handleClickPage = evt => {
    if (
      !evt.target.classList.contains(styles.AddressBar__Input) &&
      !evt.target.classList.contains(styles.AddressBar__Option)
    ) {
      setIsVisibleOptions(false);
    }
  };
  const handleClickInput = evt => {
    const input = evt.target;
    input.selectionStart = input.selectionEnd = input.value.length;
    input.scrollLeft = input.scrollWidth;
    input.focus();
    setIndexActiveOption(-1);
    if (address !== '') {
      setIsVisibleOptions(true);
    }
  };
  const handleClickOption = evt => {
    setAddress(evt.target.textContent);
    setIsValidity(false);
    if (address === evt.target.textContent) {
      setIsVisibleOptions(false);
      setIsValidity(true);
    }
  };
  const handleKeyDown = evt => {
    if (evt.key === 'Escape') {
      setIsVisibleOptions(false);
    }
    if (evt.key === 'ArrowUp') {
      evt.preventDefault();
      if (indexActiveOption > 0) {
        setIndexActiveOption(indexActiveOption - 1);
      } else setIndexActiveOption(options.length - 1);
    }
    if (evt.key === 'ArrowDown') {
      evt.preventDefault();
      if (indexActiveOption + 1 < options.length) {
        setIndexActiveOption(indexActiveOption + 1);
      } else {
        setIndexActiveOption(0);
      }
    }
    if (evt.key === 'Enter') {
      setAddress(options[indexActiveOption].value);
      setIsValidity(true);
      setIsVisibleOptions(false);
    }
  };
  const handleScrollPage = () => {
    if (document.documentElement.scrollTop >= 142) {
      setIsVisibleAddressBar(false);
    } else {
      setIsVisibleAddressBar(true);
    }
  };

  return (
    <div className={styles.AddressBar + classElement + classModifier}>
      <AddressBarInput
        classForEvt={styles.AddressBar__Input}
        isValidity={isValidity}
        address={address}
        onChange={handleChangeAddress}
        onClick={handleClickInput}
        onKeyDown={handleKeyDown}
      />
      {options && (
        <AddressBarOptions
          classForEvt={styles.AddressBar__Option}
          isVisible={isVisibleOptions}
          options={options}
          indexActiveOption={indexActiveOption}
          onMouseMove={handleMouseMoveOption}
          onClick={handleClickOption}
        />
      )}
    </div>
  );
}
