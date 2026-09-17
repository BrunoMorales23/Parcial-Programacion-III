import { getCart, calculateTotal } from '../../../utils/cart';

const cartContainer = document.getElementById('cart-items') as HTMLElement;
const totalElement = document.getElementById('cart-total') as HTMLElement;
const clearButton = document.getElementById('clear-cart') as HTMLButtonElement;

function renderCart(): void {
  const items = getCart();
  cartContainer.innerHTML = '';

  if (items.length === 0) {
    cartContainer.innerHTML = '<p>El carrito está vacío.</p>';
    totalElement.textContent = '0';
    clearButton.style.display = 'none';
    return;
  }

  const list = document.createElement('ul');

  items.forEach(item => {
    const li = document.createElement('li');

    const subtotal = item.product.precio * item.cantidad;

    li.textContent = `${item.product.nombre} - Cantidad: ${item.cantidad} - Precio Unitario: $${item.product.precio} (Subtotal: $${subtotal})`;

    const decreaseButton = document.createElement('button');
    decreaseButton.textContent = '-';

    decreaseButton.addEventListener('click', () => {
      item.cantidad--;

      if (item.cantidad <= 0) {
        const index = items.indexOf(item);
        items.splice(index, 1);
      }

      localStorage.setItem('cart', JSON.stringify(items));

      renderCart();
    });

    li.appendChild(decreaseButton);
    list.appendChild(li);
  });

  cartContainer.appendChild(list);
  totalElement.textContent = calculateTotal().toString();
}

clearButton.addEventListener('click', clearCart);

function clearCart(): void {
  localStorage.removeItem('cart');
  renderCart();
}

renderCart();