import React, { FC, useState } from 'react';

import './creaete-brand.css';

const CreateBrand: FC = () => {
  const [isMain, setisMain] = useState<boolean>(false);
  const [valueInput, setValueInput] = useState<string>('');
  const checkBoxhandler = () => {
    setisMain(prev => !prev);
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (valueInput === '') {
      //TODO: верни ошибку
    }
    setValueInput(e.target.value);
  };
  const btnHadnler = (e: React.MouseEvent) => {
    e.preventDefault();
    //TODO: сделай вызов action для создания бренда
  };
  return (
    <form className="create-brand">
      <input
        className="create-brand__input"
        value={valueInput}
        onChange={inputHandler}
        placeholder="Введите название бренда"
      />
      <label>
        Main:
        <input
          className="create-brand__checkbox"
          type="checkbox"
          onChange={checkBoxhandler}
          checked={isMain}
        />
      </label>
      <button className="create-brand__btn" onClick={btnHadnler}>
        Create
      </button>
    </form>
  );
};

export default CreateBrand;
