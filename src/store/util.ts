import {
  IBrand,
  IRootTrees,
  KeyBrandsForSort,
} from '../types/bredns';

export const createFirtsLetterInTitle = (brand: IBrand) =>
  brand.title[0].toLowerCase();

export const sliceBrandsToRootTrie = (
  brands: IBrand[],
  rootTrees: IRootTrees
) => {
  brands.map((brand: IBrand) => {
    const firstLetterInTitle = createFirtsLetterInTitle(brand);
    return rootTrees[firstLetterInTitle].push(brand);
  });
  return rootTrees;
};

export const clearEmptyField = (dirtyRootTrees: IRootTrees) => {
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
) => {
  const resultRootTree = rootTrees[titleTree].filter(
    brand => brand._id !== _id
  );
  const newRootTrees = { ...rootTrees, [titleTree]: resultRootTree };
  return newRootTrees;
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
