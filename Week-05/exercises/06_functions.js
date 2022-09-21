/*---EXERCISE 6---*/
/*---FUNCTIONS---*/

console.log('---EXERCISE 6---');

/*---a---*/
/*Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor
de dicha variable en la consola del navegador.*/

function sum(a,b){
    return a+b;
}

var c = sum(1,2);
console.log('6.a. sum(1,2) returns:', c);

/*---b---*/
/*A la función suma anterior, agregarle una validación para controlar
si alguno de los parámetros no es un número; de no ser un número, mostrar
una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

function sum(a,b){
    if (typeof a == 'number' && typeof b == 'number'){
        return a+b;
    }
    else{
        alert('One of the parameters is not a number');
        return NaN;
    }
}

console.log('6.b.i. sum(2,3) returns:', sum(2,3));
console.log('6.b.ii. sum(1,e) returns:', sum(1,'e'));

/*---c---*/
/*Aparte, crear una función validate Integer que reciba un número como parámetro
y devuelva verdadero si es un número entero.*/

function validateInteger(x){
    return Number.isInteger(x);
}

console.log('6.c. function validateInteger created');

/*---d---*/
/*A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c.
y que valide que los números sean enteros. En caso que haya decimales mostrar un
alerta con el error y retornar el número convertido a entero (redondeado).*/

function sum(a,b){
    if (typeof a == 'number' && typeof b == 'number'){
        if (validateInteger(a) == true && validateInteger(b) == true){
            return a+b;
        }
        else{
            alert('The result is a decimal number, and it is going to be truncated');
            return Math.trunc(a+b);
        }
    }
    else{
        alert('One of the parameters is not a number');
        return NaN;
    }
}

console.log('6.d.i. sum(3,4) returns:', sum(3,4));
console.log('6.d.ii. sum(1,+) returns:', sum(1,'+'));
console.log('6.d.iii. sum(1,1.5) returns:', sum(1,1.5));

/*---e---*/
/*Convertir la validación del ejercicio 6d) en una función separada y llamarla
dentro de la función suma probando que todo siga funcionando igual.*/

function isOkToSum(isOk1,isOk2){
    if (validateInteger(isOk1) == true && validateInteger(isOk2) == true){
        return isOk1 + isOk2;
    }
    else{
        alert('The result is a decimal number, and it is going to be truncated');
        return Math.trunc(isOk1+isOk2);
    }
}

function sum(a,b){
    if (typeof a == 'number' && typeof b == 'number'){
        return isOkToSum(a,b);
    }
    else{
        alert('One of the parameters is not a number');
        return NaN;
    }
}

console.log('6.e.i. sum(4,5) returns:', sum(4,5));
console.log('6.e.ii. sum(1,/) returns:', sum(1,'/'));
console.log('6.e.iii. sum(1,2.5) returns:', sum(1,2.5));