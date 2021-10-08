import { combineReducers } from 'redux';

import { brandReducer } from './brandReducer';

export const rootReducer = combineReducers({
  brands: brandReducer,
});
//получаем тип нашего reducera
export type RootState = ReturnType<typeof rootReducer>;
