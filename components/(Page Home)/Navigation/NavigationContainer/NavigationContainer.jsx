import BasketDesktop from '@/components/BasketDesktop/BasketDesktop';
import styles from './NavigationContainer.module.scss';

export default function NavigationContainer({ children, visibleBasketDesktop }) {
  return (
    <div className={styles.NavigationContainer}>
      {children}
      {visibleBasketDesktop && (
        <BasketDesktop className={styles.NavigationContainer__BasketDesktop + ' animate-light-speed-in-left'} />
      )}
    </div>
  );
}
