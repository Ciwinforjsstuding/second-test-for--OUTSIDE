import React, { FC, useEffect, useState } from 'react';
import { useAction } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';

import search from '../../icons/search-icon.svg';
import { isValueInputEmpty } from '../../store/util';
import Button from '../../StyleComponents/Button';

import './shearch.css';

const Search: FC = () => {
  const [valueInput, setValueInput] = useState<string>('');
  const {
    searchBrnadByStringAction,
    sendValidateError,
    resetSearchAction,
  } = useAction();
  const { showEmptyResultSearch } = useTypeSelector(
    state => state.brands
  );
  useEffect(() => {
    if (showEmptyResultSearch === true) {
      setValueInput('');
    }
  }, [showEmptyResultSearch]);
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
      <Button
        alt
        clickHandler={clickHandlerSearch}
        customCssBtn="search__btn_search">
        <img src={search} className="search-icon" alt="поиск" />
      </Button>
      <Button
        alt
        customCssBtn="search__btn_reset"
        clickHandler={clickHandlerReset}>
        Сбросить
      </Button>
    </form>
  );
};
export default Search;
