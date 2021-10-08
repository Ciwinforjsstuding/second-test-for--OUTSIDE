import React, { FC } from 'react';

import cross from '../../../icons/cross.svg';
import { createFirtsLetterInTitle } from '../../../store/util';
import { IBrand, KeyRootTree } from '../../../types/bredns';

import './card-item.css';

interface ICardItem {
  brand: IBrand;
  index: number;
  fnDeletItem: (_id: string, titleTree: KeyRootTree | string) => void;
}

const CardItem: FC<ICardItem> = ({ brand, index, fnDeletItem }) => {
  const titleTree = createFirtsLetterInTitle(brand);
  return (
    <div className="card-item flex items-center justify-between">
      <div className="card-item-text">
        <span className="card-item-text__number">{index + 1}</span>
        <span className="card-item-text__title">{brand.title}</span>
        <span className="card-item-text__main">
          main: {String(brand.main)}
        </span>
      </div>

      <button
        onClick={() => fnDeletItem(brand._id, titleTree)}
        className="card-item__btn-remove">
        <img className="cross" src={cross} alt="удалить бренд" />
      </button>
    </div>
  );
};

export default CardItem;
