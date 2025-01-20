import { Product } from "./product.type";

export interface ProductState {
    loading: boolean;
    products: Product[];
    selectedProduct: Product | null; 
    error: string | null;
  }
  
  export const initialProductState: ProductState = {
    loading: false,
    products: [],
    selectedProduct: null,
    error: null,
  };
  