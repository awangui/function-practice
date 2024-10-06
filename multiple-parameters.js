function calculate(num1, num2,  operation){
    if (operation === 'add' || operation === '+'){
    return console.log(num1 + num2);
    }
    else if (operation === 'subtract' || operation === '-'){
    return  console.log(num1 - num2);
    }
    else if (operation === 'multiply' || operation === '*'){
    return console.log(num1 * num2);
    }
    else if (operation === 'divide' || operation === '/'){
    return console.log(num1 / num2);
    }
    else {
    return 'Invalid operation';
    }
}
calculate(10, 5, "add");
calculate(10, 5, "subtract");
calculate(10, 5, "multiply");
calculate(10, 5, "divide");