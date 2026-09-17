import type { IProduct } from '../types/product';
import type { ICategoria } from '../types/categoria';

export const PRODUCTS: IProduct[] = [
  { id: 1, nombre: 'Teclado Mecánico', precio: 45000, categoriaId: 1 },
  { id: 2, nombre: 'Mouse Inalámbrico', precio: 18000, categoriaId: 1 },
  { id: 3, nombre: 'Monitor 24"', precio: 120000, categoriaId: 2 },
  { id: 4, nombre: 'Auriculares Gaming', precio: 32000, categoriaId: 1 },
  { id: 5, nombre: 'Silla Gamer', precio: 50000, categoriaId: 3 }
];

export function getCategories(): ICategoria[] {
  return [
    { id: 1, nombre: 'Periféricos' },
    { id: 2, nombre: 'Monitores' }
  ];
}