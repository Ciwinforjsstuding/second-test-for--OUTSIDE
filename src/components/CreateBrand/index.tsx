import React, { FC, useState } from 'react';
import { useAction } from '../../hooks/useAction';
import {
  isValueInputEmpty,
  isValueinputValidForTitleTree,
} from '../../store/util';
import { KeyRootTree } from '../../types/brand';
import ErrorAlert from '../ErrorAlert';

import './creaete-brand.css';

interface ICreateBrand {
  titleTree: KeyRootTree | string;
}

const CreateBrand: FC<ICreateBrand> = ({ titleTree }) => {
  // const [isMain, setIsMain] = useState<boolean>(false);
  const [valueInput, setValueInput] = useState<string>('');
  const [errorList, setErrorList] = useState<string[]>([]);
  const [validationError, setValidationError] =
    useState<boolean>(false);
  const { createBrand } = useAction();
  // const checkBoxhandler = () => {
  //   setIsMain(prev => !prev);
  // };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };
  const errorAlerHadnler = () => {
    setValidationError(prve => !prve);
    setErrorList([]);
  };
  const btnHadnler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isValueInputEmpty(valueInput)) {
      setErrorList(prev => {
        prev.push('Input не может быть пустым');
        return prev;
      });
      setValidationError(true);
      setTimeout(() => {
        setValidationError(false);
        setErrorList([]);
      }, 2000);
      return;
    }

    if (!isValueinputValidForTitleTree(valueInput, titleTree)) {
      setErrorList(prev => {
        prev.push(
          'Название бренда должно начинаться с той же буквы что у карточки'
        );
        return prev;
      });
      setValidationError(true);
      setTimeout(() => {
        setValidationError(false);
        setErrorList([]);
      }, 2000);
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
        Create
      </button>
      {validationError && (
        <ErrorAlert
          fnClose={errorAlerHadnler}
          errorList={errorList}
        />
      )}
    </form>
  );
};

export default CreateBrand;
