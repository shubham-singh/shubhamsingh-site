let date = document.querySelector('#input');
let output = document.querySelector('.container-center');
let body = document.querySelector('body');
let paragraph = document.querySelector('p');
let heading = document.querySelector('#heading');
let today = new Date;
date.setAttribute('value', today.toISOString().split('T')[0]);

function prime(num) {
    let result = num / 2;
    if (num == 2) {
        return true;
    }
    else {
        for (let i = 3; i < result + 1; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function checkPrime() {
    body.style.backgroundColor = "black";
    output.style.color = "white";
    date.remove();
    heading.remove();
    paragraph.remove();
    let numbers = date.value.split('-');
    let number = parseInt(numbers[2] + numbers[1]);
    console.log(number);
    if (prime(number)) {
        output.innerText = "yes";
    }
    else {
        output.innerText = "no";
    }
}

date.addEventListener('change', checkPrime);