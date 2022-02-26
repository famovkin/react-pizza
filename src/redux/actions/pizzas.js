export const setPizzas = (pizzas) => ({
  type: "SET_PIZZAS",
  payload: pizzas,
});

export const fetchPizzas = () => (dispatch) => {
  fetch("http://localhost:3001/pizzas")
      .then((res) => res.json())
      .then((data) => (dispatch(setPizzas(data))));
};