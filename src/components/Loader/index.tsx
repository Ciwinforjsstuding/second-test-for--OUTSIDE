import React, { FC } from 'react';

import './loader.css';

const Lodaer: FC = () => {
  return (
    <div className="wrap flex justify-center items-center">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Lodaer;
