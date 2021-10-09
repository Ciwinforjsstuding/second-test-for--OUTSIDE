import React, { FC, useState } from 'react';
import { useAction } from '../../hooks/useAction';

import search from '../../icons/search-icon.svg';

import './shearch.css';

const Search: FC = () => {
  const [valueInput, setValueInput] = useState<string>('');
  const { searchBrnadByStringAction } = useAction();
  const inputHadnler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };
  const clickHandler = () => {
    // TODO: валидацию прикрути
    searchBrnadByStringAction(valueInput);
  };
  return (
    <div className="search flex items-center justify-between">
      <input
        className="search__input"
        value={valueInput}
        onChange={inputHadnler}
        type="text"
        placeholder="Введите название бренда"
      />
      <button onClick={clickHandler} className="seatch__btn">
        <img src={search} className="search-icon" alt="поиск" />
      </button>
    </div>
  );
};

export default Search;
