import React, { FC } from 'react';

import './button.css';

interface IButton {
  children: React.ReactNode;
  alt?: boolean;
  customCssBtn?: string;
  clickHandler: (e: React.MouseEvent) => void;
}

const Button: FC<IButton> = ({
  children,
  clickHandler,
  customCssBtn,
  alt,
}) => {
  const currentStyle = alt ? 'alt-btn' : 'normal-btn';
  return (
    <button
      onClick={clickHandler}
      className={`btn ${currentStyle} ${customCssBtn}`}>
      {children}
    </button>
  );
};

export default Button;
