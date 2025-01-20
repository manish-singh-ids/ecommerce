import { createStore, applyMiddleware, Middleware } from 'redux';
import {thunk} from 'redux-thunk';
import { rootReducer } from './rootReducer';

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as unknown as Middleware)
);
