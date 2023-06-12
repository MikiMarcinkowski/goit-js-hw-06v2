const counter = document.querySelector('#counter');
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');


let counterValue = 0;

const decrementHandleClick = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

decrement.addEventListener("click", decrementHandleClick);

const incrementHandleClick = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

increment.addEventListener("click", incrementHandleClick);


