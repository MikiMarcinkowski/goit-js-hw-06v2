const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', (event) => {
    event.target.value = input.value;
    text.style.fontSize = `${input.value}px`
});