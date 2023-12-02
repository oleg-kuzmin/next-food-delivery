import Logos from '@/components/Logos/Logos';
import CopyrightInfo from './CopyrightInfo/CopyrightInfo';
import CopyrightSmall from './CopyrightSmall/CopyrightSmall';
import CopyrightList from './CopyrightList/CopyrightList';
import CopyrightElement from './CopyrightElement/CopyrightElement';
import styles from './Copyright.module.scss';

export default function Copyright() {
  return (
    <div className={styles.Copyright}>
      <Logos />
      <CopyrightInfo>
        <CopyrightSmall text="&copy; ООО СК «АПШЕРОН»" />
        <CopyrightSmall text="Все права защищены. 2010-2023" />
      </CopyrightInfo>
      <CopyrightList>
        <CopyrightElement href="#body" text="Пользовательское соглашение" />
        <CopyrightElement href="#body" text="Карта сайта" />
        <CopyrightElement href="#body" text="Политика конфиденциальности" />
      </CopyrightList>
    </div>
  );
}
