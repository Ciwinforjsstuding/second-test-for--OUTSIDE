import { IBrand, KeyBrandsForSort } from '../types/bredns';

export const sliceBrandsToRootTrie = (
  brands: IBrand[],
  rootTrees: any
) => {
  // eslint-disable-next-line
  brands.map((brand: IBrand) => {
    const firstLetterInTitle = brand.title[0].toLowerCase();
    rootTrees[firstLetterInTitle].push(brand);
  });
  return rootTrees;
};

//TODO: убери any и сделай возвращение типа
export const clearEmptyField = (dirtyRootTrees: any) => {
  for (let key in dirtyRootTrees) {
    if (dirtyRootTrees[key].length === 0) {
      delete dirtyRootTrees[key];
    }
  }
  return dirtyRootTrees;
};

export const sortRootTree = (
  rootTrees: IBrand[],
  up: boolean,
  keyForSort: KeyBrandsForSort
): IBrand[] => {
  const copyRootTree = [...rootTrees];
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
