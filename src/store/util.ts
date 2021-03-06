import { IBrand, IRootTrees, KeyBrandsForSort } from '../types/brand';
import { initiallSearchResult } from './constants';

export const getAllBrands = (): string =>
  'https://recruting-test-api.herokuapp.com/api/v1/brands';

export const getUrlBrand = (_id: string): string =>
  `https://recruting-test-api.herokuapp.com/api/v1/brand/${_id}`;

export const createFirtsLetterInTitle = (brand: IBrand): string =>
  brand.title[0].toLowerCase();

export const unlinkObject = (object: IRootTrees): IRootTrees =>
  JSON.parse(JSON.stringify(object));

export const sliceBrandsToRootTrie = (
  brands: IBrand[],
  rootTrees: IRootTrees
): IRootTrees => {
  const copyRootTrees = unlinkObject(rootTrees);
  brands.map((brand: IBrand) => {
    const firstLetterInTitle = createFirtsLetterInTitle(brand);
    return (copyRootTrees[firstLetterInTitle] = [
      ...copyRootTrees[firstLetterInTitle],
      brand,
    ]);
  });
  return copyRootTrees;
};

export const clearEmptyField = (
  dirtyRootTrees: IRootTrees
): IRootTrees => {
  for (let key in dirtyRootTrees) {
    if (dirtyRootTrees[key].length === 0) {
      delete dirtyRootTrees[key];
    }
  }
  return dirtyRootTrees;
};

export const deleteFeildRootTree = (
  _id: string,
  rootTrees: IRootTrees,
  titleTree: string
): IRootTrees => {
  const filtereDRootTree = rootTrees[titleTree].filter(
    brand => brand._id !== _id
  );
  const newRootTrees = {
    ...rootTrees,
    [titleTree]: filtereDRootTree,
  };
  return newRootTrees;
};

export const addBrandToRootTree = (
  rootTrees: IRootTrees,
  newBrand: IBrand
): IRootTrees => {
  const copyRootTrees = unlinkObject(rootTrees);
  const firstLetterInTitle = createFirtsLetterInTitle(newBrand);
  copyRootTrees[firstLetterInTitle].push(newBrand);
  return copyRootTrees;
};

export const updateBrandToRootTree = (
  rootTrees: IRootTrees,
  updatedBrand: IBrand,
  titleTree: string
): IRootTrees => {
  const newRootTreeWithUpdateBrand = rootTrees[titleTree].map(brand =>
    brand._id === updatedBrand._id ? updatedBrand : brand
  );
  const newRootTrees = {
    ...rootTrees,
    [titleTree]: newRootTreeWithUpdateBrand,
  };
  return newRootTrees;
};

export const sortRootTree = (
  rootTree: IBrand[],
  up: boolean,
  keyForSort: KeyBrandsForSort
): IBrand[] => {
  const copyRootTree = [...rootTree];
  //???????????????????? ???? ??????????????????????
  if (up) {
    copyRootTree.sort((item1, item2) =>
      item1[keyForSort] < item2[keyForSort] ? 1 : -1
    );
  }
  //???????????????????? ???? ????????????????
  if (!up) {
    copyRootTree.sort((item1, item2) =>
      item1[keyForSort] > item2[keyForSort] ? 1 : -1
    );
  }
  return copyRootTree;
};

export const isValueInputEmpty = (value: string): boolean =>
  value.length === 0;

export const isValueInputValidForTitleTree = (
  value: string,
  titleTree: string
): boolean => value[0].toLocaleLowerCase() !== titleTree;

export const searchBrand = (
  searchString: string,
  brans: IBrand[]
): IRootTrees => {
  const filteredArr = brans.filter(brand =>
    brand.title.indexOf(searchString) > -1 ? true : false
  );
  const copyInitiall = unlinkObject(initiallSearchResult);
  if (filteredArr.length === 0) {
    return copyInitiall;
  }
  const dirtyFilteredRootTree = sliceBrandsToRootTrie(
    filteredArr,
    copyInitiall
  );
  return clearEmptyField(dirtyFilteredRootTree);
};

export const isSearchRootTreeEquelInitiallSearch = (
  searchResult: IRootTrees
): boolean => {
  const keysSearchResult = Object.keys(searchResult);
  const keysInitialSearchResult = Object.keys(initiallSearchResult);
  if (keysSearchResult.length !== keysInitialSearchResult.length) {
    return false;
  }
  for (let i = 0; i < keysInitialSearchResult.length; i++) {
    const key = keysInitialSearchResult[i];
    if (
      searchResult[key].length !== initiallSearchResult[key].length
    ) {
      return false;
    }
  }
  return true;
};
