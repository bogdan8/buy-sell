import * as types from './actionTypes';

export function addCategory(paramsCategory) {
  return {
    type: types.ADD_CATEGORY,
    valueCategory: paramsCategory
  }
}

export function editCategory(paramsCategory) {
  return {
    type: types.EDIT_CATEGORY,
    valueCategory: paramsCategory
  }
}

export function removeCategory(indexCategory) {
  return {
    type: types.REMOVE_CATEGORY,
    indexCategory: indexCategory
  }
}

export function currentCategory(categoryName) {
  return {
    type: types.CURRENT_CATEGORY,
    currentCategory: categoryName
  }
}