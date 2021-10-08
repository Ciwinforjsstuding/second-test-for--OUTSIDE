import React, { FC } from 'react';

import './error-alert.css';

interface IErrorAlert {
  errorList: string[];
  fnClose?: () => void;
}

const ErrorAlert: FC<IErrorAlert> = ({ errorList, fnClose }) => {
  return (
    <div
      onClick={fnClose}
      className="error-alert flex justify-center items-center">
      <div className="error-alert-card flex flex-column items-center">
        <h3 className="error-alert-card__title">Ошибка</h3>
        {errorList.map(error => (
          <span className="error-alert-card__text">{error}</span>
        ))}
      </div>
    </div>
  );
};

export default ErrorAlert;
