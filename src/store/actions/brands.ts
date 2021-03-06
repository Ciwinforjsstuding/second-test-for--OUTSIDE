import axios from 'axios';
import { Dispatch } from 'redux';

import {
  BrandsAction,
  BrandsActionType,
  KeyBrandsForSort,
  KeyRootTree,
} from '../../types/brand';
import { getAllBrands, getUrlBrand } from '../util';

export const fetchBrandsAction = () => {
  return async (dispatch: Dispatch<BrandsAction>) => {
    try {
      dispatch({ type: BrandsActionType.FETCH_BRANDS });
      const respons = await axios.get(getAllBrands());
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

export const createBrand = (title: string) => {
  return async (dispatch: Dispatch<BrandsAction>) => {
    try {
      dispatch({ type: BrandsActionType.CRETE_BRAND });
      const respons = await axios.post(getAllBrands(), {
        _id: '',
        title,
        main: true,
        __v: 0,
      });
      dispatch({
        type: BrandsActionType.CRETE_BRAND_SUCCESS,
        payload: respons.data,
      });
    } catch (error) {
      dispatch({
        type: BrandsActionType.CRETE_BRAND_ERROR,
        payload: `Error: ${error}, ошибка при создании бренда`,
      });
    }
  };
};

export const deletItemCardAction = (
  _id: string,
  titleTree: string
) => {
  return async (dispatch: Dispatch<BrandsAction>) => {
    try {
      dispatch({ type: BrandsActionType.DELETE_ITEM_CARD });
      await axios.delete(getUrlBrand(_id));
      dispatch({
        type: BrandsActionType.DELETE_ITEM_CARD_SUCCESS,
        payload: {
          _id,
          titleTree,
        },
      });
    } catch (error) {
      dispatch({
        type: BrandsActionType.DELETE_ITEM_CARD_ERROR,
        payload: `Error: ${error}, ошибка при удалении item card`,
      });
    }
  };
};

export const updateBrand = (
  _id: string,
  title: string,
  titleTree: string,
  main: boolean
) => {
  return async (dispatch: Dispatch<BrandsAction>) => {
    try {
      dispatch({ type: BrandsActionType.UPDATE_BRAND });
      const respons = await axios.put(getUrlBrand(_id), {
        _id: '',
        title,
        main,
        __v: 0,
      });
      dispatch({
        type: BrandsActionType.UPDATE_BRAND_SUCCESS,
        payload: { updatedBrand: respons.data, titleTree },
      });
    } catch (error) {
      dispatch({
        type: BrandsActionType.UPDATE_BRAND_ERROR,
        payload: `Error: ${error}, ошибка при обновлении бренда`,
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

export const searchBrnadByStringAction = (searchStr: string) => ({
  type: BrandsActionType.SEARCH_BRAND,
  payload: searchStr,
});

export const resetSearchAction = () => ({
  type: BrandsActionType.RESET_SEARCH,
});

export const showEmptyResultAction = () => {
  return async (dispatch: Dispatch<BrandsAction>) => {
    dispatch({
      type: BrandsActionType.SHOW_EMPTY_RESYLT,
    });
    setTimeout(
      () =>
        dispatch({
          type: BrandsActionType.CLOSE_EMPTY_RESYLT,
        }),
      1000
    );
  };
};
