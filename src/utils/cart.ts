import type { ICartItem, IProduct } from '../types/product';

const CART_KEY = 'cart';

export function getCart(): ICartItem[] {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveCart(cart: ICartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(product: IProduct): void {
  const cart = getCart();
  const existingItem = cart.find(item => item.product.id === product.id);

  if (existingItem) {
    existingItem.cantidad += 1;
  } else {
    cart.push({ product, cantidad: 1 });
  }

  saveCart(cart);
}

export function calculateTotal(): number {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.product.precio * item.cantidad, 0);
}