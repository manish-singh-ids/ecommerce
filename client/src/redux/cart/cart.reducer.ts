import { cartState, initialCartState } from "./cart.state";
import { ADD_TO_CART, cartActionTypes } from "./cart.type";

export const cartReducer = (state: cartState = initialCartState, action: cartActionTypes): cartState => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };

        default:
            return state;
    }
};
