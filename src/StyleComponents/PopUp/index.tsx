import React, { FC } from 'react';

import './pop-up.css';

interface IPopUp {
  children: React.ReactNode;
  customCssModal?: string;
  customCssOverlay?: string;
}
const PopUp: FC<IPopUp> = ({
  children,
  customCssModal,
  customCssOverlay,
}) => {
  return (
    <div className={`overlay ${customCssOverlay}`}>
      <div className={`pop-up flex flex-column ${customCssModal}`}>
        {children}
      </div>
    </div>
  );
};

export default PopUp;
