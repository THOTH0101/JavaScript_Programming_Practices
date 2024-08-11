let filteredProducts = [...products];

// select elements
const productsContainer = document.querySelector('.products-container');
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
const companiesDOM = document.querySelector('.companies');

// functions
// display items
const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no product matched your search</h6>`;
    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, company, image, price }) => {
      return `<article class="product" data-id="${id}">
        <img src="${image}" alt="" class="product-img img">
        <footer>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">$${price}</span>
        </footer>
      </article>`;
    })
    .join('');
};

displayProducts();

// display buttons
const displayButtons = () => {
  const companies = ['all', ...new Set(products.map((item) => item.company))];
  companiesDOM.innerHTML = companies
    .map(
      (company) =>
        `<button class="company-btn" data-id="${company}">${company}</button>`
    )
    .join('');
};

displayButtons();

// actions
form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  console.log(inputValue);
  filteredProducts = products.filter((item) => {
    return item.title.toLowerCase().includes(inputValue);
  });

  displayProducts();
});

companiesDOM.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains('company-btn')) {
    if (element.dataset.id === 'all') filteredProducts = [...products];
    else
      filteredProducts = products.filter(
        (item) => item.company === element.dataset.id
      );

    searchInput.value = '';
    displayProducts();
  }
});
