export const setPizzas = (pizzas) => ({
  type: "SET_PIZZAS",
  payload: pizzas,
});

export const setLoaded = (boolean) => ({
  type: "SET_LOADED",
  payload: boolean,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  fetch(`/pizzas?${ category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`)
      .then((res) => res.json())
      .then((data) => (dispatch(setPizzas(data))));
};