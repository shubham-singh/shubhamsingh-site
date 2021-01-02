document.addEventListener('DOMContentLoaded', () => {
    let bill = document.getElementById('bill');
    let cash = document.getElementById('cash');
    let button = document.getElementById('button');
    let reset = document.getElementById('reset');

    bill.addEventListener('input', () => {
        if (bill.value === '') {
            cash.style.visibility = 'hidden';
        }
        else {
            cash.style.visibility = "visible";
            let cashMin = bill.value;
            cash.setAttribute('min', cashMin);
        }
    });

    button.addEventListener('click', function () {
        clear();
        let balance = cash.value - bill.value;
        const output = document.createElement('h2');
        output.innerHTML = 'Balance: ₹' + balance;
        document.body.appendChild(output);
        calChange(balance);
    });

    reset.addEventListener('click', clear);
});

function calChange(balance) {
    let key = [1, 2, 5, 10, 20, 50, 100, 200, 500, 2000];
    let currency = Object.create({});
    for (let i = 0, l = key.length; i < l; i++)
    {
        currency[key[i]] = 0;
    }
    const table = document.createElement('table');
    let theaad = table.createTHead();
    let tbody = table.createTBody();
    while (balance > 0) {
        for (let i = key.length; i >= 0; i--) {
            if (balance >= key[i]) {
                currency[key[i]]++;
                balance -= key[i];
                break;
            }
        }
    }
    for (let l = key.length, i = l; i >= 0; i--)
    {
        if(currency[key[i]] > 0)
        {
            let row = tbody.insertRow();
            let note = row.insertCell(0);
            let x = row.insertCell(1)
            let times = row.insertCell(2);
            note.innerHTML = "₹" + key[i];
            x.innerHTML = 'x';
            times.innerHTML = currency[key[i]];
        }
    }
    document.body.appendChild(table);
}

function clear() {
    if(document.querySelector('h2') !== null)
    {
        document.querySelector('h2').remove();
    }
    if (document.querySelector('table') !== null)
    {
        document.querySelector('table').remove();
    }
}