/*---EXERCISE 4---*/
/*---IF ELSE---*/
console.log('---EXERCISE 4---');

/*a- Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), 
si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater 
than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/
var p = Math.random();
if (p>=0.5){
    alert('4.a. the number "' + p + '" is greater than 0.5');
    console.log('4.a. the number "' + p + '" is greater than 0.5');
}
else{
    alert('4.a. the number "' + p + '" is lower than 0.5');
    console.log('4.a. the number "' + p + '" is lower than 0.5');
};

/*b- Crear una variable “Age” que contenga un número entero entre 0 y 100
 y muestre los siguientes mensajes de alerta:
“Baby” si la edad es menor a 2 años;
"Child" si la edad es entre 2 y 12 años;
"Teenager" entre 13 y 19 años;
"Young" entre 20 y 30 años;
"Adult" entre 31 y 60 años;
"Elder"” entre 61 y 75 años;
“Ancient” si es mayor a 75 años.*/
var age = Math.random()*100;
if (age < 2){
    alert('Baby');
}
else if (age < 13){
    alert('Child');
}
else if (age < 20){
    alert('Teenager');
}
else if (age < 31){
    alert('Young');
}
else if (age < 61){
    alert('Adult');
}
else if (age <= 75){
    alert('Elderly');
}
else {
    alert('Ancient');
};
console.log('4.b. the age is ' + age);