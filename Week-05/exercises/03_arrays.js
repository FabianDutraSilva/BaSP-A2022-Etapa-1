/*---EXERCISE 3---*/
/*---ARRAYS---*/

console.log('---EXERCISE 3---');

/*---a---*/
/*Dado el siguiente array: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

var months, monthsPartial;

months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
'September', 'October', 'November', 'December'];
console.log('3.a.i. the 5th month of the year is: ' + months[4]);
console.log('3.a.ii. the 11th month of the year is: ' + months[10]);

/*---b---*/
/*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

months.sort();
console.log('3.b. the months ordered alphabetically are: ',  months);

/*---c---*/
/*Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
'September', 'October', 'November', 'December'];
months.unshift('Hi');
months.push('Goodbye');
console.log('3.c. adding "Hi" and "Goodbye" at the beggining and the end respectively is: ', months);

/*---d---*/
/*Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
'September', 'October', 'November', 'December'];
months.shift();
months.pop();
console.log('3.d. erasing first and last element of the array months returns: ', months);

/*---e---*/
/*Invertir el orden del array (utilizar reverse).*/

months.reverse();
console.log('3.e. reversing the months we get: ', months);

/*---f---*/
/*Unir todos los elementos del array en un único string donde cada mes este 
separado por un guión - (utilizar join).*/

months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
'September', 'October', 'November', 'December'];
console.log('3.f. months separated by a "-" are: ' + months.join('-'));

/*---g---*/
/*Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

monthsPartial = months.slice(4,11);
console.log('3.g. months from May to November are: ', monthsPartial);