export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const SELECTED_PRODUCT = 'SELECTED_PRODUCT';

export type ProductActionTypes =
  | { type: typeof FETCH_PRODUCTS_REQUEST }
  | { type: typeof FETCH_PRODUCTS_SUCCESS; payload: Product[] }
  | { type: typeof FETCH_PRODUCTS_FAILURE; payload: string }
  | { type: typeof SELECTED_PRODUCT; payload: Product }; 


export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    reviews: number;
    availabilityStatus: string;
}
