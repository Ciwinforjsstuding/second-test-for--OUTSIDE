import React, { FC } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import CardBrand from '../Cards/CardBrand';

import './list-card-brands.css';

const ListCardBrands: FC = () => {
  const { rootTrees } = useTypeSelector(state => state.brands);
  const keyTrees = Object.keys(rootTrees);
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
