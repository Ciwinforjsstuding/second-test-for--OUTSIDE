import React, { FC, useState } from 'react';
import { KeyRootTree, EnumKeyRootTree } from '../../types/brand';
import { useAction } from '../../hooks/useAction';

import arrowUp from '../../icons/arrow-up-solid.svg';
import arrowDown from '../../icons/arrow-down-solid.svg';

import './sort-btn.css';
import Button from '../../StyleComponents/Button';

interface ISortBtn {
  titleTree: KeyRootTree | string;
  startSortUp?: boolean;
}

const SortBtn: FC<ISortBtn> = ({ titleTree, startSortUp = true }) => {
  const [sortUp, setsortUp] = useState<boolean>(startSortUp);
  const sortText: string = sortUp ? 'A-Z' : 'Z-A';
  const sortImg: string = sortUp ? arrowUp : arrowDown;
  const { sortRootTreeAction } = useAction();
  const toggleSortHandler = () => {
    setsortUp(prev => !prev);
    sortRootTreeAction(titleTree, sortUp, EnumKeyRootTree.title);
  };
  return (
    <label className="sort-wrap flex items-center">
      <Button
        customCssBtn="sort-btn"
        clickHandler={toggleSortHandler}>
        <img
          className="sort-btn__img"
          src={sortImg}
          alt="кнопка сортировки"
        />
      </Button>
      <span className="sort__text">{sortText}</span>
    </label>
  );
};

export default SortBtn;
