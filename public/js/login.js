const username = document.getElementById('username')
const password = document.getElementById('password')

const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (username.value.length < 3) {
        messages.push('Username must contain more than 2 alphanumeric characters')
    }

    if (password.value.length < 8) {
        messages.push('Password must be longer than 7 characters')
    }


    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})
let list = {}

function addToObject() {
    list[username.value] = {username: username.value, password: password.value};
    JSON.stringify(list);
    return false;

}