import React, { FC, useState } from 'react';
import { useAction } from '../../hooks/useAction';
import {
  isValueInputEmpty,
  isValueInputValidForTitleTree,
} from '../../store/util';
import { KeyRootTree } from '../../types/brand';

import './creaete-brand.css';

interface ICreateBrand {
  titleTree: KeyRootTree | string;
}
//код в коментариях отвечает за переключение main
const CreateBrand: FC<ICreateBrand> = ({ titleTree }) => {
  // const [isMain, setIsMain] = useState<boolean>(false);
  const [valueInput, setValueInput] = useState<string>('');
  useState<boolean>(false);
  const { createBrand, sendValidateError } = useAction();
  // const checkBoxhandler = () => {
  //   setIsMain(prev => !prev);
  // };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };
  const btnHadnler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isValueInputEmpty(valueInput)) {
      sendValidateError('Input не может быть пустым');
      return;
    }

    if (isValueInputValidForTitleTree(valueInput, titleTree)) {
      sendValidateError(
        'Название бренда должно начинаться с той же буквы что у карточки'
      );
      return;
    }
    createBrand(valueInput);
    // setIsMain(false);
    setValueInput('');
  };
  return (
    <form className="create-brand flex justify-between items-center">
      <input
        className="create-brand__input"
        value={valueInput}
        onChange={inputHandler}
        placeholder="Введите название бренда"
      />
      {/* <label className="create-brand-wrap-checkbox">
        <span className="create-brand-checkbox__text">Main:</span>
        <input
          className="create-brand__checkbox"
          type="checkbox"
          onChange={checkBoxhandler}
          checked={isMain}
        />
      </label> */}
      <button className="create-brand__btn" onClick={btnHadnler}>
        Создать
      </button>
    </form>
  );
};

export default CreateBrand;
