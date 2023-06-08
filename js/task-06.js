const input = document.querySelector('#validation-input');

input.addEventListener('blur', (event) => {
    if (event.target.value.length == input.dataset.length) {
        input.classList.add('valid');
        // console.log(input.dataset.length);

        if (input.classList.contains('invalid')) {
            input.classList.remove('invalid');
        } 
    } else {
        if (input.classList.contains('valid')) {
            input.classList.remove('valid');
        }
        input.classList.add('invalid');
    }
})

