import { Dispatch } from 'redux';
import axios from 'axios';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  Product,
  SELECTED_PRODUCT,
} from './product.type';
import { RootState } from '../rootReducer';

const URL = import.meta.env.VITE_URL

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products: Product[]) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error: string) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const selectedProduct = (product: Product) => ({
  type: SELECTED_PRODUCT,
  payload: product,
});


export const fetchProducts = () => async (dispatch: Dispatch, _getState: () => RootState): Promise<void> => {
  dispatch(fetchProductsRequest());
  try {
    const response = await axios.get<Product[]>(URL);
    dispatch(fetchProductsSuccess(response.data));
  } catch (error: any) {
    dispatch(fetchProductsFailure(error.message || 'Failed to fetch products'));
  }
};
