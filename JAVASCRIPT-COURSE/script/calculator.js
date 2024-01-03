let calculation = localStorage.getItem('calculation');

const innerCalculation = document.querySelector('.js-calculation');

innerCalculation.innerHTML = calculation;
      
function updateCalculation(button) {
    calculation += button;
    innerCalculation.innerHTML = calculation;
}