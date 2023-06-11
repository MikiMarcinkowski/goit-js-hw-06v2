function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const bgColorName = document.querySelector('.color');

btn.addEventListener('click', onClickBtn);

function onClickBtn() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  bgColorName.textContent = randomColor;
}