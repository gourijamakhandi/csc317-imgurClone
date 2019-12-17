const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('registrationPassword')
const confirmPassword = document.getElementById('confirmPassword')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

let list = {}
let messages = []
function addToObject() {
    list[username.value] = {username: username.value, email: email.value, password: password.value};
    JSON.stringify(list);
    return false;
}

function validatePassword(text) {
    if (text.value === "") {
        messages.push('Please enter a password');
        return false;
    }
    else {
        const upperCaseLetters = /[A-Z]/g;
        if (text.value.match(upperCaseLetters)){}
        else {
            messages.push('Password must contain one uppercase letter');
            return false;
        }
        const numbers = /[0-9]/g;
        if(text.value.match(numbers)){}
        else {
            messages.push('Password must contain one number');
            return false;
        }
        const specialChar = /[/*!@#$^&*-]/g;
        if(text.value.match(specialChar)){}
        else {
            messages.push('Password must contain one special character');
            return false;
        }
        if(text.value.length >= 8){}
        else {
            messages.push('Password must be a minimum of 8 characters');
            return false;
        }
        return true;
    }
}

form.addEventListener('submit', (e) => {

    if (username.value.length < 3)
    {
        messages.push('Username must contain more than 2 alphanumeric characters')
    }

    if (!(validatePassword(password)))
    {
        //messages.push('Password must be longer than 7 characters')
    }

    if (password.value !== confirmPassword.value)
    {
        messages.push('Passwords must match')
    }


    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})