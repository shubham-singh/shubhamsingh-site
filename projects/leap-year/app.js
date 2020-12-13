let date = document.querySelector('#input');
let output = document.querySelector('.container-center');
let body = document.querySelector('body');
let heading = document.querySelector('#heading');
let today = new Date;
date.setAttribute('value', today.toISOString().split('T')[0]);

function leap(year) {
    if(year % 400 === 0)
    {
      return true;
    }
    else if(year % 100 === 0)
    {
      return false;
    }
    else if(year % 4 === 0)
    {
      return true;
    }
    else
    {
      return false;
    }
}

function checkLeap() {
    body.style.backgroundColor = "black";
    output.style.color = "white";
    date.remove();
    heading.remove();
    let year = parseInt(date.value.split('-')[0]);
    if(leap(year)) {
        output.innerText = "yes";
    }
    else {
        output.innerText = "no";
    }
}

date.addEventListener('change', checkLeap)