import { PRODUCTS, getCategories } from '../../../data/data';
import { addToCart } from '../../../utils/cart';


let selectedCategoryId: number | null = null;
let searchQuery: string = '';

const productsContainer = document.getElementById('products-container') as HTMLElement;
const categoriesList = document.getElementById('categories-list') as HTMLElement;
const searchInput = document.getElementById('search-input') as HTMLInputElement;

function renderCategories(): void {
  const categories = getCategories();
  categoriesList.innerHTML = '<li><button data-id="all">Todas</button></li>';

  categories.forEach(cat => {
    const li = document.createElement('li');
    li.innerHTML = `<button data-id="${cat.id}">${cat.nombre}</button>`;
    categoriesList.appendChild(li);
  });
}

function renderProducts(): void {
  productsContainer.innerHTML = '';

  const filtered = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategoryId === null || product.categoriaId === selectedCategoryId;
    const matchesSearch = product.nombre.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    productsContainer.innerHTML = '<p>No se encontraron productos.</p>';
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.style.border = '1px solid #ccc';
    card.style.padding = '10px';

    card.innerHTML = `
      <h4>${product.nombre}</h4>
      <p>Precio: $${product.precio}</p>
      <button class="add-btn" data-id="${product.id}">Agregar al carrito</button>
    `;

    card.querySelector('.add-btn')?.addEventListener('click', () => {
      addToCart(product);
      alert(`${product.nombre} agregado al carrito.`);
    });

    productsContainer.appendChild(card);
  });
}

categoriesList.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target.tagName === 'BUTTON') {
    const catId = target.getAttribute('data-id');
    selectedCategoryId = catId === 'all' || !catId ? null : Number(catId);
    renderProducts();
  }
});

searchInput.addEventListener('input', (e) => {
  searchQuery = (e.target as HTMLInputElement).value;
  renderProducts();
});

renderCategories();
renderProducts();