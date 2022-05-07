import { CartActionTypes } from '../../types/cart';
import { Pizza } from '../../types/pizzas';

export const addPizzaToCart = (pizzaObj: Pizza) => ({
  type: CartActionTypes.ADD_PIZZA_CART,
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});

export const removeCartItem = (id: number) => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: id,
});

export const plusCartItem = (id: number) => ({
  type: CartActionTypes.PLUS_CART_ITEM,
  payload: id,
});

export const minusCartItem = (id: number) => ({
  type: CartActionTypes.MINUS_CART_ITEM,
  payload: id,
});
