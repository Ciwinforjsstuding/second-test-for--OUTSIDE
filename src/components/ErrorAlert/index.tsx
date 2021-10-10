import React, { FC } from 'react';

import './error-alert.css';
import PopUp from '../../StyleComponents/PopUp';

import cross from '../../icons/cross.svg';
import { useAction } from '../../hooks/useAction';
import Button from '../../StyleComponents/Button';

interface IErrorAlert {
  errorList: string[];
}

const ErrorAlert: FC<IErrorAlert> = ({ errorList }) => {
  const { closeErrorAlertAction } = useAction();
  return (
    <PopUp
      customCssOverlay="flex justify-center items-center"
      customCssModal="size-alert">
      <div className="error-alert-card flex flex-column items-center">
        <div className="error-alert-card-header flex items-center justify-between">
          <h3 className="error-alert-card-header__title">Ошибка!</h3>
          <Button
            clickHandler={closeErrorAlertAction}
            customCssBtn="error-alert-card-header__btn">
            <img
              src={cross}
              className="croos-in-card"
              alt="закрыть"
            />
          </Button>
        </div>
        {errorList.map((error, i) => (
          <span key={i} className="error-alert-card__text">
            {error}
          </span>
        ))}
      </div>
    </PopUp>
  );
};

export default ErrorAlert;
