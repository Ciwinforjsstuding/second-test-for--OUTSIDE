import React, { FC } from 'react';
import PopUp from '../../StyleComponents/PopUp';

import './empty-result-search.css';

const EmptyResultSearch: FC = () => {
  return (
    <PopUp
      customCssOverlay="flex justify-center custom-for-overlay"
      customCssModal="size-empty-result flex items-center position-modal">
      <h3 className="empty-result-search">Ничего не нашли :(</h3>
    </PopUp>
  );
};

export default EmptyResultSearch;
