import React, { FC } from 'react';
import { useAction } from '../../../hooks/useAction';
import { IBrand } from '../../../types/brand';
import CardItem from '../CardItem';

import './all-view.css';

interface IAllView {
  rootTree: IBrand[];
}

const AllView: FC<IAllView> = ({ rootTree }) => {
  const isRootTreeShort = rootTree.length <= 5 ? true : false;
  const { deletItemCardAction } = useAction();
  return (
    <div
      className={`${
        isRootTreeShort ? 'all-view-short-root-tree' : 'all-view'
      } flex flex-column items-center`}>
      {rootTree.map((brand, i) => (
        <CardItem
          key={i}
          index={i}
          brand={brand}
          fnDeletItem={deletItemCardAction}
        />
      ))}
    </div>
  );
};

export default AllView;
