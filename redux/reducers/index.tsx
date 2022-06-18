import { combineReducers } from 'redux';

import { cartReducer } from './carReducers';

const reducers = combineReducers({
  cartReducer,
});

export const rootReducers = (state, action) => {
  return reducers(state, action);
};
