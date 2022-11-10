import { FC, PropsWithChildren } from 'react';
import styles from './layout.module.scss';

export const Layout: FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title
}) => {
  return <div></div>;
};
