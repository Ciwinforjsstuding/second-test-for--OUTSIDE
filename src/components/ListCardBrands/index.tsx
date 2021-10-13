import React, { FC, useEffect } from 'react';
import { useAction } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import CardBrand from '../Cards/CardBrand';

import './list-card-brands.css';

const ListCardBrands: FC = () => {
  const { rootTrees, isFoundSomething, searchResult } =
    useTypeSelector(state => state.brands);
  const { showEmptyResultAction } = useAction();
  useEffect(() => {
    if (isFoundSomething === false) {
      showEmptyResultAction();
    }
    // eslint-disable-next-line
  }, [isFoundSomething]);
  const showDate = isFoundSomething ? searchResult : rootTrees;
  const keyTrees = Object.keys(showDate);
  return (
    <div className="list-card-brands flex justify-around items-start flex-wrap">
      {keyTrees.map((keyTree, i) => (
        <CardBrand
          key={keyTree}
          titleTree={keyTree}
          rootTree={showDate[keyTree]}
        />
      ))}
    </div>
  );
};

export default ListCardBrands;
