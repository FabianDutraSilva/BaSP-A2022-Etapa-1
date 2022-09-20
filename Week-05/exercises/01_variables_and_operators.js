/*---EXERCISE 1---*/
/*VARIABLES Y OPERADORES*/

/*---a---*/
/*Crear dos variables numéricas y utilizar el operador suma para 
guardar el valor de la suma de ambos números en una 3er variable.*/

var num1, num2, num3;

num1 = 1;
num2 = 2;
num3 = num1 + num2;
console.log('the sum of', num1, '+', num2, 'is:', num3);

/*---b---*/
/*Crear dos variables de tipo String y concatenarlas guardando el 
resultado en una 3er variable.*/

var strB1, strB2, strB3;

strB1 = 'hi';
strB2 = 'goodbye';
strB3 = strB1 + strB2;
console.log('the concatenation of "' + strB1 + '" and "' + strB2 + '" is:', strB3);

/*---c---*/
/*Crear dos variables de tipo String y sumar el largo de cada variable 
(cantidad de letras del string) guardando el resultado de la suma en una 
3er variable (utilizar length).*/

var strC1, strC2, strC3;

strC1 = 'one';
strC2 = 'two';
strC3 = strC1.length + strC2.length;
console.log('the length of "' + strC1 + '" plus the length of "' + strC2 + '" is:', strC3);