const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const allPizzas = [].concat.apply([], Object.values(newItems));
      const totalAmount = allPizzas.reduce((sum, priceItem) => {
        return sum + priceItem["price"];
      }, 0);
      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: totalAmount,
      };
    }
    default:
      return state;
  }
};

export default cart;
