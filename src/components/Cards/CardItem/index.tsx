import React, { FC } from 'react';

import cross from '../../../icons/cross.svg';
import { IBrand } from '../../../types/bredns';

import './card-item.css';

interface ICardItem {
  brand: IBrand;
  index: number;
}

const CardItem: FC<ICardItem> = ({ brand, index }) => (
  <div className="card-item flex items-center justify-between">
    <div className="card-item-text">
      <span className="card-item-text__number">
        {index + 1}
      </span>
      <span className="card-item-text__title">
        {brand.title}
      </span>
      <span className="card-item-text__main">
        main: {String(brand.main)}
      </span>
    </div>

    <button className="card-item__btn-remove">
      <img
        className="cross"
        src={cross}
        alt="удалить бренд"
      />
    </button>
  </div>
);

export default CardItem;
