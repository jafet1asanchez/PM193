
//Objeto persona
const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};

//Aplicamos destructuración
const datos = {nombre, edad, direccion: {ciudad}} = persona;

//Imprimimos los datos como en el segundo punto
console.log(nombre, edad, ciudad);

//Imprimos el mensaje del tercer punto
console.log('Hola, me llamo ' + nombre + " y tengo " + edad + " años y vivo en " + ciudad + ".");


