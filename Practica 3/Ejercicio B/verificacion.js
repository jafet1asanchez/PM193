//Creamos nuestra promesa con la funcion
function verificarUsuarios(usuario) {
    //Declaracion de nueva promesa conn parametros resolve y reject
    return new Promise((resolve, reject) => {
        //Condicion para si todo sale bien
        if (usuario === "admin") {
            resolve("Acceso concedido");
        //Condicion para si todo sale mal
        } else {
            reject("Acceso denegado");
        }
    });
}

//Hacemos una pruba si recibe a un usuario con nombre de admin o jafet
verificarUsuarios("admin")
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));

verificarUsuarios("jafet")
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));