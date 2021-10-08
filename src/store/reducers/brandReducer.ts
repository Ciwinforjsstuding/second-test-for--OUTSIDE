import {
  BrandsAction,
  BrandsActionType,
  IBrandReducer,
} from '../../types/bredns';
import { initiallRootTree } from '../constants';
import {
  clearEmptyField,
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
  if (
    action.type === BrandsActionType.FETCH_BRANDS_SUCCESS
  ) {
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
  return state;
};
