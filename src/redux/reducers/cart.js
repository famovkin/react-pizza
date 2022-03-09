const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (array) => {
  return array.reduce((sum, priceItem) => sum + priceItem["price"], 0);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const oneKindPizza = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], oneKindPizza);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: getTotalPrice(allPizzas),
      };
    }

    case "CLEAR_CART": {
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    }

    case "REMOVE_CART_ITEM": {
      const updatedItems = { ...state.items };
      const deletedTotalPrice = updatedItems[action.payload].totalPrice;
      const deletedTotalCount = updatedItems[action.payload].items.length;
      delete updatedItems[action.payload];

      return {
        ...state,
        items: updatedItems,
        totalPrice: state.totalPrice - deletedTotalPrice,
        totalCount: state.totalCount - deletedTotalCount,
      };
    }

    case "PLUS_CART_ITEM": {
      const currentPizzaItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: currentPizzaItems,
            totalPrice: getTotalPrice(currentPizzaItems),
          },
        },
        totalPrice:
          state.totalPrice + state.items[action.payload].items[0].price,
        totalCount: state.totalCount + 1,
      };
    }

    case "MINUS_CART_ITEM": {
      const oldItems = state.items[action.payload].items;
      const newItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems;

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems),
          },
        },
        totalPrice:
          state.totalPrice - state.items[action.payload].items[0].price,
        totalCount: state.totalCount - 1,
      };
    }

    default:
      return state;
  }
};

export default cart;
