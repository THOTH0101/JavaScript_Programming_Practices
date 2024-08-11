// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// cart product
let productID;

// show product when page loads
window.addEventListener('DOMContentLoaded', async () => {
  const urlID = window.location.search;

  try {
    const res = await fetch(`${singleProductUrl}${urlID}`);

    if (res.status >= 200 && res.status <= 299) {
      const product = await res.json();

      const { id, fields } = product;
      productID = id;

      const { name, company, price, colors, description } = fields;
      const image = fields.image[0].thumbnails.large.url;

      document.title = `${name} | Comfy`;
      pageTitleDOM.textContent = `home / ${name}`;
      imgDOM.src = `${image}`;
      titleDOM.textContent = `${name}`;
      companyDOM.textContent = `by ${company}`;
      priceDOM.textContent = `${formatPrice(price)}`;
      descDOM.textContent = `${description}`;

      colors.forEach((color) => {
        const span = document.createElement('span');
        span.classList.add('product-color');
        span.style.background = `${color}`;
        colorsDOM.appendChild(span);
      });
    } else {
      console.log(res.status, res.statusText);
      centerDOM.innerHTML = `
        <div>
            <h3 class="error">sorry, something went wromg</h3>
            <a href="index.html" class="btn">back to home</a>
        </div>
        `;
    }
  } catch (error) {
    console.log(error);
  }

  loading.style.display = 'none';
});

cartBtn.addEventListener('click', () => {
  console.log('hi');
  addToCart(productID);
});
