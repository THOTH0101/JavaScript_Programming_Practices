import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupSearch = (store) => {
  const form = getElement('.input-form');
  const nameInput = getElement('.search-input');
  const productsContainer = getElement('.products-container');

  form.addEventListener('keyup', () => {
    const value = nameInput.value;

    if (value) {
      const newStore = store.filter((product) => {
        let { name } = product;
        name = name.toLowerCase();

        if (name.startsWith(value)) return product;
      });

      display(newStore, productsContainer, true);

      if (newStore.length < 1) {
        productsContainer.innerHTML = `<h3 class="filter-error">
        sorry, no product match your search
        </h3>`;
      }
    } else display(store, productsContainer, true);
  });
};

export default setupSearch;
