import React, { FC, useState } from 'react';
import { KeyRootTree, EnumKeyRootTree } from '../../types/brand';
import { useAction } from '../../hooks/useAction';

import arrowUp from '../../icons/arrow-up-solid.svg';
import arrowDown from '../../icons/arrow-down-solid.svg';

import './sort-btn.css';

interface ISortBtn {
  titleTree: KeyRootTree | string;
  startSortUp?: boolean;
}

const SortBtn: FC<ISortBtn> = ({ titleTree, startSortUp = true }) => {
  const [sortUp, setsortUp] = useState<boolean>(startSortUp);
  const sortText = sortUp ? 'A-Z' : 'Z-A';
  const sortImg = sortUp ? arrowUp : arrowDown;
  const { sortRootTreeAction } = useAction();
  const toggleSortHandler = () => {
    setsortUp(prev => !prev);
    sortRootTreeAction(titleTree, sortUp, EnumKeyRootTree.title);
  };
  return (
    <label className="sort-wrap flex items-center">
      <button onClick={toggleSortHandler} className="sort-btn">
        <img
          className="sort-btn__img"
          src={sortImg}
          alt="кнопка сортировки"
        />
      </button>
      <span className="sort__text">{sortText}</span>
    </label>
  );
};

export default SortBtn;
