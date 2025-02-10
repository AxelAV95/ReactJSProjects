export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface ProductsState {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
