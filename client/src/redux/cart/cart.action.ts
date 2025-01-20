import { Product } from "../products/product.type";
import { ADD_TO_CART } from "./cart.type";

export const addToCart = (product: Product | null) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}