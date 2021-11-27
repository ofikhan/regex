const inputs = document.querySelectorAll('input');

const patterns = {
    username: /^[a-z\d]{5,12}$/,
    email: /^[a-z\d\._-]+@[a-z\d-]+\.[a-z]+(\.[a-z]+)?$/,
    password: /^[\w@-]{8,20}$/,
    mobile: /^01[3-9]{1}\d{8}$/,
}

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});