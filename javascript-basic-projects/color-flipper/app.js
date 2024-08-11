const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randNum = getRandNum();
  document.body.style.backgroundColor = colors[randNum];
  color.textContent = colors[randNum];
});

function getRandNum() {
  return Math.floor(Math.random() * colors.length);
}
