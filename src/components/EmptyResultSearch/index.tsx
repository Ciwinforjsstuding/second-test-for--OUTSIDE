import React, { FC, useEffect } from 'react';
import { useAction } from '../../hooks/useAction';
import PopUp from '../../StyleComponents/PopUp';

import './empty-result-search.css';

const EmptyResultSearch: FC = () => {
  const { showEmptyResultAction } = useAction();
  useEffect(() => {
    showEmptyResultAction();
    // eslint-disable-next-line
  }, []);
  return (
    <PopUp
      customCssOverlay="flex justify-center custom-for-overlay"
      customCssModal="size-empty-result flex items-center position-modal">
      <h3 className="empty-result-search">Ничего не нашли :(</h3>
    </PopUp>
  );
};

export default EmptyResultSearch;
