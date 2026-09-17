export interface IProduct {
  id: number;
  nombre: string;
  precio: number;
  categoriaId: number;
  imagen?: string;
}

export interface ICartItem {
  product: IProduct;
  cantidad: number;
}