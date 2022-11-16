import MenuItem from '@/components/ui/sidebarMenu/MenuItem';
import { IMenuItem } from '@/types/menu-item.interface';
import React from 'react';
import styles from './menu.module.scss';

const dataMenuItems: IMenuItem[] = [
  {
    icon: 'static/icons/chart.svg',
    text: 'Дэшборд',
    link: 'link'
  },
  {
    icon: 'static/icons/briefcase.svg',
    text: 'Заказы',
    link: 'link'
  },
  {
    icon: 'static/icons/address-book.svg',
    text: 'Клиенты',
    link: 'link'
  },
  {
    icon: 'static/icons/users-alt.svg',
    text: 'Сотрудники',
    link: 'link'
  }
];

const Menu = () => {
  return (
    <div className={styles.wrapItems}>
      {dataMenuItems.map((item, index) => (
        <MenuItem key={index} props={item} />
      ))}
    </div>
  );
};

export default Menu;
