import { IBrand, IRootTrees, KeyBrandsForSort } from '../types/brand';
import { initiallSearchResult } from './constants';

export const createFirtsLetterInTitle = (brand: IBrand): string =>
  brand.title[0].toLowerCase();

export const sliceBrandsToRootTrie = (
  brands: IBrand[],
  rootTrees: IRootTrees
): IRootTrees => {
  brands.map((brand: IBrand) => {
    const firstLetterInTitle = createFirtsLetterInTitle(brand);
    return rootTrees[firstLetterInTitle].push(brand);
  });
  return rootTrees;
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
  const resultRootTree = rootTrees[titleTree].filter(
    brand => brand._id !== _id
  );
  const newRootTrees = { ...rootTrees, [titleTree]: resultRootTree };
  return newRootTrees;
};

export const addBrandToRootTree = (
  rootTrees: IRootTrees,
  newBrand: IBrand
): IRootTrees => {
  const copyRootTrees = { ...rootTrees };
  const firstLetterInTitle = createFirtsLetterInTitle(newBrand);
  copyRootTrees[firstLetterInTitle].push(newBrand);
  return copyRootTrees;
};

export const updateBrandToRootTree = (
  rootTrees: IRootTrees,
  updatedBrand: IBrand,
  titleTree: string
): IRootTrees => {
  const newRootTree = rootTrees[titleTree].map(brand =>
    brand._id === updatedBrand._id ? updatedBrand : brand
  );
  const newRootTrees = { ...rootTrees, [titleTree]: newRootTree };
  return newRootTrees;
};

export const sortRootTree = (
  rootTree: IBrand[],
  up: boolean,
  keyForSort: KeyBrandsForSort
): IBrand[] => {
  const copyRootTree = [...rootTree];
  //сортировка по возрастанию
  if (up) {
    copyRootTree.sort((item1, item2) =>
      item1[keyForSort] < item2[keyForSort] ? 1 : -1
    );
  }
  //сортировка по убыванию
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
  brans: IBrand[],
  searchResult: IRootTrees
) => {
  const filteredArr = brans.filter(brand =>
    brand.title.indexOf(searchString) > -1 ? true : false
  );
  if (filteredArr.length === 0) {
    return JSON.parse(JSON.stringify(initiallSearchResult));
  }
  console.log('filteredArr', filteredArr);
  const dirtyFilteredRootTree = sliceBrandsToRootTrie(
    filteredArr,
    searchResult
  );
  console.log('dirtyFilteredRootTree', dirtyFilteredRootTree);
  const vari = clearEmptyField(dirtyFilteredRootTree);
  console.log('clearTree', vari);
  return vari;
  // let copyRootTrees = { ...rootTrees };
  // const keys = Object.keys(copyRootTrees);
  // keys.forEach(key => {
  //   const filteredRootTree = copyRootTrees[key].filter(brand =>
  //    brand.title.indexOf(searchString) > -1 ? true : false
  //   );
  //   copyRootTrees = { ...copyRootTrees, [key]: filteredRootTree };
  // });
  // return clearEmptyField(copyRootTrees);
};

export const isObjectEmpty = (object: object): Boolean =>
  Object.keys(object).length === 0 ? true : false;

export const isSearchRootTreeEquelInitiallSearch = (
  searchResult: IRootTrees
) => {};
