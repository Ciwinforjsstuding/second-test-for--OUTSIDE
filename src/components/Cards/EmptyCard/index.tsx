import React, { FC } from 'react';

import './empty-card.css';

const EmptyCard: FC = () => (
  <span className="empty-card__text">
    Сейчас в этой карточке нет брендов
  </span>
);

export default EmptyCard;
