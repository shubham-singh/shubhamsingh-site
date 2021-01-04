document.addEventListener('DOMContentLoaded', () => {
    const date = document.querySelector('#date');
    const luckyNumber = document.querySelector('#lucky-number');
    const button = document.querySelector('input[type="button"]');
    const reset = document.querySelector('input[type="reset"]');
    const yes = document.querySelector('#yes');
    const no = document.querySelector('#no');
    const content = document.querySelector('#content');
    const btnPrivacy = document.querySelector('#btn-privacy');
    
    button.addEventListener('click', () => {
        if (date.value === '' || luckyNumber.value === '')
        {
            return;
        }
        let dobArray = (date.value).split('-');
        let dob = '';
        for(i = 0; i < dobArray.length; i++) 
            dob += dobArray[i];
        
        let lucky = luckyNumber.value;
        if (calculate(dob, lucky))
        {
            no.style.display = 'none';
            yes.style.display = 'block';
        }
        else
        {
            yes.style.display = 'none';
            no.style.display = 'block';
        }
    });
    
    reset.addEventListener('click', () => {
        no.style.display = 'none';
        yes.style.display = 'none';
    });

    btnPrivacy.addEventListener('click', () => {
        const footer = document.querySelector('#footer');
        content.style.filter = 'none';
        footer.style.display = 'block'
        btnPrivacy.parentElement.style.display = 'none';
    });
});


function calculate(dob, luckyNumber) {
    let sum = 0;
    let number = parseInt(dob);
    while (number != 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    if (sum % luckyNumber === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

