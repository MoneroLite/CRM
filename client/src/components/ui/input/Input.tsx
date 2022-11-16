import React, { forwardRef } from 'react';
import styles from './input.module.scss';
import { IInput } from './input.interface';

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ error, type = 'text', style, ...rest }, ref) => {
    return (
      <div style={style} className={styles.div}>
        <input ref={ref} type={type} {...rest} className={styles.input} />
        {error && <div>{error}</div>}
      </div>
    );
  }
);
Input.displayName = 'Input';

export default Input;
