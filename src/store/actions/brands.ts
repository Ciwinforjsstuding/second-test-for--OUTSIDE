import axios from 'axios';
import { Dispatch } from 'redux';

import {
  BrandsAction,
  BrandsActionType,
  KeyBrandsForSort,
  KeyRootTree,
} from '../../types/bredns';

const url =
  'https://recruting-test-api.herokuapp.com/api/v1/brands';

export const fetchBrandsAction = () => {
  return async (dispatch: Dispatch<BrandsAction>) => {
    try {
      dispatch({ type: BrandsActionType.FETCH_BRANDS });
      const respons = await axios.get(url);
      dispatch({
        type: BrandsActionType.FETCH_BRANDS_SUCCESS,
        payload: respons.data,
      });
      //возможно не стоило создание деревье засовывать в этот action,
      //но по логике вещей мы должны создавать их сразу после получения от сервера
      dispatch({
        type: BrandsActionType.CREATE_ROOT_TREES,
        payload: respons.data,
      });
    } catch (error) {
      dispatch({
        type: BrandsActionType.FETCH_BRANDS_ERROR,
        payload: `Error: ${error}, ошибка при загрузки пользователей`,
      });
    }
  };
};

export const sortRootTreeAction = (
  titleTree: KeyRootTree | string,
  up: boolean,
  keyForSort: KeyBrandsForSort | string
) => ({
  type: BrandsActionType.SORT_ROOT_TREE,
  payload: {
    titleTree,
    up,
    keyForSort,
  },
});
