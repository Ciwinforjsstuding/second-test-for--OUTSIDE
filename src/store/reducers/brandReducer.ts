import {
  BrandsAction,
  BrandsActionType,
  IBrand,
  IBrandReducer,
} from '../../types/bredns';
import { initiallRootTree } from '../constants';
import {
  clearEmptyField,
  deleteFeildRootTree,
  sliceBrandsToRootTrie,
  sortRootTree,
} from '../util';

const initiallState = {
  brands: [],
  loading: false,
  loadingRootTree: true,
  error: null,
  rootTrees: initiallRootTree,
};

export const brandReducer = (
  state = initiallState,
  action: BrandsAction
): IBrandReducer => {
  if (action.type === BrandsActionType.FETCH_BRANDS) {
    return {
      ...state,
      loading: true,
      error: null,
      brands: [],
    };
  }
  if (action.type === BrandsActionType.FETCH_BRANDS_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      brands: action.payload,
    };
  }
  if (action.type === BrandsActionType.FETCH_BRANDS_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload,
      brands: [],
    };
  }
  if (action.type === BrandsActionType.CREATE_ROOT_TREES) {
    const copyRootTree = { ...state.rootTrees };
    const copyBrands = [...state.brands];
    //создаём корневые деревья из копий
    const newRootTree = sliceBrandsToRootTrie(
      copyBrands,
      copyRootTree
    );
    //удаляем лишнии поля в объекте деревьев
    const cleaningRootTree = clearEmptyField(newRootTree);
    return {
      ...state,
      rootTrees: cleaningRootTree,
      loadingRootTree: false,
    };
  }
  if (action.type === BrandsActionType.SORT_ROOT_TREE) {
    const { rootTrees } = state;
    const { titleTree, up, keyForSort } = action.payload;
    const sortedRootTree = sortRootTree(
      rootTrees[titleTree],
      up,
      keyForSort
    );
    return {
      ...state,
      rootTrees: {
        ...rootTrees,
        [titleTree]: sortedRootTree,
      },
    };
  }
  if (action.type === BrandsActionType.DELETE_ITEM_CARD) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === BrandsActionType.DELETE_ITEM_CARD_SUCCESS) {
    const { _id, titleTree } = action.payload;
    const deletedCardItem = state.brands.filter(
      (brand: IBrand) => brand._id !== action.payload._id
    );

    const newRootTree = deleteFeildRootTree(
      _id,
      state.rootTrees,
      titleTree
    );
    return {
      ...state,
      loading: false,
      brands: deletedCardItem,
      rootTrees: newRootTree,
    };
  }
  if (action.type === BrandsActionType.DELETE_ITEM_CARD_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};
