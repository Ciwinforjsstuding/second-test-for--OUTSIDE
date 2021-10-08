import React, { FC } from 'react';
import { IBrand, KeyRootTree } from '../../../types/bredns';
import CardItem from '../CardItem';

import './all-view.css';

interface IAllView {
  rootTree: IBrand[];
  titleTree: KeyRootTree | string;
}

const AllView: FC<IAllView> = ({ rootTree, titleTree }) => {
  return (
    <div className="all-view flex flex-column items-center">
      {rootTree.map((brand, i) => (
        <CardItem key={i} index={i} brand={brand} />
      ))}
    </div>
  );
};

export default AllView;
