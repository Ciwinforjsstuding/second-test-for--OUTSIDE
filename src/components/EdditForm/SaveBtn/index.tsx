import React, { FC } from 'react';

import save from '../../../icons/save.svg';

interface ISaveBtn {
  clickHandler: (e: React.MouseEvent) => void;
}

const SaveBtn: FC<ISaveBtn> = ({ clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className="card-eddit-body__btn flex justify-around items-center">
      Сохранить
      <img
        className="card-eddit-body__btn_icon"
        src={save}
        alt="сохранить изменения"
      />
    </button>
  );
};

export default SaveBtn;
