import React, { FC, useState } from 'react';
import { useAction } from '../../hooks/useAction';

import search from '../../icons/search-icon.svg';
import { isValueInputEmpty } from '../../store/util';

import './shearch.css';

const Search: FC = () => {
  const [valueInput, setValueInput] = useState<string>('');
  const {
    searchBrnadByStringAction,
    sendValidateError,
    resetSearchAction,
  } = useAction();
  const inputHadnler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };
  const clickHandlerSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isValueInputEmpty(valueInput)) {
      sendValidateError('Напишите текст для поиска');
    }
    searchBrnadByStringAction(valueInput);
  };
  const clickHandlerReset = (e: React.MouseEvent) => {
    e.preventDefault();
    resetSearchAction();
    setValueInput('');
  };
  return (
    <form className="search flex items-center justify-between">
      <input
        className="search__input"
        value={valueInput}
        onChange={inputHadnler}
        type="text"
        placeholder="Введите название бренда"
      />
      <button
        onClick={clickHandlerSearch}
        className="search__btn_search">
        <img src={search} className="search-icon" alt="поиск" />
      </button>
      <button
        onClick={clickHandlerReset}
        className="search__btn_reset">
        Сбросить
      </button>
    </form>
  );
};
export default Search;
