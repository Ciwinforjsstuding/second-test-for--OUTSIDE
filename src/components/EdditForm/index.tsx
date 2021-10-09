import React, { FC, useState } from 'react';
import { useAction } from '../../hooks/useAction';
import PopUp from '../../StyleComponents/PopUp';
import { IBrand, KeyRootTree } from '../../types/brand';

import './eddit-form.css';

import cross from '../../icons/cross.svg';
import SaveBtn from './SaveBtn';
import DeletBtn from './DeletBtn';
import {
  isValueInputEmpty,
  isValueInputValidForTitleTree,
} from '../../store/util';

interface IEdditForm {
  brand: IBrand;
  titleTree: KeyRootTree | string;
  fnClose: () => void;
}

const EdditForm: FC<IEdditForm> = ({ brand, titleTree, fnClose }) => {
  const [valueInput, setValueInput] = useState<string>(brand.title);
  const { sendValidateError } = useAction();
  const inputhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };
  const { updateBrand, deletItemCardAction } = useAction();
  const clickHandlerUpdate = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isValueInputValidForTitleTree(valueInput, titleTree)) {
      sendValidateError(
        'Название бренда должно начинаться с той же буквы что у карточки'
      );
      return;
    }
    updateBrand(brand._id, valueInput, titleTree);
    fnClose();
  };
  const clickHadndlerDelet = (e: React.MouseEvent) => {
    e.preventDefault();
    deletItemCardAction(brand._id, titleTree);
    fnClose();
  };
  return (
    <PopUp
      customCssModal="size-eddit-form"
      customCssOverlay="flex justify-center items-center">
      <form className="card-eddit flex flex-column">
        <div className="card-eddit-header flex items-center justify-between">
          <span className="card-eddit-header__brend">
            Редактирование бренда:
            <span className="bold">{brand.title}</span>
          </span>
          <span className="card-eddit-header__title-tree">
            в карточке: <span className="bold">{titleTree}</span>
          </span>
          <button
            onClick={fnClose}
            className="card-eddit-header__btn">
            <img
              src={cross}
              className="cross-eddit-form"
              alt="закрыть форму редактирования"
            />
          </button>
        </div>
        <div className="card-eddit-body flex flex-column items-center">
          <label className="card-eddit-body-wrpa-input flex items-center justify-between">
            <span className="card-eddit-body-wrpa-input__text">
              Новое название бренда
            </span>
            <input
              className="card-eddit-body__input"
              placeholder="Название бренда"
              value={valueInput}
              onChange={inputhandler}
            />
          </label>
          {isValueInputEmpty(valueInput) ? (
            <DeletBtn clickHandler={clickHadndlerDelet} />
          ) : (
            <SaveBtn clickHandler={clickHandlerUpdate} />
          )}
        </div>
      </form>
    </PopUp>
  );
};

export default EdditForm;
