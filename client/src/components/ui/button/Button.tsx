import React, { FC, PropsWithChildren } from 'react';
import { IButton } from './button.interface';
import styles from './button.module.scss'

const Button: FC<PropsWithChildren<IButton>> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
