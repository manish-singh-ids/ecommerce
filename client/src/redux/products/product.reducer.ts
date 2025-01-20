import { initialProductState, ProductState } from "./product.state";
import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, ProductActionTypes, SELECTED_PRODUCT } from "./product.type";

export const productReducer = (
    state: ProductState = initialProductState,
    action: ProductActionTypes
): ProductState => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, loading: false, products: action.payload, error: null };
        case FETCH_PRODUCTS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case SELECTED_PRODUCT:
            return { ...state, loading: false, selectedProduct: action.payload, error: null };
        default:
            return state;
    }
};
