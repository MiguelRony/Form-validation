import styles from './styles.css';

const form = document.querySelector('form');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zip = document.querySelector('#zipcode');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');
const emailError = document.querySelector('#email + span.error');
const countryError = document.querySelector('#country + span.error');
const zipError = document.querySelector('#zipcode + span.error');
const passwordError = document.querySelector('#password + span.error');
const passwordConfirmError = document.querySelector('#passwordConfirm + span.error');


function validateForm(event) {
    event.preventDefault();
    validateEmail();
    validateCountry();
    validateZip();
    validatePassword();
    validatePasswordConfirm();
}

function validateEmail(){
    if (email.validity.valid) {
        emailError.textContent = '';
        email.classList.remove('error');
        email.classList.add('active', 'success');
    } else {
        emailError.textContent = 'Please enter a valid email address';
        email.classList.add('active', 'error');
    }
}
function validateCountry(){
    if (country.validity.valid) {
        countryError.textContent = '';
        country.classList.remove('error');
        country.classList.add('active', 'success');
    } else {
        countryError.textContent = 'Please enter a country';
        country.classList.add('active', 'error');
    }
}
function validateZip(){
    if (zip.validity.valid) {
        zipError.textContent = '';
        zip.classList.remove('error');
        zip.classList.add('active', 'success');
    } else {
        zipError.textContent = 'Please enter a valid zip code';
        zip.classList.add('active', 'error');
    }
}
function validatePassword(){
    if (password.validity.valid) {
        passwordError.textContent = '';
        password.classList.remove('error');
        password.classList.add('active', 'success');
    } else {
        passwordError.textContent = 'Please enter a password';
        password.classList.add('active', 'error');
    }
}
function validatePasswordConfirm(){
    if (passwordConfirm.validity.valid && passwordConfirm.value === password.value) {
        passwordConfirmError.textContent = '';
        passwordConfirm.classList.remove('error');
        passwordConfirm.classList.add('active', 'success');
    } else if (passwordConfirm.value !== password.value) {
        passwordConfirmError.textContent = 'Passwords do not match';
        passwordConfirm.classList.add('active', 'error');
    }else {
        passwordConfirmError.textContent = 'Please confirm your password';
        passwordConfirm.classList.add('active', 'error');
    }
}

email.addEventListener('input', () => validateEmail());

country.addEventListener('input', () => {
    country.value = country.value.toUpperCase();
    validateCountry()
});

zip.addEventListener('input', () => {
    zip.value = zip.value.toUpperCase();
    validateZip()
});

password.addEventListener('input', () => {
    validatePassword()
    validatePasswordConfirm()
});

passwordConfirm.addEventListener('input', () => validatePasswordConfirm());



form.addEventListener('submit', (event) => validateForm(event));