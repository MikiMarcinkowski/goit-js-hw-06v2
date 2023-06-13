function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const div = document.querySelector('#controls');
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');


const createBoxes = (amount) => {
  let newBoxes = [];
  let width = 30
  let height = 30
  
  for (let i = 0; i < input.value; i += 1){
    const addBox = document.createElement('div');
    addBox.style.width = `${width}px`;
    addBox.style.height = `${height}px`;
    addBox.style.backgroundColor = getRandomHexColor();
    width += 10;
    height += 10;
    
    newBoxes.push(addBox);
  }
  boxes.append(...newBoxes);
  input.value = '';
  
}
createBtn.addEventListener('click', createBoxes);

destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = '';
}