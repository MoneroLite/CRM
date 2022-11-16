import React, { FC } from 'react';
// import { useNavigate } from 'react-router-dom';
import { IMenuItem } from '../../../types/menu-item.interface';
import styles from './menu-item.module.scss';

const MenuItem: FC<{ props: IMenuItem }> = ({ props: data }) => {
  // const navigation = useNavigate();
  return (
    <div className={styles.wrapItem}>
      <img className={styles.icon} src={data.icon} alt='icon' />
      <p className={styles.text}>{data.text}</p>
    </div>
  );
};

export default MenuItem;
