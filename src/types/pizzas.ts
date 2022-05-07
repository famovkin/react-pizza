export interface PizzasState {
  pizzas: Array<Pizza>;
  isLoaded: boolean;
}

export interface Pizza {
  id: number;
  name: string;
  imageUrl: string;
  type: string;
  size: number;
  price: number;
}

export const SET_PIZZAS = 'SET_PIZZAS';
export const SET_LOADED = 'SET_LOADED';

export interface SetPizzasAction {
  type: typeof SET_PIZZAS;
  payload: Array<Pizza>;
}

export interface SetLoadedAction {
  type: typeof SET_LOADED;
  payload: boolean;
}

export type PizzasActions = SetPizzasAction | SetLoadedAction;
