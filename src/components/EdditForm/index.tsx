import React, { FC, useState } from 'react';
import { useAction } from '../../hooks/useAction';
import PopUp from '../../StyleComponents/PopUp';
import { IBrand, KeyRootTree } from '../../types/brand';

import './eddit-form.css';

import trash from '../../icons/trash.svg';
import save from '../../icons/save.svg';
import cross from '../../icons/cross.svg';

import {
  isValueInputEmpty,
  isValueInputValidForTitleTree,
} from '../../store/util';
import Button from '../../StyleComponents/Button';

interface IEdditForm {
  brand: IBrand;
  titleTree: KeyRootTree | string;
  fnClose: () => void;
}

const EdditForm: FC<IEdditForm> = ({ brand, titleTree, fnClose }) => {
  const [valueInput, setValueInput] = useState<string>(brand.title);
  const [check, setCheck] = useState<boolean>(brand.main);
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
    updateBrand(brand._id, valueInput, titleTree, check);
    fnClose();
  };
  const checkBoxHandler = () => {
    setCheck(prev => !prev);
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
            <abbr title={brand.title} className="bold">
              {brand.title}
            </abbr>
          </span>
          <span className="card-eddit-header__title-tree">
            в карточке: <span className="bold">{titleTree}</span>
          </span>
          <Button
            clickHandler={fnClose}
            customCssBtn="card-eddit-header__btn">
            <img
              src={cross}
              className="cross-eddit-form"
              alt="закрыть форму редактирования"
            />
          </Button>
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
          <label className="card-eddit-body-wrap-checkbox flex justify-start items-center">
            <span className="card-eddit-body-checkbox__text">
              Main:
            </span>
            <input
              className="card-eddit-body-checkbox__checkbox"
              type="checkbox"
              onChange={checkBoxHandler}
              checked={check}
            />
          </label>
          {isValueInputEmpty(valueInput) ? (
            <Button
              alt
              customCssBtn="card-eddit-body__btn flex justify-around items-center"
              clickHandler={clickHadndlerDelet}>
              Удалить
              <img
                className="card-eddit-body__btn_icon"
                src={trash}
                alt="удалить бренд"
              />
            </Button>
          ) : (
            <Button
              alt
              clickHandler={clickHandlerUpdate}
              customCssBtn="card-eddit-body__btn flex justify-around items-center">
              Сохранить
              <img
                className="card-eddit-body__btn_icon"
                src={save}
                alt="сохранить изменения"
              />
            </Button>
          )}
        </div>
      </form>
    </PopUp>
  );
};
//<SaveBtn clickHandler={clickHandlerUpdate}
export default EdditForm;
