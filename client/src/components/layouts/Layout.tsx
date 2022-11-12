import { FC, PropsWithChildren } from 'react';
import Card from './card/Card';
import Header from './header/Header';
import styles from './layout.module.scss';
import Sidebar from './sidebar/Sidebar';

export const Layout: FC<PropsWithChildren<{ rightSide: boolean }>> = ({
  children,
  rightSide
}) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.containerInner}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Card>{children}</Card>
        </div>
        {rightSide && (
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
        )}
      </div>
    </div>
  );
};
