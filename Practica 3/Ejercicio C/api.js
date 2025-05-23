//Funcion para obtener datos de la API
function obtenerDatos() {
    //Declaracion de promesa
    return new Promise((resolve) => {
        //Funcion setTimeout para simular el tiempo de respuesta
        setTimeout(() => {
            resolve("Datos recibidos de la API");
            //Simulamos 2 segundos de espera con 2000(milisegundos)
        }, 2000);
    });
}

//Funcion asincrona que espera el resultado de la funcion anterior
async function mostrarDatos() {
    console.log("Esperando datos...")
    //Usamos await para que se espere la respuesta de la funcion antes de continuar
    const datos = await obtenerDatos();
    console.log(datos);
}

//Ejecutamos la funcion asincrona
mostrarDatos();