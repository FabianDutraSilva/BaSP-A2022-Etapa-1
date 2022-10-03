/*---EXERCISE 2---*/
/*---STRINGS---*/

console.log('---EXERCISE 2---');

/*---a---*/
/* Crear una variable de tipo string con al menos 10 caracteres y convertir
todo el texto en mayúscula (utilizar toUpperCase).*/

var strA1;

strA1 = 'Hi, I am a string with at least 10 characters';
console.log('2.a. "' + strA1 + '" with toUpperCase() is: ' + strA1.toUpperCase());

/*---b---*/
/* Crear una variable de tipo string con al menos 10 caracteres y generar
un nuevo string con los primeros 5 caracteres guardando el resultado
en una nueva variable (utilizar substring).*/

var strB1, strB2;

strB1 = 'Hey there! I am also a more than 10 character string';
strB2 = strB1.substring(0,5);
console.log('2.b. the first 5 characters of "' + strB1 + '" are: ' + strB2);

/*---c---*/
/* Crear una variable de tipo string con al menos 10 caracteres y generar
un nuevo string con los últimos 3 caracteres guardando el resultado en
una nueva variable (utilizar substring).*/

var  strC1, strC2;

strC1 = 'qwertyaserty';
strC2 = strC1.substring(strC1.length-3, strC1.length);
console.log('2.c. the last 3 characters of "' + strC1 + '" are: ' + strC2);

/*d- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una
nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var strD1, strD2;

strD1 = 'EVERYTHING will happen';
strD2 = strD1.substring(0,1).toUpperCase() + strD1.substring(1,strD1.length).toLowerCase();
console.log('2.d. "' + strD1 + '" turned into only first capital letter is: ' + strD2);

/*e- Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

var strE1, strE2;

strE1 = 'The last step';
strE2 = strE1.indexOf(' ',0);
console.log('2.e. the first blank space in "' + strE1 + '" is in position: ' + strE2);

/*f- Crear una variable de tipo string con al menos 2 palabras largas
(10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores
para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las
demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

var strF1, auxF1, strF2;

strF1 = 'sUpErCaliFrAgiLisTico eXpiAliDoso';
auxF1 = strF1.indexOf(' ');
strF2 = strF1.substring(0,1).toUpperCase();
strF2 += strF1.substring(1,++auxF1).toLowerCase();
strF2 += strF1.substring(auxF1,++auxF1).toUpperCase();
strF2 += strF1.substring(auxF1,strF1.length).toLowerCase();
console.log('2.f. "' + strF1 + '" capitalizing only the first letter is: ' + strF2);