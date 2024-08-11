import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {
  const res = await fetch(allProductsUrl).catch((err) => {
    console.log(err);
  });

  if (res) return res.json();
  return res;
};

export default fetchProducts;
