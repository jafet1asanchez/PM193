//Arreglo de personas
const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "Maria", edad: 28 }
];

//Funcion .find para buscar a la persona llamada Luis
const nombreIgual = personas.find (p => p.nombre === "Luis");

//Probamos el find
console.log("Prueba de la función .find:");
console.log(nombreIgual);

//Funcion forEach para imprimir el nombre de las personas con la edad
//Para imprimir objetos, no se usa +, se usa ',' para poder concatenarlo
personas.forEach((datos) => console.log("Prueba del forEach. Nombre:", datos.nombre, " Edad:", datos.edad));

//Funcion reduce para sumar las edad e imprimir el total
//En el return especificamos con .edad que solo queremos extraer el dato de la edad de la persona
//Con el 0 final le damos valor inicial al acumulador de 0
const sumaEdades = personas.reduce((acumulador, persona) => {
    return acumulador + persona.edad;
}, 0)

//Imprimimos la suma de las edades
console.log(sumaEdades);