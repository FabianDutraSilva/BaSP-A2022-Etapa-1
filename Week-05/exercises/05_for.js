/*---EXERCISE 5---*/
/*---FOR---*/

console.log('---EXERCISE 5---');

/*---a---*/
/*Crear un array que contenga 5 palabras y recorrer dicho array utilizando un 
bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/

var arr1, i, aux1, a, l;

arr1 = ['guitar', 'bass', 'drums', 'voice', 'shaker'];
for (i=0; i<5; i++){
    alert(arr1[i]);
}
console.log('5.a. the array alerted is: ', arr1);

/*---b---*/
/*Al array anterior convertir la primera letra de cada palabra en mayúscula 
y mostrar una alerta por cada palabra modificada.*/

for (i=0; i<5; i++){
    l = arr1[i].length;
    a = arr1[i].substring(0,1).toUpperCase();
    a += arr1[i].substring(1,l).toLowerCase();
    alert(a);
}
console.log('5.b. the previous array capitalizing the first letter of each word was alerted');

/*---c---*/
/*Crear una variable llamada “sentence” que tenga un string vacío, 
luego al array del punto a) recorrerlo con un bucle for para ir 
guardando cada palabra dentro de la variable sentence. 
Al final mostrar una única alerta con la cadena completa.*/

var sentence = '';

i=0;
for (i=0; i < 5 ; i++){
    sentence += arr1[i];
    sentence += ' ';
}
alert(sentence);
console.log('5.c. the string "sentence" alerted is: ', sentence);

/*---d---*/
/*Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array 
con el número de la repetición, es decir que al final de la ejecución del bucle 
for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. 
Mostrar por la consola del navegador el array final (utilizar console.log).*/

var arrEmpty;

arrEmpty = [];
for (i=0;i<10;i++){
    arrEmpty.push(i);
}
console.log('5.d. the empty array filled from 0 to 9 in a for loop is: ' , arrEmpty);