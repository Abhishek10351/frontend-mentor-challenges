const form = document.querySelector('form');


// get all input fields

const inputs = document.querySelectorAll('input');


inputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.checkValidity()) {
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');
        } else {
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
        }
    });
});
// also check when input loses focus


form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    inputs.forEach(input => {
        if (input.checkValidity()) {
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');
        } else {
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
        }
    });

    form.classList.add('was-validated');
    form.classList.add('has-validation');
});