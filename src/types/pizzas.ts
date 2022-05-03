export interface PizzasState {
  isLoaded: boolean;
  items: Array<Pizza>;
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

interface SetPizzasAction {
  type: typeof SET_PIZZAS;
  payload: Array<Pizza>;
}

interface SetLoaded {
  type: typeof SET_LOADED;
  payload: boolean;
}

export type PizzasActions = SetPizzasAction | SetLoaded;
