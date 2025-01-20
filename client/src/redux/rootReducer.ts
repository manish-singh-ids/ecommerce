import { combineReducers } from 'redux';
import { productReducer } from './products/product.reducer';
import { cartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers({
  product: productReducer,
  cart : cartReducer
});

export type RootState = ReturnType<typeof rootReducer>;
