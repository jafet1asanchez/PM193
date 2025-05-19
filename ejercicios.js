// EJERCICIO 1

//Con el let declaramos una variable que puede cambiar más adelante
let nombre = "Armando";

//Se sigue manteniendo como constante porque la edad no cambia
const edad = 25;

//Reasignamos el valor de nombre
nombre = "Jafet Abraham"

//Saludo
const saludo = "Hola, " + nombre + ". Tienes " + edad + " años."

//Mostramos el resultado en consola
console.log(saludo);

// EJERCICIO 2

//Escribimos una funcion tipo flecha (Arrow function) para que calcule el cuadrado de un numero
const cuadrado = (numero) => numero * numero;

//Pruebas con 3 numeros
console.log(cuadrado(2));
console.log(cuadrado(8));
console.log(cuadrado(10));


