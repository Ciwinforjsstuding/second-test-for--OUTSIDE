import React, { FC, useState } from 'react';

import cross from '../../../icons/cross.svg';
import pencil from '../../../icons/pencil-solid.svg';
import { createFirtsLetterInTitle } from '../../../store/util';
import { IBrand, KeyRootTree } from '../../../types/brand';
import EdditForm from '../../EdditForm';

import './card-item.css';

interface ICardItem {
  brand: IBrand;
  index: number;
  fnDeletItem: (_id: string, titleTree: KeyRootTree | string) => void;
}
const CardItem: FC<ICardItem> = ({ brand, index, fnDeletItem }) => {
  const titleTree = createFirtsLetterInTitle(brand);
  const [isEddit, setIsEddit] = useState<boolean>(false);
  const clickHandler = () => {
    setIsEddit(prev => !prev);
  };
  const clickHandlerDelet = () => fnDeletItem(brand._id, titleTree);
  return (
    <>
      <div className="card-item flex items-center justify-between">
        <div className="card-item-text flex items-center">
          <span className="card-item-text__number">{index + 1}</span>
          <abbr title={brand.title} className="card-item-text__title">
            {brand.title}
          </abbr>
          <button className="card-item-text__eddit-btn flex items-center">
            <img
              onClick={clickHandler}
              className="pencil"
              src={pencil}
              alt="редактирование бренда"
            />
          </button>
          <span className="card-item-text__main">
            main: {String(brand.main)}
          </span>
        </div>
        <button
          onClick={clickHandlerDelet}
          className="card-item__btn-remove">
          <img className="cross" src={cross} alt="удалить бренд" />
        </button>
      </div>
      {isEddit && (
        <EdditForm
          fnClose={clickHandler}
          brand={brand}
          titleTree={titleTree}
        />
      )}
    </>
  );
};

export default CardItem;
