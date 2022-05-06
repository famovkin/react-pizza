import { combineReducers } from 'redux';
import filterReducer from './filters';
import pizzasReducer from './pizzas';
import cartReducer from './cart';

const rootReducer = combineReducers({
  filterReducer,
  pizzasReducer,
  cartReducer,
});

export default rootReducer;
