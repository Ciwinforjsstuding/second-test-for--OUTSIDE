export enum BrandsActionType {
  FETCH_BRANDS = 'FETCH_BRANDS',
  FETCH_BRANDS_SUCCESS = 'FETCH_BRANDS_SUCCESS',
  FETCH_BRANDS_ERROR = 'FETCH_BRANDS_ERROR',
  DELETE_ITEM_CARD = 'DELETE_ITEM_CARD',
  DELETE_ITEM_CARD_ERROR = 'DELETE_ITEM_CARD_ERROR',
  DELETE_ITEM_CARD_SUCCESS = 'DELETE_ITEM_CARD_SUCCESS',
  CRETE_BRAND = 'CRETE_BRAND',
  CRETE_BRAND_ERROR = 'CRETE_BRAND_ERROR',
  CRETE_BRAND_SUCCESS = 'CRETE_BRAND_SUCCESS',
  UPDATE_BRAND = 'UPDATE_BRAND',
  UPDATE_BRAND_ERROR = 'UPDATE_BRAND_ERROR',
  UPDATE_BRAND_SUCCESS = 'UPDATE_BRAND_SUCCESS',
  CREATE_ROOT_TREES = 'CREATE_ROOT_TREES',
  SORT_ROOT_TREE = 'SORT_ROOT_TREE',
  SEARCH_BRAND = 'SEARCH_BRAND',
  SHOW_EMPTY_RESYLT = 'SHOW_EMPTY_RESYLT',
  CLOSE_EMPTY_RESYLT = 'CLOSE_EMPTY_RESYLT',
  RESET_SEARCH = 'RESET_SEARCH',
}

export interface IBrand {
  readonly _id: string;
  title: string;
  main: boolean;
  __v: number;
}

//типизация нашего reducera
export interface IBrandReducer {
  brands: IBrand[];
  loading: boolean;
  loadingRootTree: boolean;
  error: null | string;
  rootTrees: IRootTrees;
  searchResult: IRootTrees;
  isFoundSomething: null | boolean;
  showEmptyResultSearch: null | boolean;
}

//описываем типы для каждого action
interface IFetchBrandsAction {
  type: BrandsActionType.FETCH_BRANDS;
}

interface IFetchBrandsSuccessAction {
  type: BrandsActionType.FETCH_BRANDS_SUCCESS;
  payload: IBrand[];
}

interface IFetchBrandsErrorAction {
  type: BrandsActionType.FETCH_BRANDS_ERROR;
  payload: string;
}

interface ICreateRootTreesAction {
  type: BrandsActionType.CREATE_ROOT_TREES;
  payload: IBrand[];
}

export interface ISortRootTree {
  keyForSort: KeyBrandsForSort;
  titleTree: KeyRootTree;
  up: boolean;
}

interface ISortRootTreeAction {
  type: BrandsActionType.SORT_ROOT_TREE;
  payload: ISortRootTree;
}

interface IDeletItemCardAction {
  type: BrandsActionType.DELETE_ITEM_CARD;
}

interface IDeletItemCardSuccessAction {
  type: BrandsActionType.DELETE_ITEM_CARD_SUCCESS;
  payload: {
    _id: string;
    titleTree: string;
  };
}

interface IDeletItemCardErrorAction {
  type: BrandsActionType.DELETE_ITEM_CARD_ERROR;
  payload: string;
}

interface ICreateBrandAction {
  type: BrandsActionType.CRETE_BRAND;
}

interface ICreateBrandErrorAction {
  type: BrandsActionType.CRETE_BRAND_ERROR;
  payload: string;
}

interface ICreateBrandSuccessAction {
  type: BrandsActionType.CRETE_BRAND_SUCCESS;
  payload: IBrand;
}

interface IUpdateBrandAction {
  type: BrandsActionType.UPDATE_BRAND;
}

interface IUpdateBrandErrorAction {
  type: BrandsActionType.UPDATE_BRAND_ERROR;
  payload: string;
}

export interface IUpdateBrand {
  updatedBrand: IBrand;
  titleTree: string | KeyRootTree;
}

interface IUpdateBrandSuccessAction {
  type: BrandsActionType.UPDATE_BRAND_SUCCESS;
  payload: IUpdateBrand;
}

interface ISearchBrandAction {
  type: BrandsActionType.SEARCH_BRAND;
  payload: string;
}

interface IShowEmptyResultAction {
  type: BrandsActionType.SHOW_EMPTY_RESYLT;
}

interface ICloseEmptyResultAction {
  type: BrandsActionType.CLOSE_EMPTY_RESYLT;
}

interface IResetSearchAction {
  type: BrandsActionType.RESET_SEARCH;
}

export interface IRootTrees {
  [key: string]: IBrand[];
}

export type BrandsAction =
  | IFetchBrandsAction
  | IFetchBrandsSuccessAction
  | IFetchBrandsErrorAction
  | ICreateRootTreesAction
  | ISortRootTreeAction
  | IDeletItemCardAction
  | IDeletItemCardSuccessAction
  | IDeletItemCardErrorAction
  | ICreateBrandAction
  | ICreateBrandErrorAction
  | ICreateBrandSuccessAction
  | IUpdateBrandAction
  | IUpdateBrandErrorAction
  | IUpdateBrandSuccessAction
  | ISearchBrandAction
  | IShowEmptyResultAction
  | IResetSearchAction
  | ICloseEmptyResultAction;

export enum EnumKeyRootTree {
  title = 'title',
  main = 'main',
}

export type KeyBrandsForSort =
  | EnumKeyRootTree.title
  | EnumKeyRootTree.main;

export type KeyRootTree =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z';
