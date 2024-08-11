// select element
const btn = document.querySelector('.btn');
const articleContainer = document.querySelector('.articles');

// add eventlistener
let articleData = articles
  .map((article) => {
    return `<article class="post">
      <h2>${article.title}</h2>
      <div class="post-info">
        <span>${article.date.toDateString()}</span>
        <span>${article.length} min read</span>
      </div>
      <p>${article.snippet}</p>
    </article>`;
  })
  .join('');

articleContainer.innerHTML = articleData;

btn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
});
