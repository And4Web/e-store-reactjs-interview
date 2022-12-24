import * as actionTypes from './types';

export const addToCart = (data) => async (dispatch) => {
  dispatch(_addToCart);
}

export const _addToCart = (item) => {
  return {
    type: actionTypes.ADD_CART_ITEM,
    data: item
  }
}