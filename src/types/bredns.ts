export enum BrandsActionType {
  FETCH_BRANDS = 'FETCH_BRANDS',
  FETCH_BRANDS_SUCCESS = 'FETCH_BRANDS_SUCCESS',
  FETCH_BRANDS_ERROR = 'FETCH_BRANDS_ERROR',
  CREATE_ROOT_TREES = 'CREATE_ROOT_TREES',
  SORT_ROOT_TREE = 'SORT_ROOT_TREE',
}

export interface IBrand {
  readonly id: string | number;
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
  rootTrees: any;
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

interface ICreateRootTrees {
  type: BrandsActionType.CREATE_ROOT_TREES;
  payload: IBrand[];
}

export interface ISortRootTreeAction {
  keyForSort: KeyBrandsForSort;
  titleTree: KeyRootTree;
  up: boolean;
}

interface ISortRootTree {
  type: BrandsActionType.SORT_ROOT_TREE;
  payload: ISortRootTreeAction;
}

export type BrandsAction =
  | IFetchBrandsAction
  | IFetchBrandsSuccessAction
  | IFetchBrandsErrorAction
  | ICreateRootTrees
  | ISortRootTree;

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
