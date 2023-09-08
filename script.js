
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin()
    }
}


function generatePin() {
    const randomPin = Math.round(Math.random() * 10000);
    return randomPin;
}

document.getElementById('generate-btn').addEventListener('click', function () {
    const pin = getPin();
    //    console.log(pin);
    const displayField = document.getElementById('display-field');
    displayField.value = pin;
    return pin;

})

document.getElementById('calcutor').addEventListener('click', function (event) {
    const number = event.target.innerText;

    const calField = document.getElementById("cal-field");
    const previousTypedNumber = calField.value;

    if (isNaN(number)) {
        if (number === 'C') {
            calField.value = '';
        } else if (number === '<') {
            const digit = previousTypedNumber.split('');
            digit.pop();
            calField.value = digit.join('');
        }
    } else {
        const newNumber = previousTypedNumber + number;

        calField.value = newNumber

    }
})

document.getElementById('submit-btn').addEventListener('click',function(){
   
    const pinField = document.getElementById('display-field').value;
    const calField = document.getElementById('cal-field').value;
    const successMsg = document.getElementById('success');
    const failuerMsg = document.getElementById('failed');

    if(pinField === calField){
    successMsg.style.display = 'block';
    failuerMsg.style.display = 'none';

    // console.log(successMsg)
    }else{
        failuerMsg.style.display = 'block';
        successMsg.style.display = 'none';
    }
})