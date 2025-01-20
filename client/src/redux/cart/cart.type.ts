import { Product } from "../products/product.type";

export const ADD_TO_CART = "ADD_TO_CART";

export type cartActionTypes =
    | { type: typeof ADD_TO_CART, payload: Product }
