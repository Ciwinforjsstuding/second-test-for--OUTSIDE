import { combineReducers } from 'redux';

import { brandReducer } from './brandReducer';
import { errorValidReducer } from './errorValidReducer';

export const rootReducer = combineReducers({
  brands: brandReducer,
  errorValidate: errorValidReducer,
});
//получаем тип нашего reducera
export type RootState = ReturnType<typeof rootReducer>;
