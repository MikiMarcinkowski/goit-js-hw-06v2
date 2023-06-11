const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
         alert("Uzupełnij wszystkie pola");
    }

    const userData = {
        email: event.currentTarget.elements.email,
        password: event.currentTarget.elements.password
    }
    console.log(userData);

    form.reset;

}

