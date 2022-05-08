import { FC } from 'react';
import classNames from 'classnames';

import { ButtonProps } from '../types/button';

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  className,
  outline,
  circle,
}) => {
  return (
    <button
      className={classNames('button', className, {
        button__outline: outline,
        button__circle: circle,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
