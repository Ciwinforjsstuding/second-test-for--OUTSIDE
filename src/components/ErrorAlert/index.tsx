import React, { FC } from 'react';

import './error-alert.css';
import PopUp from '../../StyleComponents/PopUp';

import cross from '../../icons/cross.svg';

interface IErrorAlert {
  errorList: string[];
  fnClose?: () => void;
}

const ErrorAlert: FC<IErrorAlert> = ({ errorList, fnClose }) => {
  return (
    <PopUp
      customCssOverlay="flex justify-center items-center"
      customCssModal="size-alert">
      <div className="error-alert-card flex flex-column items-center">
        <div className="error-alert-card-header flex items-center justify-between">
          <h3 className="error-alert-card-header__title">Ошибка!</h3>
          <button
            onClick={fnClose}
            className="error-alert-card-header__btn">
            <img
              src={cross}
              className="croos-in-card"
              alt="закрыть"
            />
          </button>
        </div>
        {errorList.map(error => (
          <span className="error-alert-card__text">{error}</span>
        ))}
      </div>
    </PopUp>
  );
};

export default ErrorAlert;
