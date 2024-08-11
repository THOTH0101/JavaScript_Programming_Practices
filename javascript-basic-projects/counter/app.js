let counter = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('decrease')) {
      counter--;
    } else if (e.currentTarget.classList.contains('increase')) {
      counter++;
    } else {
      counter = 0;
    }

    if (counter > 0) {
      value.style.color = 'green';
    }

    if (counter < 0) {
      value.style.color = 'red';
    }

    if (counter === 0) {
      value.style.color = 'black';
    }

    value.textContent = counter;
  });
});
