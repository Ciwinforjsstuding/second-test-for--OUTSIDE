import React, { FC, useState } from 'react';

import cross from '../../../icons/cross.svg';
import pencil from '../../../icons/pencil-solid.svg';
import { createFirtsLetterInTitle } from '../../../store/util';
import Button from '../../../StyleComponents/Button';
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
          <Button
            clickHandler={clickHandler}
            customCssBtn="card-item-text__eddit-btn flex items-center">
            <img
              className="pencil"
              src={pencil}
              alt="редактирование бренда"
            />
          </Button>
          <span className="card-item-text__main">
            main: {String(brand.main)}
          </span>
        </div>
        <Button
          clickHandler={clickHandlerDelet}
          customCssBtn="card-item__btn-remove">
          <img className="cross" src={cross} alt="удалить бренд" />
        </Button>
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
