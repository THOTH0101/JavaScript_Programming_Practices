import { getStorageItem, setStorageItem } from './utils.js';

let store = getStorageItem('store');

const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { company, featured, name, price, colors, image: img },
    } = product;

    const image = img[0].thumbnails.large.url;
    return { id, company, featured, name, price, colors, image };
  });
  setStorageItem('store', store);
};

const findProduct = (id) => {
  const product = store.find((product) => product.id === id);
  return product;
};

export { store, setupStore, findProduct };
