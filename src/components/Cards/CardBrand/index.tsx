import React, { FC, useState } from 'react';
import { IBrand, KeyRootTree } from '../../../types/brand';

import ShortView from '../ShortView';
import AllView from '../AllView';
import SortBtn from '../../SortBtn';
import EmptyCard from '../EmptyCard';

import './card-brands.css';
import CreateBrand from '../../CreateBrand';
import Button from '../../../StyleComponents/Button';

interface IRootTree {
  rootTree: IBrand[];
  titleTree: KeyRootTree | string;
  shortView?: boolean;
}

const CardBrand: FC<IRootTree> = ({
  rootTree,
  titleTree,
  shortView = true,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(shortView);
  const stateCardText = isOpen ? 'Закрыто' : 'Открыто';
  const isRootTreeEmpty = Boolean(rootTree.length === 0);
  const toggleHadnler = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <div className="card-brands flex flex-column">
      <div className="card-brands-srot-section">
        <SortBtn titleTree={titleTree} />
      </div>
      <div className="card-brands-title flex items-center justify-between">
        <span className="card-brands-title__text">
          {titleTree} ({rootTree.length})
        </span>
        <div className="card-brands-state">
          <span className="card-brands-state__text">
            {stateCardText}
          </span>
          <Button
            customCssBtn="card-brands-state__btn"
            clickHandler={toggleHadnler}>
            Переключить
          </Button>
        </div>
      </div>
      {isOpen ? (
        <ShortView rootTree={rootTree} titleTree={titleTree} />
      ) : (
        <AllView rootTree={rootTree} />
      )}
      {isRootTreeEmpty && <EmptyCard />}
      <CreateBrand titleTree={titleTree} />
    </div>
  );
};

export default CardBrand;
