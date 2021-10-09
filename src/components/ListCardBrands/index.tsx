import React, { FC } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { IBrandReducer } from '../../types/brand';
import CardBrand from '../Cards/CardBrand';

import './list-card-brands.css';

const ListCardBrands: FC = () => {
  const { rootTrees, loadingRootTree }: IBrandReducer =
    useTypeSelector(state => state.brands);
  const keyTrees = Object.keys(rootTrees);
  if (loadingRootTree) {
    return <h1>Wait...</h1>;
  }
  return (
    <div className="list-card-brands flex justify-around items-start flex-wrap">
      {keyTrees.map((keyTree, i) => (
        <CardBrand
          key={i}
          titleTree={keyTree}
          rootTree={rootTrees[keyTree]}
        />
      ))}
    </div>
  );
};

export default ListCardBrands;
