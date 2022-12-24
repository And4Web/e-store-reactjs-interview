import * as actionTypes from '../../actions/cart/types';
import { addToCart } from '../../actions/cart';

let initialState = {
  item: [],
  itemPriceTotal: 0,
  totalItems: 0,
  totalQuantity: 0
}

export const cart = (state=initialState, action) => {

}