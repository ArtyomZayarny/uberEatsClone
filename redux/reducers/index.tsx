import { combineReducers } from 'redux';
import { cartReducer } from './carReducers';

export const rootReducers = combineReducers({
  cart: cartReducer,
});
