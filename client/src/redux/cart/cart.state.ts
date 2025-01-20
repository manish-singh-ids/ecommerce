import { Product } from "../products/product.type";

export interface cartState {
    cart: Product[]
}


export const initialCartState: cartState = {
    cart: []
}