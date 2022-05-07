import { Dispatch } from 'redux';
import {
  Pizza,
  PizzasActions,
  SetLoadedAction,
  SetPizzasAction,
  SET_LOADED,
  SET_PIZZAS,
} from '../../types/pizzas';

export const setPizzas = (pizzas: Array<Pizza>): SetPizzasAction => ({
  type: SET_PIZZAS,
  payload: pizzas,
});

export const setLoaded = (status: boolean): SetLoadedAction => ({
  type: SET_LOADED,
  payload: status,
});

export const fetchPizzas =
  (sortBy: string, category: string) => (dispatch: Dispatch<PizzasActions>) => {
    dispatch(setLoaded(false));
    fetch(
      `/pizzas?${
        category !== null ? `category=${category}` : ''
      }&_sort=${sortBy}&_order=asc`
    )
      .then((res) => res.json())
      .then((data) => dispatch(setPizzas(data)));
  };
