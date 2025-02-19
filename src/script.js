function calculate(operation) {

    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');


    errorElement.textContent = '';


    if (!num1 || !num2) {
        errorElement.textContent = 'Будь ласка, заповніть обидва поля';
        return;
    }


    if (isNaN(num1) || isNaN(num2)) {
        errorElement.textContent = 'Будь ласка, введіть коректні числа';
        return;
    }


    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    let result;


    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                errorElement.textContent = 'Ділення на нуль неможливе';
                return;
            }
            result = number1 / number2;
            break;
        default:
            errorElement.textContent = 'Невідома операція';
            return;
    }


    result = Math.round(result * 100) / 100;


    resultElement.textContent = result;
}
