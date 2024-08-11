import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
  const priceInput = getElement('.price-filter');
  const priceValue = getElement('.price-value');

  const prices = store.map((product) => product.price);
  const maxPrice = Math.ceil(Math.max(...prices) / 100);
  const minPrice = Math.ceil(Math.min(...prices) / 100);

  priceInput.max = maxPrice;
  priceInput.value = maxPrice;
  priceInput.min = minPrice;
  priceValue.textContent = `Value: $${maxPrice}`;

  priceInput.addEventListener('input', () => {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value: $${value}`;

    let newStore = store.filter((product) => product.price / 100 <= value);
    display(newStore, getElement('.products-container'), true);
  });
};

export default setupPrice;
