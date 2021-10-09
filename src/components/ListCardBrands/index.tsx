import React, { FC } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import CardBrand from '../Cards/CardBrand';

import './list-card-brands.css';

const ListCardBrands: FC = () => {
  const { rootTrees, isFoundSomething, searchResult } =
    useTypeSelector(state => state.brands);
  const showDate =
    isFoundSomething === true ? searchResult : rootTrees;
  const keyTrees = Object.keys(showDate);
  return (
    <div className="list-card-brands flex justify-around items-start flex-wrap">
      {keyTrees.map((keyTree, i) => (
        <CardBrand
          key={i}
          titleTree={keyTree}
          rootTree={showDate[keyTree]}
        />
      ))}
    </div>
  );
};

export default ListCardBrands;
