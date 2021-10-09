import {
  BrandsAction,
  BrandsActionType,
  IBrand,
  IBrandReducer,
} from '../../types/brand';
import { initiallRootTree, initiallSearchResult } from '../constants';
import {
  addBrandToRootTree,
  clearEmptyField,
  deleteFeildRootTree,
  isObjectEmpty,
  searchBrand,
  sliceBrandsToRootTrie,
  sortRootTree,
  updateBrandToRootTree,
} from '../util';

const initiallState = {
  brands: [],
  loading: false,
  loadingRootTree: true,
  error: null,
  rootTrees: initiallRootTree,
  searchResult: JSON.parse(JSON.stringify(initiallSearchResult)),
  isFoundSomething: null,
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
      brands: deletedCardItem,
      rootTrees: newRootTree,
    };
  }
  if (action.type === BrandsActionType.DELETE_ITEM_CARD_ERROR) {
    return {
      ...state,
      error: action.payload,
    };
  }
  if (action.type === BrandsActionType.CRETE_BRAND) {
    return {
      ...state,
      error: null,
    };
  }
  if (action.type === BrandsActionType.CRETE_BRAND_SUCCESS) {
    const { payload } = action;
    return {
      ...state,
      rootTrees: addBrandToRootTree(state.rootTrees, payload),
    };
  }
  if (action.type === BrandsActionType.CRETE_BRAND_ERROR) {
    return {
      ...state,
      error: action.payload,
    };
  }
  if (action.type === BrandsActionType.UPDATE_BRAND) {
    return {
      ...state,
      error: null,
    };
  }
  if (action.type === BrandsActionType.UPDATE_BRAND_SUCCESS) {
    const { updatedBrand, titleTree } = action.payload;
    return {
      ...state,
      rootTrees: updateBrandToRootTree(
        state.rootTrees,
        updatedBrand,
        titleTree
      ),
    };
  }
  if (action.type === BrandsActionType.SEATCH_BRAND) {
    const resultSearch = searchBrand(
      action.payload,
      state.brands,
      state.searchResult
    );
    if (isObjectEmpty(resultSearch)) {
      return {
        ...state,
        isFoundSomething: false,
      };
    }
    return {
      ...state,
      searchResult: resultSearch,
      isFoundSomething: true,
    };
  }
  return state;
};
