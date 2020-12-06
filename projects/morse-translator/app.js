var button = document.querySelector('#btn-translate');

var input = document.querySelector('#txt-input');

var output = document.querySelector('#txt-output');

var url = "https://api.funtranslations.com/translate/morse.json?text=";

function errorHandler(error) {
    alert("Server down :(\nOnly 5 translations are allowed every hour");
}

function translate () {
    var inputText = input.value;
    var uri = url + inputText;
    var encoded = encodeURI(uri);
    fetch(encoded)
    .then(response => response.json())
    .then(json => output.innerText = json.contents.translated)
    .catch(errorHandler);
}

button.addEventListener('click', translate);