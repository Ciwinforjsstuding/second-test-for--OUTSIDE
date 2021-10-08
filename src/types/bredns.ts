export enum BrandsActionType {
  FETCH_BRANDS = 'FETCH_BRANDS',
  FETCH_BRANDS_SUCCESS = 'FETCH_BRANDS_SUCCESS',
  FETCH_BRANDS_ERROR = 'FETCH_BRANDS_ERROR',
  DELETE_ITEM_CARD = 'DELETE_ITEM_CARD',
  DELETE_ITEM_CARD_ERROR = 'DELETE_ITEM_CARD_ERROR',
  DELETE_ITEM_CARD_SUCCESS = 'DELETE_ITEM_CARD_SUCCESS',
  CREATE_ROOT_TREES = 'CREATE_ROOT_TREES',
  SORT_ROOT_TREE = 'SORT_ROOT_TREE',
}

export interface IBrand {
  readonly _id: string;
  title: string;
  main: boolean;
  _v: number;
}

//типизация нашего reducera
export interface IBrandReducer {
  brands: IBrand[];
  loading: boolean;
  loadingRootTree: boolean;
  error: null | string;
  rootTrees: IRootTrees;
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
  | IDeletItemCardErrorAction;

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
