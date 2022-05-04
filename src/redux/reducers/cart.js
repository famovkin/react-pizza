const initialState = {
  pizzas: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (array) => {
  return array.reduce((sum, item) => sum + item['price'], 0);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const addedPizzaGroup = !state.pizzas[action.payload.id]
        ? [action.payload]
        : [...state.pizzas[action.payload.id].pizzaGroup, action.payload];

      const updatedPizzas = {
        ...state.pizzas,
        [action.payload.id]: {
          pizzaGroup: addedPizzaGroup,
          totalPriceGroup: getTotalPrice(addedPizzaGroup),
        },
      };

      const allPizzas = Object.values(updatedPizzas).map(
        (obj) => obj.pizzaGroup
      );
      const allPizzasInArray = [].concat.apply([], allPizzas);

      return {
        ...state,
        pizzas: updatedPizzas,
        totalCount: allPizzasInArray.length,
        totalPrice: getTotalPrice(allPizzasInArray),
      };
    }

    case 'CLEAR_CART': {
      return {
        pizzas: {},
        totalPrice: 0,
        totalCount: 0,
      };
    }

    case 'REMOVE_CART_ITEM': {
      const updatedPizzas = { ...state.pizzas };
      const deletedTotalPrice = updatedPizzas[action.payload].totalPriceGroup;
      const deletedTotalCount = updatedPizzas[action.payload].pizzaGroup.length;
      delete updatedPizzas[action.payload];

      return {
        ...state,
        pizzas: updatedPizzas,
        totalPrice: state.totalPrice - deletedTotalPrice,
        totalCount: state.totalCount - deletedTotalCount,
      };
    }

    case 'PLUS_CART_ITEM': {
      const increasedPizzaItems = [
        ...state.pizzas[action.payload].pizzaGroup,
        state.pizzas[action.payload].pizzaGroup[0],
      ];

      return {
        ...state,
        pizzas: {
          ...state.pizzas,
          [action.payload]: {
            pizzaGroup: increasedPizzaItems,
            totalPriceGroup: getTotalPrice(increasedPizzaItems),
          },
        },
        totalPrice:
          state.totalPrice + state.pizzas[action.payload].pizzaGroup[0].price,
        totalCount: state.totalCount + 1,
      };
    }

    case 'MINUS_CART_ITEM': {
      const currentPizzaGroup = state.pizzas[action.payload].pizzaGroup;
      const updatedPizzaGroup =
        currentPizzaGroup.length > 1
          ? currentPizzaGroup.slice(1)
          : currentPizzaGroup;

      return {
        ...state,
        pizzas: {
          ...state.pizzas,
          [action.payload]: {
            pizzaGroup: updatedPizzaGroup,
            totalPriceGroup: getTotalPrice(updatedPizzaGroup),
          },
        },
        totalPrice:
          state.totalPrice - state.pizzas[action.payload].pizzaGroup[0].price,
        totalCount: state.totalCount - 1,
      };
    }

    default:
      return state;
  }
};

export default cart;
