// select all span
const numbers = document.querySelectorAll('.number');

// function
const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;
  console.log(increment);

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    el.textContent = `${initialValue}+`;
  }, 1);
};

// iterate over span
for (const number of numbers) {
  updateCount(number);
}
