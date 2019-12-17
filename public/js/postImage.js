const title = document.getElementById('title')
const description = document.getElementById('description')
const filePath = document.getElementById('inputImage')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

let list = {}

function addToObject() {
    list[title.value] = {title: title.value, description: description.value, filePath: filePath.filePath};
    JSON.stringify(list);
    return false;

}