import { Pizza } from './pizzas';

interface PizzaState {
  [key: number]: { pizzaGroup: Array<Pizza>; totalPriceGroup: number };
}

export interface CartState {
  pizzas: PizzaState;
  totalPrice: number;
  totalCount: number;
}

export enum CartActionTypes {
  ADD_PIZZA_CART = 'ADD_PIZZA_CART',
  CLEAR_CART = 'CLEAR_CART',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  PLUS_CART_ITEM = 'PLUS_CART_ITEM',
  MINUS_CART_ITEM = 'MINUS_CART_ITEM',
}

interface AddPizzaCartAction {
  type: CartActionTypes.ADD_PIZZA_CART;
  payload: Pizza;
}

interface ClearCart {
  type: CartActionTypes.CLEAR_CART;
}

interface RemoveCartItem {
  type: CartActionTypes.REMOVE_CART_ITEM;
  payload: number;
}

interface MinusCartItem {
  type: CartActionTypes.PLUS_CART_ITEM;
  payload: number;
}

interface PlusCartItem {
  type: CartActionTypes.MINUS_CART_ITEM;
  payload: number;
}

export type CartAction =
  | AddPizzaCartAction
  | ClearCart
  | RemoveCartItem
  | MinusCartItem
  | PlusCartItem;
