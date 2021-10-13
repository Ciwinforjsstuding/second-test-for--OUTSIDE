import React, { FC, useEffect } from 'react';
import { useAction } from '../../../hooks/useAction';
import {
  EnumKeyRootTree,
  IBrand,
  KeyRootTree,
} from '../../../types/brand';

import CardItem from '../CardItem';

import './short-view.css';

interface IShortView {
  rootTree: IBrand[];
  titleTree: KeyRootTree | string;
}

const ShortView: FC<IShortView> = ({ rootTree, titleTree }) => {
  const { sortRootTreeAction, deletItemCardAction } = useAction();
  useEffect(() => {
    const isRootTreeHaveMainTrue = Boolean(
      rootTree.filter((brand: IBrand) => brand.main === true).length
    );
    if (isRootTreeHaveMainTrue) {
      sortRootTreeAction(titleTree, true, EnumKeyRootTree.main);
    }
    if (!isRootTreeHaveMainTrue) {
      sortRootTreeAction(titleTree, true, EnumKeyRootTree.title);
    }
    // eslint-disable-next-line
  }, []);
  const sliceRootTree = rootTree.slice(0, 5);
  return (
    <div className="card-short flex flex-column items-center">
      {sliceRootTree.map((brand, i) => (
        <CardItem
          key={brand._id}
          index={i}
          brand={brand}
          fnDeletItem={deletItemCardAction}
        />
      ))}
    </div>
  );
};

export default ShortView;
