// color flipper 

document.write('Hello World from java script');

/*let num1 = document.getElementById('number1').value;

let num2 = document.getElementById('number2').value;

let result = num1 + num2;

document.getElementById('result').innerHTML = result; */

function result (){
    let num1 = parseInt(document.getElementById('number1').value);

    let num2 = parseInt(document.getElementById('number2').value);

    let result = num1 + num2;

    document.getElementById('result').innerHTML = result;

};
document.write(num1+num2)