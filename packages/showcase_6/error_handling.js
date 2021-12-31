const inputs = document.querySelectorAll('.input-group__input');
const form = document.querySelector('form.form');

(function () {
    if (!inputs.length || !form) return;

    inputs.forEach(input => {
        input.addEventListener('invalid', ({target}) => {
            target.parentElement.classList.add('invalid');
        });
        input.addEventListener('change', ({target}) => {
            target.parentElement.classList.remove('invalid');
        })
    });
}());
