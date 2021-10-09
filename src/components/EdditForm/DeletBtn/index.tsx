import React, { FC } from 'react';

import trash from '../../../icons/trash.svg';

interface IDeletBtn {
  clickHandler: (e: React.MouseEvent) => void;
}

const DeletBtn: FC<IDeletBtn> = ({ clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className="card-eddit-body__btn flex justify-around items-center">
      Удалить
      <img
        className="card-eddit-body__btn_icon"
        src={trash}
        alt="удалить бренд"
      />
    </button>
  );
};

export default DeletBtn;
